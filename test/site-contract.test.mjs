import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";

const port = 43127;
const origin = `http://127.0.0.1:${port}`;
let server;

async function waitForServer() {
  const deadline = Date.now() + 20_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(origin);
      if (response.ok) return;
    } catch {
      // The production server is still starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error("Timed out waiting for the production server");
}

before(async () => {
  server = spawn(
    process.execPath,
    [
      "node_modules/next/dist/bin/next",
      "start",
      "--hostname",
      "127.0.0.1",
      "--port",
      String(port),
    ],
    { stdio: ["ignore", "pipe", "pipe"] },
  );
  await waitForServer();
});

after(() => {
  server?.kill();
});

test("homepage exposes the canonical, identity, trust, and security contract", async () => {
  const response = await fetch(origin);
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(
    response.headers.get("content-security-policy") ?? "",
    /default-src 'self'/,
  );
  assert.doesNotMatch(
    response.headers.get("content-security-policy") ?? "",
    /(?:^|\s)\*(?:\s|;|$)/,
  );
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.match(
    html,
    /<link rel="canonical" href="https:\/\/earnbots\.fun\/?"/,
  );
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /&quot;Organization&quot;|"Organization"/);
  assert.match(html, /href="\/about"/);
  assert.match(html, /href="\/contact"/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /Start with the sourced research/);
});

test("crawler discovery files are useful and trust pages are reachable", async () => {
  const [robots, sitemap, llms, about, contact, privacy] = await Promise.all(
    [
      "/robots.txt",
      "/sitemap.xml",
      "/llms.txt",
      "/about",
      "/contact",
      "/privacy",
    ].map((path) => fetch(`${origin}${path}`)),
  );

  for (const response of [robots, sitemap, llms, about, contact, privacy]) {
    assert.equal(response.status, 200);
  }

  const robotsText = await robots.text();
  assert.match(robotsText, /User-Agent: GPTBot/i);
  assert.match(robotsText, /Sitemap: https:\/\/earnbots\.fun\/sitemap\.xml/i);
  assert.match(await sitemap.text(), /<loc>https:\/\/earnbots\.fun\/privacy<\/loc>/);
  assert.match(await llms.text(), /does not operate a public API/i);
});

test("browser and GPTBot receive the same substance without a fabricated contract", async () => {
  const [browserResponse, botResponse, openApiResponse] = await Promise.all([
    fetch(origin, { headers: { "user-agent": "Mozilla/5.0" } }),
    fetch(origin, { headers: { "user-agent": "GPTBot/1.2" } }),
    fetch(`${origin}/openapi.json`),
  ]);
  const [browserHtml, botHtml] = await Promise.all([
    browserResponse.text(),
    botResponse.text(),
  ]);

  assert.equal(browserResponse.status, 200);
  assert.equal(botResponse.status, 200);
  assert.match(browserHtml, /The honest current state/);
  assert.match(botHtml, /The honest current state/);
  assert.equal(openApiResponse.status, 404);
});
