# Rezalian Vatiady — Portfolio Website v3.3

Static portfolio for recruiters (Upwork / LinkedIn audience). GitHub Pages, no backend.

## Pages

- `index.html` — Main portfolio (hero, career highlights, projects, ZalinOS, skills, contact)
- `decks.html` — 13 presentation decks: in-browser viewer + native PPTX download
- `articles.html` — 24 articles with likes and comments (localStorage)
- `resume.html` — Printable resume
- `404.html` — Custom not-found page
- `decks/*.pptx` — 13 decks (183 slides total, native editable charts, speaker notes)

## Content data

- `decks.json` — Deck metadata + slide content (source for viewer and PPTX)
- `posts.json` — Article metadata + HTML bodies
- `assets/` — Compiled CSS/JS/fonts (renamed from `_next/`, no Jekyll conflict)
- `.nojekyll` — Disables Jekyll processing

## Standards applied (v3.3)

- WCAG 2.2 AA: skip link, focus-visible, contrast >= 4.5:1, reduced-motion support
- SEO: unique title/description per page, canonical, Open Graph, Twitter card, JSON-LD (Person / WebSite / ProfilePage / ItemList / Blog), sitemap.xml, robots.txt
- Performance: self-hosted WOFF2 preloaded, image dimensions fixed, lazy loading below fold
- Quality gates: golden path, zero dead links, zero placeholder content, zero secrets

## History

- v2.1 — Assets path fix (`_next/` → `assets/`)
- v3.2 — 13 visual decks rebuilt (183 slides, native charts), in-browser viewer
- v3.3 — Skill-compliant rebuild: 18pt+ fonts, speaker notes, SEO schema/OG/sitemap, WCAG skip-link/focus/contrast, resume page, og-image, custom 404
