import assert from "node:assert/strict";
import { test } from "node:test";
import { collect, publicJson, selectMarkets, summarizeBook, summaryMarkdown } from "../scripts/market-watch.mjs";

const now = Date.parse("2026-10-14T12:00:00Z");
const market = { id: 1, question: "Example?", active: true, closed: false, acceptingOrders: true, enableOrderBook: true,
  endDate: "2026-10-20T00:00:00Z", clobTokenIds: '["123", "456"]', outcomes: '["Yes", "No"]', feesEnabled: true };
const book = token => ({ asset_id: token, timestamp: String(now), min_order_size: "5", tick_size: "0.01",
  bids: [{ price: "0.1", size: "99" }, { price: "0.5", size: "10" }, { price: "NaN", size: "100" }],
  asks: [{ price: "0.9", size: "99" }, { price: "0.6", size: "11" }, { price: "0.2", size: "-1" }] });

test("market selection rejects expired, untradable and malformed records and bounds requests", () => {
  assert.equal(selectMarkets(Array(20).fill(market), now).length, 5);
  for (const changes of [{ closed: true }, { acceptingOrders: false }, { endDate: "2026-10-01" }, { clobTokenIds: 'null' }, { outcomes: '{}' }, { clobTokenIds: '["https://evil.example", "2"]' }]) {
    assert.deepEqual(selectMarkets([{ ...market, ...changes }], now), []);
  }
});

test("books use actual sorted quotes, detect stale/crossed books, and never infer a forecast", () => {
  const result = summarizeBook(book("123"), "123", now);
  assert.deepEqual(result.bestBid, { price: 0.5, shares: 10 });
  assert.deepEqual(result.bestAsk, { price: 0.6, shares: 11 });
  assert.equal(result.spread, 0.1);
  assert.equal(result.independentForecast, null);
  assert.equal(result.action, "observe");
  assert.equal(summarizeBook(book("123"), "123", now + 400_000).stale, true);
  assert.equal(summarizeBook({ ...book("123"), timestamp: null }, "123", now).stale, true);
  assert.equal(summarizeBook({ ...book("123"), asks: [{ price: "0.4", size: "1" }] }, "123", now).crossed, true);
  assert.throws(() => summarizeBook(book("456"), "123", now), /mismatch/);
});

test("network client rejects arbitrary hosts and writes, and bounds response size", async () => {
  await assert.rejects(publicJson("https://example.com"), /allowlist/);
  await assert.rejects(publicJson("https://clob.polymarket.com/order"), /allowlist/);
  await assert.rejects(publicJson("https://clob.polymarket.com/book?token_id=1", async () => new Response("x".repeat(2_000_001))), /size limit/);
});

test("collector records outages without inventing positions or earnings", async () => {
  let requests = 0;
  const fetcher = async (url, options) => {
    requests++;
    assert.equal(options.method, "GET");
    assert.equal(options.redirect, "error");
    if (url.startsWith("https://gamma-api")) return Response.json([market]);
    return new Response("unavailable", { status: 503 });
  };
  const snapshot = await collect({ fetcher, now: () => now });
  assert.equal(requests, 3);
  assert.equal(snapshot.status, "failed");
  assert.equal(snapshot.healthyBooks, 0);
  assert.equal(snapshot.realOrdersSubmitted, 0);
  assert.equal(snapshot.verifiedRevenueUsd, 0);
  assert.match(snapshot.observations[0].outcomes[0].error, /503/);
});

test("successful collector remains observation-only and escapes external text in summaries", async () => {
  const fetcher = async url => Response.json(url.startsWith("https://gamma-api") ? [{ ...market, question: "<img>|`\n" }] : book(new URL(url).searchParams.get("token_id")));
  const snapshot = await collect({ fetcher, now: () => now });
  assert.equal(snapshot.status, "complete");
  assert.equal(snapshot.healthyBooks, 2);
  assert.equal(snapshot.paperPositionsOpened, 0);
  assert.equal(snapshot.paidModelCalls, 0);
  assert.equal(snapshot.walletConnected, false);
  assert.match(summaryMarkdown(snapshot), /&lt;img&gt;&#124;&#96;/);
  assert.doesNotMatch(summaryMarkdown(snapshot), /<img>/);
});
