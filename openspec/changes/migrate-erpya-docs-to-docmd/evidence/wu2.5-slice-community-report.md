# WU2.5 Slice: community (3 md) — Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Base per DAG: `wu2.2/slice-home-about` (community verified independently of
  the docs-core/product slice fixes).

## Slice census and verification

- Slice: `community/` = **3 md files** → **3 page URLs**:
  `/community/`, `/community/code-of-conduct/`, `/community/duties-and-rigths/`
  (note: the source's `rigths` typo is parity-preserved, not corrected).
- Build on this branch: exit 0, 2,051 pages.
- **3/3 serve 200**; no missing from build output; no exceptions surfaced.

## Per-slice gate (as docs.yml runs it)

- `ci-validate` → **PASS** (mirror-strict 4,921, real broken 13 = baseline 13,
  **new 0**) — log archived as the 13 real findings + PASS summary (extract
  documented in-file)
- `check-images` → **PASS** (0 missing targets)

## Verdict

**PASS** — 3/3 community URLs resolve; 0 gate-surfaced exceptions.
