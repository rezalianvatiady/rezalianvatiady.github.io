# Rezalian Vatiady — Portfolio Website v2.1

## 🔧 GitHub Pages Fix (v2.1)

This version fixes the CSS/JS 404 issue by renaming `_next/` to `assets/`.
No underscore prefix = no Jekyll conflict = guaranteed to work on GitHub Pages.

## 📦 Contents

- `index.html` — Main portfolio
- `scraping-portfolio-deck.html` — 28-slide presentation
- `assets/` — Compiled CSS/JS/fonts (renamed from `_next/`)
- `reza-photo.png` — Profile photo
- `.nojekyll` — Disables Jekyll (backup safety measure)

## 🚀 Deploy

1. Delete all files in your repo (keep `.git`)
2. Copy these files
3. Commit: `git add -A && git commit -m "v2.1 — fix assets path"`
4. Push: `git push origin main`
5. Wait 2-3 minutes
6. Visit https://rezalianvatiady.github.io

## ✅ What Changed from v2.0

- `_next/` folder → renamed to `assets/` (no underscore = no Jekyll issue)
- All HTML/CSS/JS references updated: `/_next/` → `/assets/`
- `.nojekyll` still included as backup
- No `assetPrefix` config (cleaner build)
