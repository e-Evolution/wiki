# WU2.6 Slice: downloads BULK (844 md) + version trees — Report

- Date: 2026-09-04
- Executor: orchestrator (inline)
- Base per DAG: `wu2.4/slice-docs-core`.

## Slice census and verification

- Slice: `downloads/` = **844 md files** → **844 page URLs** (the largest
  module; R6: editorially stale download notes — verification only, no
  content changes; the editorial disposition is an owner call).
- Build on this branch (includes the WU2.4 space-redirect fix): exit 0,
  2,051 pages.
- **844/844 serve 200**; no missing from build output; 0 exceptions.

## Version trees reachability

- **7/7 non-current version roots serve 200**: `/rs-4.x/`, `/rs-3.x/`,
  `/rs-2.x/`, `/rs-1.x/`, `/ad-3.9.4/`, `/tes/`, `/devices/`.
- **7/7 per-version sample pages serve 200** (first internal link of each
  tree's landing index).
- `/rs-5.x/` → 404 **by parity**: `rs-5.x` is the CURRENT version, which
  lives at `/` (root) in both the old VuePress site (versions.current) and
  this docmd site; `/rs-5.x/` was never an old URL (absent from the 1,284
  coverage manifest) and docmd does not emit a duplicate root page for it.

## Per-slice gate (as docs.yml runs it)

- `ci-validate` → **PASS** (mirror-strict 4,921, real broken 13 = baseline
  13, **new 0**) — log archived as the real findings + PASS summary
  (extract documented in-file)
- `check-images` → **PASS** (0 missing targets)

## Verdict

**PASS** — 844/844 downloads URLs + all 7 version trees reachable; 0
gate-surfaced exceptions.
