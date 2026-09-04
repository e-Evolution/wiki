# WU1.4 OQ2 Build-Time Benchmark — Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU1.4 oq2 build-time benchmark", token `sha256:be270010…`
- Measurement-only work unit (design D6 / R2). No source changes.

## Pilot commit

`c515b35` — WU1.3 (final Phase 1 config: dotted version ids adopted).

## Measurement

Full pipeline on the pilot commit, exact command sequence of
`build-benchmark.yml` (clone → `npm ci` → timed `npx @docmd/core build`):

| stage | measured |
|---|---|
| full cold clone of the repo (321 MB working tree) | **10.8 s** |
| `npm ci` (warm npm cache) | **1.2 s** (cold `@docmd/core` install ≈ 12 s, observed in WU0.8) |
| `npx @docmd/core build` → 2,051 pages, exit 0 | **8.4 s** (build reports 8.0 s) |
| **total** | **20.4 s (0.34 min)** |

## Dispatch constraint (documented deviation)

`gh workflow run build-benchmark.yml` cannot be issued right now: GitHub
resolves `workflow_dispatch` workflows on the **default branch**, and
`build-benchmark.yml` (committed in WU0.4) reaches `main` only when the
stacked PR chain (currently under review) merges. The measurement above runs
the workflow's exact steps instead. The workflow itself is already committed
and will run natively on demand after the merge; it is manual-only and never
gates PRs.

## Decision (recorded in measurements.md OQ2 slot)

**GO** — 20.4 s total is ~3 orders of magnitude under the 20-minute budget,
even after a pessimistic 5–10× Actions-runner factor on the clone and build
stages. No mitigation selected; the C7 ladder (Actions caching — already in
the workflow via `cache: npm` → slim first import → self-hosted/paid runner)
remains documented and untriggered.
