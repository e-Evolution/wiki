#!/usr/bin/env bash
# import-tree.sh — one-shot, idempotent import of erpcya/docs content.
#
# Usage: import-tree.sh [SOURCE_DIR] [TARGET_DIR]
#   SOURCE_DIR default /tmp/erpcya-docs (read-only shallow clone of
#               github.com/erpcya/docs; cloned fresh only if absent).
#   TARGET_DIR default . (this repo root).
#
# Copies the six content roots preserving source paths (design D1),
# renames every README.md to index.md, copies the public asset tree to
# assets/ and the 4 public-root files to assets/site/ (design D4, §2.2),
# then asserts the census: 1,284 md files, 5,283 asset files, 4 site
# files. Re-hashes the source manifest post-import and requires it to be
# identical (source repo untouched). Re-runs are no-ops.
set -euo pipefail

SOURCE_DIR="${1:-/tmp/erpcya-docs}"
TARGET_DIR="${2:-.}"

CLONED=0
if [ ! -d "$SOURCE_DIR/src" ]; then
  echo "Source dir '$SOURCE_DIR' absent; cloning erpcya/docs (read-only)..."
  SOURCE_DIR="$(mktemp -d /tmp/erpcya-docs.XXXXXX)"
  git clone --depth 1 https://github.com/erpcya/docs "$SOURCE_DIR"
  CLONED=1
  echo "Cloned into $SOURCE_DIR (scratch, read-only for this run)."
fi

hashfile() {
  if command -v shasum >/dev/null 2>&1; then shasum -a 256 "$1"
  else sha256sum "$1"; fi | awk '{print $1}'
}

# --- Pre-import source manifest (relative path + sha256) -------------------
MANIFEST="$(mktemp /tmp/import-tree-manifest.XXXXXX)"
trap 'rm -f "$MANIFEST"; [ -n "${MANIFEST2:-}" ] && rm -f "$MANIFEST2"' EXIT
manifest() {
  ( cd "$SOURCE_DIR" && \
    find . -type f ! -path './.git/*' | LC_ALL=C sort | \
    while IFS= read -r f; do printf '%s  %s\n' "$(hashfile "$f")" "$f"; done )
}
echo "Recording pre-import source manifest..."
manifest > "$MANIFEST"

# --- Tree copy: six content roots (D1: source paths preserved) -------------
SRC="$SOURCE_DIR/src"
DST="$TARGET_DIR/docs"
declare -a MODULES=(about product docs community downloads)
mkdir -p "$DST"
cp "$SRC/README.md" "$DST/index.md"   # home page
for m in "${MODULES[@]}"; do
  mkdir -p "$DST/$m"
  cp -R "$SRC/$m/." "$DST/$m/"
done

# Rename every README.md inside the content tree to index.md (each is a
# directory-index page in the VuePress source; file name only, content
# untouched). Root home was already copied as docs/index.md.
RENAMES=0
while IFS= read -r f; do
  mv "$f" "$(dirname "$f")/index.md"
  RENAMES=$((RENAMES + 1))
done < <(find "$DST" -name README.md -type f | LC_ALL=C sort)
echo "Renamed README.md -> index.md: $RENAMES"

# --- Assets (design §2.2, OQ6) ---------------------------------------------
PUBLIC_ASSETS="$SRC/.vuepress/public/assets"
SITE_SRC="$SRC/.vuepress/public"
ASSET_SOURCE_COUNT=$(find "$PUBLIC_ASSETS" -type f | wc -l | tr -d ' ')
mkdir -p "$TARGET_DIR/assets"
cp -R "$PUBLIC_ASSETS/." "$TARGET_DIR/assets/"
mkdir -p "$TARGET_DIR/assets/site"
for p in logo.svg logo.png favicon.ico background.jpg; do
  cp "$SITE_SRC/$p" "$TARGET_DIR/assets/site/"
done

# --- Post-import census assertions -----------------------------------------
fail() { echo "ASSERTION FAILED: $*" >&2; exit 1; }

MD_COUNT=$(find "$DST" -type f -name '*.md' | wc -l | tr -d ' ')
[ "$MD_COUNT" -eq 1284 ] || fail "expected 1284 md files under docs/, got $MD_COUNT"
ASSET_COUNT=$(find "$TARGET_DIR/assets" -type f ! -path "*/site/*" | wc -l | tr -d ' ')
[ "$ASSET_COUNT" -eq "$ASSET_SOURCE_COUNT" ] || fail "expected $ASSET_SOURCE_COUNT files under assets/ (excl. site/), got $ASSET_COUNT"
SITE_COUNT=$(find "$TARGET_DIR/assets/site" -type f | wc -l | tr -d ' ')
[ "$SITE_COUNT" -eq 4 ] || fail "expected 4 files under assets/site/, got $SITE_COUNT"
echo "Census OK: md=$MD_COUNT assets=$ASSET_COUNT site=$SITE_COUNT"

# --- Source untouched: re-hash manifest and diff ---------------------------
MANIFEST2="$(mktemp /tmp/import-tree-manifest.XXXXXX)"
manifest > "$MANIFEST2"
if ! diff -q "$MANIFEST" "$MANIFEST2" >/dev/null; then
  fail "post-import source manifest differs from pre-import (source was modified)"
fi
echo "Source manifest identical pre/post: yes ($(wc -l < "$MANIFEST" | tr -d ' ') files)"

echo "Import complete: target=$TARGET_DIR"
if [ "$CLONED" -eq 1 ]; then echo "Scratch clone left at $SOURCE_DIR (safe to delete)." >&2; fi
