# Apply Progress — migrate-erpya-docs-to-docmd

Artifact store: openspec (repo-local). Delivery: stacked-to-main, remote e-Evolution/wiki.

## WU0.1 import tooling — DRY-RUN COMPLETE

- Scripts delivered: `scripts/migrate/import-tree.sh`, `scripts/migrate/strip-frontmatter.mjs`
  - Subagent `sdd-apply` wrote both (timed out at 1200s/18 turns before evidence); orchestrator completed inline.
  - `strip-frontmatter.mjs` body-index bug found by orchestrator review, patched, fixture-verified.
- Dry-run: **all green** — 1,284 md + 5,287 assets imported, source manifest untouched (6,688 files), idempotence byte-identical, strip 1,279 sticky / 1,064 icon / 1,282 title / 0 assertion failures. Full report: `evidence/wu0.1-dryrun-report.md`.
- New finding **R13**: 90 co-located non-md files in `docs/` (14 relative-only refs, 75 duplicates, 1 dead orphan) → WU0.8 smoke-test gate, bounded fallback ≤14 ref rewrites.
- Ledger: attempt 2 of 2 (post maintainer-approved reset), token `sha256:e7a09dc4…`.
- Status: commit + PR pending (this work unit's PR #1 of the stacked chain).

## WU0.2 generator tooling — DRY-RUN COMPLETE

- Scripts delivered: `scripts/migrate/gen-navigation.mjs`, `gen-version-trees.mjs`, `gen-redirects.mjs` (outputs land in WU0.7).
- Dry-run: **all green** — nav 84 items / 69 path-bearing / resolver 69/69 (0 broken); 7 version trees built and resolved (D2 block emitted verbatim); redirect map exactly 1,284 entries with correct per-module counts. Full report: `evidence/wu0.2-generator-report.md`.
- 3 generator bugs caught by the dry-run post-conditions and fixed pre-commit (string-leaf drop, /index slice width, heading-group resolver).
- Ledger: objective "WU0.2 generator tooling", token `sha256:96ed4259…`.

## WU0.3 CI tooling — DRY-RUN COMPLETE (both gates green)

- Scripts delivered: `scripts/ci/ci-validate.mjs` (MCP stdio → validate_docs; existence-based asset classification; committed baseline for pre-existing defects; R9 degraded build-scan mode), `scripts/ci/check-images.mjs` (5,672 refs, 0 missing; business-partner.md 309-ref sample).
- Key findings (full report: `evidence/wu0.3-ci-report.md`):
  1. **docmd canonical URLs keep trailing slash = identical to VuePress** → D5 redirect map is an IDENTITY map (WU0.7: emit canonical `to`).
  2. **OQ2 closed: full build = 1,284 pages in 7.4 s** → R2 mitigation unnecessary.
  3. validate_docs resolves /assets/ against docs source dir (4,907 mirror-strict flags; build + HTTP 200 prove runtime correct).
  4. Broken-link census: 43 README targets (rename-caused → 60-link rewrite verified in WU0.5) + 13 pre-existing (baseline) + 0 missing /assets/ images.
  5. R13 resolved early: docmd resolves co-located non-md (no move/rewrite needed).
  6. Config note: `description` is not a docmd top-level property (WU0.4 schema check).
- Ledger: objective "WU0.3 CI tooling", token `sha256:0ebd6cb2…`.

## WU0.5 content-fix list (from WU0.3 evidence)

1. Rewrite 60 `](…README.md)` links → directory-index form (verified).
2. Backslash → slash fix in `group-of-business-partners.md` (1 char).
3. Commit 13-entry `broken-links-baseline.json` (provenance: wu0.3-ci-report.md).

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
| WU0.4 | docmd.config.json + docmd.config.current.json + workflows | WU0.1, WU0.2, WU0.3 |
| WU0.5 | BULK content commit (1,284 md, 1,374 files total) | WU0.1 |
| WU0.6 | BULK assets commit (5,287 files, ~380 MB; LFS decision point) | WU0.1 |
| WU0.7 | Generated navigation + per-version trees + redirect map | WU0.2, WU0.5 |
| WU0.8 | Smoke: config load + first build + R13 co-located-file check | WU0.4, WU0.5, WU0.6, WU0.7 |
| WU1.1–WU1.5 | Phase 1 pilot (measurements, pilot slice, OQ1/OQ2 experiments, AI verification) | WU0.8 |
| WU2.1–WU2.7 | Phase 2 rollout (business-partner.md gate FIRST, module slices, final census) | WU1.5 |
| WU3.1–WU3.4 | Phase 3 cutover (CNAME + url, 20-URL crawl, prod AI verify, decommission) | WU2.7 |
