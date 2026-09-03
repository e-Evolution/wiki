# WU0.8a R13 Fix — Co-located Files to Mirror + Ref Rewrite — Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU0.8a r13 collocated fix", token `sha256:8b0bc5c7…`
- Triggered by: the WU0.8 smoke test (co-located non-md files 404 on the built site).

## Defect (recap)

docmd does **not** copy non-md files out of the docs source dir into the build output.
Pages referenced 12 material-management PNGs + 1 Aduanas PDF with relative paths; the
built HTML kept those relative `src=` values → 404 on any deployed site. (WU0.3's
"docmd resolves co-located files" is corrected: that was `validate_docs` resolving
against the source tree, not build behavior.)

## Fix (deterministic, mechanical)

Rule: file at `<src-root>/<M>` (M = module-relative path) → `assets/<M>`; its
references → canonical `/assets/<M>` (site-wide convention, D1).

- **90 co-located non-md files** `git mv`'d from `docs/<M>` → `assets/<M>` (path
  preserving). `docs/navigation.json` excluded (site config, not content).
- **13 references rewritten** to canonical `/assets/…` (12 PNGs in
  docs/material-management/advanced-warehouse-management.md + 1 PDF in
  docs/docs/lve/procedures/import/index.md). Full audit list is in the PR diff;
  the transformation is a one-line pattern per ref.
- 77 of the 90 files were never referenced (75 LVE resource twins + dead orphans);
  they move too, keeping the new tree complete and the mirror accounting exact.

Mid-fix incident (documented for the record): a cleanup `rmtree` in the relocation
script deleted the freshly-moved destination tree (directory list computed after the
move). Recovered losslessly with `git restore --worktree -- assets/docs/` (files were
intact in the index as staged renames); final layout verified by clean rebuild + curl.

## Post-fix state

- `docs/` tree: **1,284 md + navigation.json only** (0 co-located content files).
- `assets/`: **5,378 files** = 5,287 source mirror + 90 co-located + 1 vue-demo screenshot.
- `check-images docs assets`: **PASS** — 4,908 /assets/ refs, **0 relative refs**, 0 missing.
- `ci-validate`: **PASS** (mirror-strict 4,921, real broken 13 = baseline 13, **new 0**).
- Clean rebuild (`rm -rf site`): **exit 0, 2,051 pages in 6.9 s, 0 errors**.
- Curl matrix (fresh build output): 200 on both fixed PNGs, the PDF at its canonical
  single-`docs` URL (the accidental double-`docs` stale path 404s — expected), the
  lve import page, the advanced-warehouse page, product/source-code, version landings, `/`.

## Verdict

**PASS** — R13 closed; the deployed site will serve every previously co-located asset
at a canonical /assets/ URL with zero relative refs in the tree.
