# WU2.2 Slice: home + about (Nosotros) — Report

- Date: 2026-09-03
- Executor: orchestrator (inline)
- Ledger: objective "WU2.2 slice home about", token `sha256:4ef07637…`
- Rollout slice verification (content is in-tree from Phase 0; no re-import).

## Slice census and verification

- Slice: site root index (home) + `about/` = **87 md files** → **88 page URLs**
  (root index + 87 about pages).
- **All 88 present in the build output** (0 missing) and **all serve 200**
  (concurrent serve of the built `site/` tree).
- No slice-specific frontmatter/container/link/image exceptions: the
  site-wide gates are green on this commit (below), and the slice's pages
  contributed no new broken links or missing images.

## Per-slice gate (as docs.yml runs it)

- `node scripts/ci/ci-validate.mjs .` → **PASS** (mirror-strict asset refs
  4,921, real broken 13 = baseline 13, **new 0**)
- `node scripts/ci/check-images.mjs docs assets` → **PASS** (0 missing targets)

## News posts: static pages, no blog behavior (acceptance check)

The 2 static news posts under `about/news/`:

| page | blog markers | rendered content |
|---|---|---|
| `about/news/2023-01-01-adempiere-394/` | 0 | 5 h2, 3 imgs, 13,810 text chars |
| `about/news/security-improvements-in-adempiere-cloud/` | 0 | 2 h2, 2 imgs, 7,551 text chars |

Checked markers: pagination, related-posts, RSS, comment-form, blog-post —
**none present**. Both render as ordinary docmd content pages (the dates are
part of the markdown content, not blog chrome). The `about/news/` index is a
plain listing page, not a blog index.

## Verdict

**PASS** — slice verified; zero gate-surfaced exceptions; no fixes needed
(0 source lines changed).
