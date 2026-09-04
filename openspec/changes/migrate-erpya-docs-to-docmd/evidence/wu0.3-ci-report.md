# WU0.3 CI-Tooling Dry-Run Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Scratch target: `/tmp/docmd-wu01-dryrun` (imported + stripped + WU0.2-generated outputs)
- Ledger: objective "WU0.3 CI tooling", token `sha256:0ebd6cb2…`
- Note: the scratch tree was also put into the simulated WU0.5 state (README-link rewrite + backslash fix + baseline) to prove the end-to-end green path.

## Scripts delivered

### ci-validate.mjs
- Primary mode: spawns `npx -y @docmd/core@0.9.4 mcp` (pinned, R5) with the project root as cwd; newline-delimited JSON-RPC 2.0 (MCP stdio): `initialize` → `notifications/initialized` → `tools/call validate_docs`.
- **The MCP handshake works on 0.9.4** — primary mode is real, not theoretical. R9 degraded mode (build + link-warning scan, still blocking) implemented as fallback; not needed.
- Classification: an `/assets/` target that exists under `<root>/assets/` = validator-strict (info, non-blocking); everything else = real broken; real-broken targets in the committed `scripts/ci/broken-links-baseline.json` (pre-existing source defects, parity-preserved) are subtracted; **exit 1 only on NEW broken links**.
- Exit contract: 0 = clean; 1 = new broken links / build failed (degraded); 2 = usage/environment.

### check-images.mjs
- Scans md image refs (`![]()` + `<img src>`) with code-fence skipping; resolves `/assets/…` against the root mirror and relative refs against the file dir (R13); external/`//`/`data:` skipped; other-absolute reported not failing.
- **Exit contract: 0 = all resolvable; 1 = missing ref; 2 = usage.** Acceptance sample: `business-partner.md` = 309 refs (exact).

## Dry-run results (final state: both gates green)

| Gate | Result |
|---|---|
| check-images | **PASS** — 5,672 refs (4,895 `/assets/`, 12 relative, 765 external), 0 missing |
| ci-validate | **PASS** — mirror-strict 4,907, real broken 13, baseline 13, **new 0** |

## Findings that change the plan (all evidenced, all cheap)

1. **docmd canonical URLs keep the trailing slash** (verified with a built site + HTTP: `/docs/master-data/business-partner` → 301 → `/docs/master-data/business-partner/` → 200; index pages identical). docmd behaves like VuePress 2 here, so **new URL = old URL exactly**: the D5 redirect map is an **identity map**. → WU0.7 note: `gen-redirects.mjs` should emit `to` in canonical (trailing-slash) form; the map stays as the cutover checklist.
2. **OQ2 closed early: build time is not a risk.** First full build: **1,284 pages in 7.4 s** (8.2 s wall incl. npx), search index + sitemap + llms + OKF (1,284 concepts) + AI plugin all generated, exit 0. The R2 mitigation ladder (caching → slim import → self-hosted runner) is effectively unnecessary.
3. **validate_docs asset semantics (0.9.4):** it resolves `/assets/…` against the docs source dir, not the root `assets/` mirror — flagging 4,907 refs that the build serves correctly (site/assets/ mirrors 1:1, built HTML rewrites src to relative paths, sampled flagged assets return **HTTP 200**). Gate handles this by existence-based classification; no content change needed.
4. **Broken-link census (48 unique pre-fix targets):**
   - **43 README.md targets — caused by our README→index rename** (60 links across ~40 files). Verified fix (applied in scratch): rewrite `](BASE/README.md)` → `](BASE/)`, bare `](README.md)` → `](./)` — after the rewrite, **zero** README targets remain broken. This rewrite joins the WU0.5 content-fix list.
   - **13 pre-existing source defects** (verified present in the source tree, broken on the live site too): 4 file links to `.ppt`/`.txt` that live under `public/assets/img/…` but are linked by bare relative name (`PANTALLAS_SERVICIO_NOMINA_PLUS.ppt`, `Banco_Nacional_de_Crdito_C.A_1000040.txt`, `Banplus_Estado_de_cuenta.txt`, `broken` literal ×2), 1 backslash-in-URL (already fixed in scratch; joins WU0.5 fixes), 6 link-syntax defects (`(http://erpya.com`, `./%20intercompany-process.md/`, `erpya-3.9.4-001-3.8.5.md`, `store`, `teacher-report`, `ttps://github.com/…`). → These 13 form the committed baseline; repair stays editorial/out-of-scope (parity).
   - **0 genuinely-missing `/assets/` images** — the 4,895-refs mirror is complete.
5. **R13 resolved early (runtime side):** docmd resolves co-located non-md files (the 12 material-management images, the payroll `.txt`, the import `.pdf` were NOT flagged) — the WU0.8 "move to assets + rewrite" fallback is not needed. WU0.8 still curls one co-located image + one PDF for the record.
6. **Normaliser (3 warnings, 2 files, 0 errors, auto-handled):** `physical-inventory.md:70` and `point.md:823` stray `:::` (self-closing containers), `point.md:892` unclosed `<info>` auto-closed — all pre-existing source quirks; docmd normalizes them.
7. **Config property note (for WU0.4):** `description` is not a top-level docmd config property (build warning "Unknown property … ignored"); WU0.4 must use the accepted property name (verify against 0.9.4 config schema at assembly time).

## WU0.5 content-fix list (deterministic, scriptable)

1. Rewrite 60 `](…README.md)` links → directory-index form (verified above).
2. Backslash → slash in `group-of-business-partners.md` (1 char; target exists in mirror).
3. Commit the 13-entry `broken-links-baseline.json` with this report as provenance.

## Verdict

**PASS** — both CI gates run, detect, classify, and go green with the documented WU0.5 state; exit contracts demonstrated (1 on 48 pre-fix targets, 0 post-fix).
