# WU0.4 Config & Workflow Dry-Run Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Scratch target: `/tmp/docmd-wu01-dryrun` (full 8-version tree)
- Ledger: objective "WU0.4 config and workflows", token `sha256:07225090…` (hand-authored files); lockfile lands under a separate objective "WU0.4 lockfile (generated)" — `rescope` only narrows budgets, so the 1,367-line generated file gets its own bounded objective (both commits, same stacked PR).

## Files delivered

| File | Content |
|---|---|
| `package.json` | exact pin `"@docmd/core": "0.9.4"` (R5), node ≥20, scripts dev/build/validate/check:images (bin verified: `docmd`) |
| `package-lock.json` | generated from the exact repo package.json (`--package-lock-only`); **1,367 lines, 86 packages, lockfileVersion 3** — committed under the lockfile objective, reviewed as generated |
| `docmd.config.json` | `title`, `url: "https://e-evolution.github.io/wiki"` (D8 subpath), `versions` block **verbatim D2** (8 entries, sanitized ids, `position: sidebar`), `redirects: {}` (WU0.7 fills only non-identity entries — see R10 below), plugins: search (`semantic: false`), llms, seo.defaultDescription (D9; `description` is NOT a valid top-level property — WU0.3 finding, moved to `plugins.seo`) |
| `.github/workflows/docs.yml` | per design §2.5: PR gate (checkout → node 20 → `npm ci` → build → ci-validate → check-images) + main-only deploy (`docmd-io/deploy@v1` → `upload-pages-artifact@v3` → `deploy-pages@v4`, `contents/pages/id-token` write). Bootstrap guards: gate no-ops until `docs/index.md` exists (WU0.5+); deploy requires `assets/img` present (WU0.6+) so the Pages subpath never serves a partial site |
| `.github/workflows/build-benchmark.yml` | `workflow_dispatch` only; timed build (ms), version + timestamps into the job summary (OQ2 standing measurement, D6) |
| `.gitignore` | + `site/`, `node_modules/` |

## Verification (all against the EXACT repo file bytes)

| Check | Result |
|---|---|
| `npm install --package-lock-only` from repo package.json | lockfile pins `@docmd/core 0.9.4` (integrity + tarball URL) |
| `npm ci` (lockfile) | resolves **exactly 0.9.4** ✓ (then `node_modules` removed; CI runs `npm ci` itself) |
| YAML syntax both workflows | OK |
| Build with repo config bytes (scratch 8-version tree) | **Versions 8 (rs5x…devices)**, 2,051 pages in 9.1 s, exit 0; only the known 3 pre-existing normaliser warnings |
| Sitemap url-prefix (C6) | `<loc>https://e-evolution.github.io/wiki/about/…</loc>` — subpath handled from `url` ✓ |
| llms.txt / search | `llms.txt` present (title + docs sections); `search-index.json` 9.0 MB, `_docmd-search/` emitted |
| Version routing (HTTP, WU0.4 config) | `/` 200, `/rs4x/updates/` 200, `/adm394/` 200 — switcher dirs built at `/<id>/` per C4 |
| `docmd init` 0.9.4 template diff | valid top-level keys confirmed (title/url/src/out/layout/theme/navigation/plugins); no `description`, no `versions` in template but schema accepts it (build prints the 8-version table, no unknown-property warning) |

## R10 CLOSED (from 0.9.4 dist source, not docs)

`dist/commands/build.js` (step "GENERATE STATIC REDIRECTS"): `config.redirects` is a **map** `{ "from-path": "to-url" }`, emitted as static **meta-refresh HTML pages** at `site/<from>/index.html` (+ `<link rel="canonical">`, JS `location.replace`). Consequences:

1. Array-of-`{from,to}` (my WU0.2 probe shape) is silently ineffective — the map shape is the only working one (a probe `/probe-redirect-wu04` entry in array form 404'd).
2. **Identity entries are destructive**: a `from` equal to a built page's path overwrites that page's `index.html` with a self-redirect. Under D1 + WU0.3's canonical-URL finding (new URL = old URL, trailing slash preserved), **every old URL already resolves on the new site — the cutover needs ZERO config redirects**.
3. Plan refinement (cost-free, no content change): WU0.7's `gen-redirects.mjs` must (a) keep emitting the 1,284-entry **coverage manifest** (the cutover checklist / spec artifact) and (b) emit the config `redirects` map with **only non-identity / missing-on-new-site entries** (expected: none; resolver decides). The script (committed in WU0.2) is updated in WU0.7's PR together with the generated outputs.

## Verdict

**PASS** — config + workflows verified end-to-end (npm ci 0.9.4, 8-version build, subpath sitemap, version HTTP routing); R10 closed with a plan refinement recorded for WU0.7.
