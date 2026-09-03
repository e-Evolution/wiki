# WU0.6 BULK Assets Commit — Census Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU0.6 BULK assets import", token `sha256:0d4e97da…`
- Source (read-only): `/tmp/erpcya-docs/src/.vuepress/public/`

## What landed

`assets/` — 5,287 files, 371 MB (BULK DATA — census-reviewed, not line-by-line):

| Top-level | Files | Origin |
|---|---|---|
| `assets/img/` | 5,249 | source `public/assets/img/` (all doc screenshots) |
| `assets/files/` | 19 | source `public/assets/files/` (download-link files) |
| `assets/icon/` | 15 | source `public/assets/icon/` |
| `assets/site/` | 4 | source public-root files: background.jpg, favicon.ico, logo.png, logo.svg (OQ6) |

(Note: the WU0.6 task line said "5,249 + 4" — the refined census from WU0.1 includes `files/` 19 + `icon/` 15; total 5,287.)

## Evidence

- **Byte-identity sample: 200/200 random files sha256-identical to the source clone** (seed 20260903; full mapping incl. `assets/site/` ← public-root). The full-tree guarantee already holds from WU0.1: the import's source-mutation manifest (6,688 files identical pre/post) + idempotence check covered these same bytes.
- **Zero markdown image references edited** — single root-relative `/assets/img/...` pattern, unchanged by import/strip (WU0.5 strip report: 0 body assertion failures) and verified by the WU0.5 gate `check-images` (5,672 refs, 0 missing).
- R11 (371 MB repo weight): committed plain per design (LFS/CDN is a post-cutover consideration, not a Phase 0 gate).

## .gitignore fix included (root-cause of a caught defect)

`site/` (added in WU0.4) matched **any** level, silently ignoring `assets/site/` (4 files would never have been committed — the ledger's untracked inventory surfaced the gap). Fixed to root-anchored `/site/`; verified `assets/site/background.jpg` no longer ignored.

## Verdict

**PASS** — 5,287/5,287 files present, sampled bytes identical to source, zero ref edits, ignore-rule defect fixed and evidenced.
