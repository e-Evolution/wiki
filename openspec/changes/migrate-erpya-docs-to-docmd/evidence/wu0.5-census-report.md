# WU0.5 BULK Content Commit — Census Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU0.5 BULK content import", token `sha256:82497982…`, budget 120,000 lines
- Source (read-only): `/tmp/erpcya-docs`

## Pipeline run (in-repo)

1. `bash scripts/migrate/import-tree.sh /tmp/erpcya-docs .` — 198 README→index renames; census OK (md=1,284, assets=5,283, site=4); **source pre/post sha256 manifest identical (6,688 files)**; 3m32s
2. `node scripts/migrate/strip-frontmatter.mjs docs` — 1,284 processed, 1,282 with frontmatter, **1,279 sticky removed, 1,064 icon removed, 1,282 title retained, 0 assertion failures** (body sha256 + line-count per file)
3. WU0.3 content fixes (deterministic, scriptable, provenance `evidence/wu0.3-ci-report.md`):
   - 60 `](…README.md)` links rewritten → directory-index form (0 remaining; verified in scratch before commit)
   - backslash → slash in `docs/docs/lve/document-utility/group-of-business-partners.md` (1 char; target exists in mirror)
   - `scripts/ci/broken-links-baseline.json` committed (13 pre-existing source defects)

## Census (spec acceptance numbers — all exact)

| Metric | Spec | Actual |
|---|---|---|
| md in `docs/` | 1,284 | **1,284** ✓ |
| home / about / product / docs / community / downloads | 1 / 87 / 5 / 344 / 3 / 844 | **1 / 87 / 5 / 344 / 3 / 844** ✓ |
| body-byte-unchanged | 0 failures | **0 assertion failures** ✓ (strip report) |
| sticky/icon remaining | 0 / 0 | **0 / 0** ✓ (strip report) |
| title retained | 1,282 | **1,282** ✓ |
| source repo untouched | manifest identical | **identical, 6,688 files** ✓ |
| total `docs/` files | — | 1,374 (1,284 md + 90 co-located non-md, R13) |
| `docs/` lines | — | 114,123 |

## Gates (run in-repo after the commit-ready state)

| Gate | Result |
|---|---|
| `node scripts/ci/check-images.mjs docs assets` | **PASS** — 5,672 refs, 0 missing; business-partner.md sample = 309 refs |
| `node scripts/ci/ci-validate.mjs .` | **PASS** — mirror-strict asset refs 4,907, real broken 13, baseline 13, **new 0** |

## Review surface for this PR (bulk data — census-reviewed, NOT line-by-line)

- `docs/` — 1,374 files (imported byte-identical from source + strip delta + the 61 documented content fixes above; nothing else was touched)
- `scripts/ci/broken-links-baseline.json` — 13-entry reviewed allowlist (pre-existing source defects, parity-preserved; provenance in the WU0.3 report)
- The 61 content fixes are the ONLY body mutations beyond strip; all are enumerated here and were verified in scratch (gate red → green) before being applied to the repo tree.

## Verdict

**PASS** — census matches spec exactly; both CI gates green in-repo; source untouched; the 13 pre-existing defects are baseline-managed (not introduced by the migration).
