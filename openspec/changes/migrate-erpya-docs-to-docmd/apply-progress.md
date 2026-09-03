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

## Pending work units (DAG order)

| WU | Title | Blocked by |
|---|---|---|
| WU0.2 | Generator tooling (navigation.json, per-version trees, redirect map) | WU0.1 |
| WU0.3 | CI tooling (build, validate, image-ref, benchmark scripts) | WU0.1 |
| WU0.4 | docmd.config.json + docmd.config.current.json + workflows | WU0.1, WU0.2, WU0.3 |
| WU0.5 | BULK content commit (1,284 md, 1,374 files total) | WU0.1 |
| WU0.6 | BULK assets commit (5,287 files, ~380 MB; LFS decision point) | WU0.1 |
| WU0.7 | Generated navigation + per-version trees + redirect map | WU0.2, WU0.5 |
| WU0.8 | Smoke: config load + first build + R13 co-located-file check | WU0.4, WU0.5, WU0.6, WU0.7 |
| WU1.1–WU1.5 | Phase 1 pilot (measurements, pilot slice, OQ1/OQ2 experiments, AI verification) | WU0.8 |
| WU2.1–WU2.7 | Phase 2 rollout (business-partner.md gate FIRST, module slices, final census) | WU1.5 |
| WU3.1–WU3.4 | Phase 3 cutover (CNAME + url, 20-URL crawl, prod AI verify, decommission) | WU2.7 |
