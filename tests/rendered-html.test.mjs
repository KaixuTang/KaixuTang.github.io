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
  assert.match(html, /<title>Kaixu Tang \| Statistics at Peking University<\/title>/i);
  assert.match(html, /2027 Fall PhD opportunities/);
  const about = html.match(/<header id="about"[^>]*>([\s\S]*?)<\/header>/)?.[1] ?? "";
  assert.match(about, /currently seeking PhD opportunities in statistics and biostatistics for Fall 2027/);
  assert.match(html, /Statistics &amp; Biostatistics/);
  assert.match(html, /Department of Statistics/);
  assert.match(html, /School of Mathematical Sciences/);
  assert.match(html, /Peking University/);
  assert.match(html, /Senior Undergraduate Student/);
  assert.match(about, /I am a senior undergraduate studying statistics/);
  assert.match(html, /Hao Ge/);
  assert.match(html, /Hongyu Zhao/);
  assert.match(html, /Leqi Xu/);
  assert.match(html, /Molei Liu/);
  assert.match(html, /Manuscripts/);
  assert.match(html, /rel="canonical" href="https:\/\/kaixutang\.github\.io\/"/);
  assert.match(html, /Undergraduate Research Intern/);
  assert.match(html, /37th China Mathematical Olympiad/);
  assert.match(html, /Applied Mathematics &amp; Statistics Elite Program/);
  assert.match(html, /Dark mode/);
  assert.match(html, /Research Interests/);
  assert.match(html, /Statistical genetics/);
  assert.match(html, /Transfer learning for multi-omics prediction/);
  assert.match(html, /AI for biology/);
  assert.match(html, /Selected Course Projects/);
  assert.match(html, /aria-label="Fall 2025"/);
  assert.match(html, /aria-label="Spring 2025"/);
  assert.match(html, /Implicit Bias on Multiclass Separable Data under Norm Constraints/);
  assert.match(html, /Conditional Average Treatment Effects/);
  assert.match(html, /Bayesian Expression Recovery/);
  assert.match(html, /Mammalian Circadian Clock/);
  assert.doesNotMatch(html, />Delphi Benchmark</);
  assert.match(html, /src="\/profile\.png"/);
  assert.doesNotMatch(html, /Incoming PhD/i);
  assert.doesNotMatch(html, /honored to be advised/i);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview|react-loading-skeleton/i);
});

test("includes accessible navigation and real contact links", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /aria-label="Primary navigation"/);
  assert.match(html, /href="https:\/\/github\.com\/KaixuTang"/);
  assert.doesNotMatch(html, /href="https:\/\/stat\.pku\.edu\.cn\/en\/"/);
  assert.match(
    html,
    /href="http:\/\/faculty\.bicmr\.pku\.edu\.cn\/~gehao\/"/,
  );
  assert.match(html, /href="https:\/\/zhaocenter\.org\/"/);
  assert.match(html, /href="https:\/\/moleibobliu\.github\.io\/"/);
  assert.match(html, /href="https:\/\/leqixu\.github\.io\/"/);
  assert.match(
    html,
    /href="https:\/\/www\.linkedin\.com\/in\/kaixu-tang-a90409374\/"/,
  );
  assert.match(html, /href="mailto:2300012401@stu\.pku\.edu\.cn"/);
  assert.match(html, /href="\/Kaixu_Tang_CV\.pdf"/);
  assert.match(html, /href="https:\/\/arxiv\.org\/abs\/2603\.22824"/);
  assert.match(
    html,
    /href="\/course-projects\/CATE_Multi_Valued_Treatments\.pdf"/,
  );
  assert.match(
    html,
    /href="\/course-projects\/Bayesian_Expression_Recovery\.pdf"/,
  );
  assert.match(
    html,
    /href="\/course-projects\/Mammalian_Circadian_Clock\.pdf"/,
  );
  assert.doesNotMatch(html, /CV \(coming soon\)/);
  assert.match(html, /Google Scholar/);
  assert.match(html, />WeChat<\/button>/);
  assert.match(
    html,
    /href="https:\/\/kaixutang\.github\.io\/favicon\.jpg"/,
  );
  assert.match(html, /aria-label="Switch to dark mode"/);
});
