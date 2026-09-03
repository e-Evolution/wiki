# WU2.1 R4 Gate — business-partner.md (309-image page) — Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU2.1 r4 gate business-partner", token `sha256:e4d97255…`
- First rollout unit (R4): measure, then pass/split decision.

## Measurements (fresh build on the rollout branch)

- Build: **exit 0, 2,051 pages in 8.4 s** — the build log is byte-comparable to
  the Phase 0/WU1.3 baseline (same 2,051 pages, same single normaliser warning,
  0 errors): **zero build-log delta** from adding no new content (the page is
  the Phase 0 imported one; this unit measures, it adds nothing).
- Rendered page `site/docs/master-data/business-partner/index.html`:
  **407,191 bytes** of HTML.
- `<img>` census: **310 tags** = **309 content PNGs** (all rewritten to
  relative `/assets/img/docs/master-data/…` paths) + 1 external author avatar
  (Gravatar, `https://www.gravatar.com/…` — external, skipped by design).
- **All 309 local refs resolve** inside the build output (0 missing).
- Served page: **200**; 5 sampled images across the page (first/¼/½/¾/last):
  all **200** from the built tree.
- Page media weight: 309 PNGs = **19.99 MB** (avg ≈65 KB per image);
  no lazy-load in docmd (C3), so the full weight loads with the page —
  exactly as the legacy VuePress page did with the same 309 images
  (parity, not a regression).

## R4 decision: **PASS**

- The page builds clean, renders, and every one of the 309 refs resolves and
  serves. There is no defect to fix.
- **Why not split:** splitting into section sub-pages is a **content-level
  change, owner-reviewed** (design R4 fallback) and a scope change — it would
  alter migrated content for performance preference, diverging from the
  old site the migration replaces. The old page had the same 309 images;
  parity is preserved. A split (or lazy-loading, if docmd ever ships it) is
  recorded here as a **post-cutover editorial optimization candidate**, not a
  migration gate.

**Gate closed: PASS → continue rollout (WU2.2+).** No content or config
changes in this unit (0 source lines).
