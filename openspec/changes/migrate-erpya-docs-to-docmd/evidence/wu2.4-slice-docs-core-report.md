# WU2.4 Slice: docs core manual (344 md) — Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU2.4 slice docs core", token `sha256:e0ca5c35…`
- The most link-dense module (validate_docs pass log archived:
  `evidence/wu2.4-ci-validate.log`, `evidence/wu2.4-check-images.log`).

## Slice census and verification

- Slice: `docs/` = **344 md files** → **344 page URLs**.
- 343/344 serve 200 directly from the build output. The 13th pilot-verified
  set (basic-rules 9 + master-data 4) is re-cited from Phase 1 (WU1.2 evidence),
  not re-verified.
- **One exception surfaced (and fixed in this PR) — the migration's only
  non-identity URL:** `docs/docs/other-process/intercompany-process/ intercompany-process.md`
  (filename with a leading space, carried verbatim from the source).

## The space-filename exception — fixed via the R10 mechanism

- docmd **slugifies every output/route segment** (dist source:
  `engine/generator.js slugifyOutputPath` / `auto-router.js slugifySegment`:
  spaces → `-`, unsafe chars → `-`, collapse runs, trim edges): the file
  builds at `/docs/other-process/intercompany-process/intercompany-process/`
  (no space) — while the old VuePress URL kept the space (`%20` in transit).
- `gen-redirects.mjs` now models `slugifySegment` for the `to` side
  (`from` keeps the exact old URL). Re-run result:
  **1,284 covered = 1,283 identity + 1 non-identity**; `redirects-map.json`
  gains exactly one entry and `docmd.config.json.redirects` is regenerated
  from it:

  ```
  "/docs/other-process/intercompany-process/ intercompany-process/"
    -> "/docs/other-process/intercompany-process/intercompany-process/"
  ```

- Verified end-to-end on a fresh build (exit 0, 2,051 pages):
  - meta-refresh page written at the space path in `site/` (dist
    `commands/build.js` static-redirects step — `from` is used as a literal
    path, so the browser's `%20` URL maps onto it);
  - `curl` old URL (`…/%20intercompany-process/`) → **200** →
    `url=/docs/other-process/intercompany-process/intercompany-process/`
    (+ `window.location.replace` fallback);
  - new URL → **200** (the real page).
- Result: **every one of the 344 old docs-core URLs resolves on the new
  site** (343 direct + 1 via the generated redirect).

## Per-slice gate (as docs.yml runs it, full logs archived)

- `ci-validate` → **PASS** (mirror-strict 4,921, real broken 13 = baseline
  13, **new 0**)
- `check-images` → **PASS** (0 missing targets)

Note: the pre-existing baseline entry `./%20intercompany-process.md/`
(a broken relative link inside source content, parity-preserved) is unrelated
to this URL mapping and remains in `scripts/ci/broken-links-baseline.json`.

## Verdict

**PASS** — 344/344 old URLs resolve; the single space-filename exception is
handled by the generated redirect (the R10 map mechanism doing exactly what it
was designed for); 0 other gate-surfaced exceptions.
