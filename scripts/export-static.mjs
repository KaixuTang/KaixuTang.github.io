import { writeFile } from "node:fs/promises";

const { default: worker } = await import("../dist/server/index.js");

const response = await worker.fetch(
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

if (!response.ok) {
  throw new Error(`Static export failed with HTTP ${response.status}`);
}

const html = await response.text();

if (!html.includes("2027 Fall PhD opportunities")) {
  throw new Error("Static export is missing the PhD search status");
}

await writeFile(new URL("../dist/client/index.html", import.meta.url), html);
await writeFile(new URL("../dist/client/.nojekyll", import.meta.url), "");

console.log("Static GitHub Pages export written to dist/client");
