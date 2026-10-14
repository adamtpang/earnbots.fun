import { appendFile, mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const MARKET_URL = "https://gamma-api.polymarket.com/markets?closed=false&active=true&limit=40&order=volume24hr&ascending=false";
const BOOK_ORIGIN = "https://clob.polymarket.com";
const BODY_LIMIT = 2_000_000;
const finite = value => value !== null && value !== "" && Number.isFinite(Number(value));

// Fixed public GET endpoints only: no signer, wallet, trading client or model API.
export async function publicJson(url, fetcher = fetch) {
  const parsed = new URL(url);
  if (url !== MARKET_URL && !(parsed.origin === BOOK_ORIGIN && parsed.pathname === "/book" && /^\d{1,100}$/.test(parsed.searchParams.get("token_id") ?? ""))) {
    throw new Error("Endpoint is outside the public-data allowlist");
  }
  const response = await fetcher(url, {
    method: "GET", redirect: "error", signal: AbortSignal.timeout(15_000),
    headers: { accept: "application/json" },
  });
  if (!response.ok) throw new Error(`Public data returned HTTP ${response.status}`);
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > BODY_LIMIT) throw new Error("Public response exceeded the size limit");
      chunks.push(value);
    }
  } finally {
    await reader.cancel();
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function list(value) {
  try { return Array.isArray(value) ? value : JSON.parse(value); }
  catch { return []; }
}

export function selectMarkets(rows, now = Date.now()) {
  if (!Array.isArray(rows)) throw new Error("Invalid market list");
  return rows.filter(row => {
    const tokens = list(row.clobTokenIds);
    const outcomes = list(row.outcomes);
    return row.active === true && row.closed === false && row.acceptingOrders === true && row.enableOrderBook === true
      && Date.parse(row.endDate) > now && Array.isArray(tokens) && tokens.length === 2
      && tokens.every(token => typeof token === "string" && /^\d{1,100}$/.test(token))
      && Array.isArray(outcomes) && outcomes.length === 2 && outcomes.every(outcome => typeof outcome === "string");
  }).slice(0, 5).map(row => ({
    id: String(row.id).slice(0, 100), question: String(row.question).slice(0, 300),
    endDate: row.endDate, feesEnabled: typeof row.feesEnabled === "boolean" ? row.feesEnabled : null,
    outcomes: list(row.outcomes).map((label, i) => ({ label: label.slice(0, 100), tokenId: list(row.clobTokenIds)[i] })),
  }));
}

export function summarizeBook(book, tokenId, now = Date.now()) {
  if (book.asset_id !== tokenId) throw new Error("Order book token mismatch");
  if (!Array.isArray(book.bids) || !Array.isArray(book.asks)) throw new Error("Invalid order book levels");
  const levels = side => side.filter(level => finite(level.price) && Number(level.price) > 0 && Number(level.price) < 1
    && finite(level.size) && Number(level.size) > 0).map(level => ({ price: Number(level.price), shares: Number(level.size) }));
  const bids = levels(book.bids).sort((a, b) => b.price - a.price);
  const asks = levels(book.asks).sort((a, b) => a.price - b.price);
  const timestamp = finite(book.timestamp) ? Number(book.timestamp) : null;
  const ageMs = timestamp === null ? null : now - timestamp;
  const crossed = bids.length > 0 && asks.length > 0 && bids[0].price >= asks[0].price;
  return {
    tokenId, observedAt: new Date(now).toISOString(), sourceTimestamp: timestamp,
    stale: ageMs === null || ageMs > 300_000 || ageMs < -30_000,
    crossed, bestBid: bids[0] ?? null, bestAsk: asks[0] ?? null,
    spread: bids.length && asks.length ? Number((asks[0].price - bids[0].price).toFixed(6)) : null,
    minOrderShares: finite(book.min_order_size) && Number(book.min_order_size) > 0 ? Number(book.min_order_size) : null,
    tickSize: finite(book.tick_size) ? Number(book.tick_size) : null,
    negativeRisk: typeof book.neg_risk === "boolean" ? book.neg_risk : null,
    // Quotes are observations, not executable fills or estimates of fair value.
    feeEstimate: null, independentForecast: null, action: "observe",
  };
}

export async function collect({ fetcher = fetch, now = () => Date.now() } = {}) {
  const startedAt = new Date(now()).toISOString();
  const markets = selectMarkets(await publicJson(MARKET_URL, fetcher), now());
  if (!markets.length) throw new Error("No eligible markets in this bounded sample");
  let healthyBooks = 0;
  const observations = [];
  for (const market of markets) {
    const outcomes = [];
    for (const outcome of market.outcomes) {
      try {
        const book = summarizeBook(await publicJson(`${BOOK_ORIGIN}/book?token_id=${outcome.tokenId}`, fetcher), outcome.tokenId, now());
        if (!book.stale && !book.crossed && book.bestBid && book.bestAsk) healthyBooks++;
        outcomes.push({ label: outcome.label, ...book });
      } catch (error) {
        outcomes.push({ ...outcome, action: "observe", error: error instanceof Error ? error.message.slice(0, 200) : "Unknown data error" });
      }
    }
    observations.push({ ...market, outcomes });
  }
  return {
    schemaVersion: 1, startedAt, finishedAt: new Date(now()).toISOString(),
    mode: "public-data-research", status: healthyBooks === markets.length * 2 ? "complete" : healthyBooks ? "partial" : "failed",
    sample: "Up to five active, future-dated binary markets from the first forty by 24h volume; not a representative sample.",
    healthyBooks, observations, independentForecastConfigured: false,
    paperPositionsOpened: 0, realOrdersSubmitted: 0, walletConnected: false,
    paidModelCalls: 0, paidServiceSpendUsd: 0, verifiedRevenueUsd: 0,
    decision: "No independent calibrated forecast or complete fee model; no trade signals or simulated earnings.",
  };
}

const escapeMarkdown = value => String(value).replace(/[&<>|\r\n`]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "|": "&#124;", "\r": " ", "\n": " ", "`": "&#96;" })[char]);

export function summaryMarkdown(snapshot) {
  return [
    "## Earnbots public market research", "",
    `Observed: ${snapshot.finishedAt}. Status: **${snapshot.status}**. Healthy books: ${snapshot.healthyBooks}.`, "",
    "No wallet connected. No orders, model calls, trade signals or verified revenue. This is a data collector, not a profitable trading agent.", "",
    "| Market / outcome | Best bid | Best ask | Min shares | Data quality |",
    "| --- | ---: | ---: | ---: | --- |",
    ...snapshot.observations.flatMap(market => market.outcomes.map(outcome =>
      `| ${escapeMarkdown(market.question)} / ${escapeMarkdown(outcome.label)} | ${outcome.bestBid?.price ?? "—"} | ${outcome.bestAsk?.price ?? "—"} | ${outcome.minOrderShares ?? "—"} | ${outcome.error ? escapeMarkdown(outcome.error) : outcome.stale ? "stale" : outcome.crossed ? "crossed" : !outcome.bestBid || !outcome.bestAsk ? "one-sided" : "two-sided"} |`)),
    "", snapshot.sample, "", snapshot.decision, "",
    "Full public observation JSON is in this job's logs. Download and retain it before log expiry to run a longitudinal study.", "",
  ].join("\n");
}

async function main() {
  const snapshot = await collect();
  const destination = resolve(".artifacts/market-watch", `${snapshot.startedAt.replaceAll(":", "-")}.json`);
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, `${JSON.stringify(snapshot, null, 2)}\n`);
  console.log(JSON.stringify(snapshot));
  if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, summaryMarkdown(snapshot));
  if (snapshot.status === "failed") throw new Error("No healthy order books collected");
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch(error => { console.error(error instanceof Error ? error.message : "Research collection failed"); process.exitCode = 1; });
}
