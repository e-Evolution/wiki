# WU0.8 vue-demo Adaptation + First Clean Build + Gates — Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU0.8 vue-demo and first clean build", token `sha256:8161a9b8…`
- This is the **Phase 0 completion gate**.

## 1. vue-demo adaptation (D7)

The 3 `::: vue-demo` containers in `docs/product/source-code.md` were **not** live Vue
REPLs — live-site DOM inspection (docs.erpya.com/product/source-code/) shows each one
rendered as a titled box around a shell-command listing. Adaptation applied:

- Each container → `#### <original title>` heading + the existing fenced code listing (code untouched).
- One parity blockquote before the first section: note that the source site used interactive
  `vue-demo` containers, kept here as static code listings, + the captured live-site screenshot
  at `assets/img/docs/vue-demo/screenshot.png` (new file — the single documented addition to the
  otherwise 1:1 mirror; D7-authorized).
- No `::: vue-demo` container remains in the tree; the 2 `::: tip` containers are preserved.

## 2. First in-repo build

- `npm ci` → `@docmd/core` 0.9.4 (exact pin from lockfile).
- `npx @docmd/core build` → **exit 0, 2,051 pages in 11.6 s, 0 errors**.
- Only warning (the known WU0.3 normaliser one, pre-existing source quirks):
  `[normaliser] WARN 3 issues (0 errors, 3 warnings) across 2 files` (physical-inventory.md stray
  `:::`, point.md stray `:::` + auto-closed `<info>`).
- Build also generated: search index, sitemap, robots.txt, llms.txt/json, OKF (2,051 concepts), AI plugin.

## 3. Gates (in-repo, on the final tree)

- `ci-validate.mjs` → **PASS** (mirror-strict asset refs: 4,908 [4,907 + the new screenshot ref,
  correctly classified since the file exists in assets/], real broken: 13, baseline: 13, **new: 0**).
- `check-images.mjs docs assets` → **PASS** (5,673 refs = 4,896 /assets/ + 12 relative + 765
  external; **0 missing**; acceptance sample business-partner.md = 309 refs).

## 4. R10 + R12 from the build log

- **R10 verified**: `docmd.config.json` carries `redirects: {}` (regenerated from the WU0.7
  zero-entry map); the 0.9.4 build parses the property and exits 0 — the map form is the valid
  config surface (dist-source finding WU0.4), and identity URLs mean nothing must be emitted.
- **R12 verified**: 2,051 `index.html` files generated, one per page, including the 7 version
  landings (`site/rs4x/index.html` etc.) and all 198 renamed index pages.

## 5. Staging + URL smoke (static serve of `site/`)

- 200: `/`, `/about/`, `/product/source-code/`, `/rs4x/` (version landing),
  `/docs/master-data/business-partner/` (the 309-ref page).
- No-slash `/docs/master-data/business-partner` → **301** → canonical (VuePress parity preserved).

## 6. R13 DEFECT FOUND by the smoke test (opens WU0.8a)

The co-located non-md curl check FAILED, and the WU0.3 "docmd resolves co-located files"
conclusion is corrected:

- `site/docs/material-management/` contains only generated HTML — **co-located PNGs are NOT
  copied to the build output**.
- Built HTML keeps the relative refs (`src="linea-orden-ose-3452.png"`) → **404 on the
  deployed site** (verified via static serve: 3/3 co-located PNGs 404).
- Root cause: `validate_docs` resolves refs against the SOURCE tree (which is why WU0.3 saw
  no flags); the build does not copy non-md files out of the docs source dir.
- Planned mitigation (design R13 fallback) is triggered: move the 90 co-located non-md files
  into the assets mirror (path-preserving under `assets/`) and rewrite the ~14 relative refs
  to canonical `/assets/…` absolute paths. New work unit **WU0.8a**, stacked PR.

## Verdict

**PASS (with one accepted exception)** — all WU0.8 acceptance bullets green; the R13 exception
is a caught pre-existing source defect, correctly deferred to the dedicated WU0.8a fix with its
own ledger objective, per stacked-PR discipline.
