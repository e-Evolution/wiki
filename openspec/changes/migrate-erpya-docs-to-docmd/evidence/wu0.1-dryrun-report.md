# WU0.1 Dry-Run Report — Import & Frontmatter-Strip Tooling

- Date: 2026-09-02
- Executor: orchestrator (inline completion after `sdd-apply` subagent timeout at 1200s/18 turns; subagent had written both scripts, one with a body-index bug — see Bug fix below)
- Source (read-only): `/tmp/erpcya-docs` (shallow clone of erpcya/docs)
- Target (scratch, never the repo): `/tmp/docmd-wu01-dryrun`
- Ledger: attempt 2 of objective "WU0.1 import tooling" (ledger reset approved by maintainer `e-Evolution`, token `sha256:e7a09dc4…`)

## Commands

```
rm -rf /tmp/docmd-wu01-dryrun
bash scripts/migrate/import-tree.sh /tmp/erpcya-docs /tmp/docmd-wu01-dryrun        # run 1
(cd target && find . -type f -print0 | sort -z | xargs -0 shasum -a 256) > snap1   # snapshot
bash scripts/migrate/import-tree.sh /tmp/erpcya-docs /tmp/docmd-wu01-dryrun        # run 2 (idempotence)
(cd target && find . -type f -print0 | sort -z | xargs -0 shasum -a 256) > snap2   # snapshot
diff snap1 snap2                                                                    # IDENTICAL
node scripts/migrate/strip-frontmatter.mjs /tmp/docmd-wu01-dryrun/docs report.md
```

## Import results

| Check | Result |
|---|---|
| README.md → index.md renames | 198 |
| md files | 1,284 (expected 1,284) ✓ |
| asset files under `assets/` | 5,287 = img 5,249 + files 19 + icon 15 + site 4 |
| Site files (`assets/site/`) | 4 (background.jpg, favicon.ico, logo.png, logo.svg) |
| Source mutation guard | pre/post sha256 manifest **identical**, 6,688 files ✓ |
| Import duration (run 1, incl. hashing) | 2m28s |

## Idempotence

Second import over an already-imported tree: **byte-identical** (sha256 over all 6,661 files).

## Full target census

6,661 files = 1,284 `.md` + **90 co-located non-md** (inside `docs/`) + 5,287 `assets/`.

## Frontmatter strip results

| Metric | Value |
|---|---|
| md processed | 1,284 |
| with frontmatter | 1,282 |
| files with `sticky` removed | 1,279 (matches source census) ✓ |
| files with `icon` removed | 1,064 (matches source census) ✓ |
| files retaining `title` | 1,282 (matches source census) ✓ |
| files modified | 1,282 (all frontmatter files carried sticky and/or icon; overlap 1,061) |
| assertion failures (body sha256/line-count) | **0** ✓ |
| `sticky:`/`icon:` keys remaining post-strip | 0 / 0 ✓ |

## Bug fix during completion (subagent script)

`strip-frontmatter.mjs` computed `bodyAfter` with `slice(ext.bodyStart + 1)` on the **new** (pruned) line array, but the body starts at `pruned.length + 2` there — the truncation made the integrity assertion fail for every modified file, so the script silently wrote nothing (fixture-confirmed: `files_modified: 0, assertion_failures: 1`). Patched to `pruned.length + 2`; fixture re-run: sticky/icon removed, title/author intact, body byte-identical, 0 failures. Report labels also corrected to `files_with_sticky_removed` / `files_with_icon_removed` (they count files, not keys).

## New finding — R13: co-located non-md files (90)

Files sitting inside the content tree (not in `public/`), copied 1:1 by the import (no content loss):

| Class | Count | Detail | Disposition |
|---|---|---|---|
| Relative-only references | 14 | 12 `docs/material-management/*.png` (e.g. `![…](linea-orden-ose-3452.png)`) + `docs/lve/procedures/payroll/payroll-report/N01050000000000000001012021.txt` + `docs/lve/procedures/import/LEY_ORGANICA_DE_ADUANAS.pdf` | **WU0.8 smoke-test gate**: verify docmd serves non-md files inside `docs/`. If not: move to `assets/img/…` (path-mirrored) + rewrite the 14 refs to `/assets/img/…` (≤14 lines). |
| Referenced via absolute path; co-located copy is a duplicate | 3 | `docs/lve/document-utility/resources/{check,group-of-business-partners,product-category}.png` — pages reference `/assets/img/docs/lve/document-utility/resources/…` (served twin exists) | Keep for parity; no action. |
| Unreferenced co-located duplicates | 72 | `docs/lve/document-utility/resources/*.jpg|jpeg|png` — every one has a served twin under `assets/img/…` | Keep for parity; optional owner cleanup. |
| Dead orphan | 1 | `docs/material-management/menu-picking-list.png` — no reference, no twin | Keep for parity; optional owner cleanup. |

**Pre-existing source defect noted** (out of WU0.1 scope): `docs/lve/document-utility/group-of-business-partners.md:153` uses a backslash in the URL (`/assets/img/docs/lve/document-utility/resources/\group-of-business-partners.png`) — likely already broken on the live VuePress site; follow-up fix is a separate small task.

## Census correction vs planning numbers

Planning assumed 5,253 assets; refined census: **5,287** under `assets/` (5,249 img + 19 files + 15 icon + 4 site) plus **90 co-located non-md** inside `docs/`. WU0.5/WU0.6 commit evidence must use these exact numbers.

## Verdict

**PASS** — import and strip tooling are production-ready for the WU0.5/WU0.6 content commits. R13 is recorded as a WU0.8 gate with a bounded fallback (≤14 line rewrites).
