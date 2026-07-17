import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("https://kaixutang.github.io/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the academic homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Kaixu Tang \| Academic Homepage<\/title>/i);
  assert.match(html, /Currently seeking PhD opportunities/);
  assert.match(html, /Department of Statistics/);
  assert.match(html, /Peking University/);
  assert.match(html, /Hao Ge/);
  assert.match(html, /Hongyu Zhao/);
  assert.match(html, /Please feel free to reach out!/);
  assert.match(html, /Undergraduate Research Fellow/);
  assert.match(html, /37th Chinese Mathematical Olympiad/);
  assert.match(html, /Applied Mathematics &amp; Statistics Elite Program/);
  assert.match(html, /Dark mode/);
  assert.match(html, /Delphi Benchmark/);
  assert.doesNotMatch(html, /Incoming PhD/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("includes accessible navigation and real contact links", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /href="https:\/\/github\.com\/KaixuTang"/);
  assert.match(html, /href="https:\/\/stat\.pku\.edu\.cn\/en\/"/);
  assert.match(
    html,
    /href="https:\/\/medicine\.yale\.edu\/profile\/hongyu-zhao\/"/,
  );
  assert.match(
    html,
    /href="https:\/\/www\.linkedin\.com\/in\/kaixu-tang-a90409374\/"/,
  );
  assert.match(html, /href="mailto:2300012401@stu\.pku\.edu\.cn"/);
  assert.match(html, /CV \(coming soon\)/);
  assert.match(html, /Google Scholar/);
  assert.match(html, /aria-label="Switch to dark mode"/);
});
