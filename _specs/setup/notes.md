# setup — "Built for Schools. Ready to Run." (Figma node 1:889)

## Fonts
- **Sora** — Medium (500): section title (46.4px / 51.04px, tracking -0.928px), step card titles (16px / 24px, tracking -0.32px)
- **Plus Jakarta Sans** — Regular (400): subtitle (16.8px / 27.3px), card body text (13.6px / 22.1px)
- **JetBrains Mono** — Regular (400): eyebrow (11.52px, tracking 2.0736px, uppercase); Bold (700): step number badges (11.2px / 16.8px)

## Key colors
- Headline navy: `#0a1c46`
- Body/muted: `#5b6b90`
- Brand blue (eyebrow text, all step icons stroke): `#1f6bff`
- Cyan (eyebrow dot, line midpoint): `#22d3ee`
- Green (line endpoint): `#17c07b`
- Orange number badges: `#ff7a1a`
- Card bg: `rgba(255,255,255,0.55)`, border `rgba(255,255,255,0.7)`, shadow `0 20px 45px rgba(10,28,70,0.28)`, inset highlight `rgba(255,255,255,0.6)`
- Icon badge: white `#ffffff`, radius 16px, shadow `0 0 0 0 rgba(31,107,255,0.2), 0 14px 28px rgba(10,28,70,0.5)` (taken verbatim from Figma; 0.5 alpha is what the file specifies)
- Connector line gradient: `linear-gradient(90deg, #1f6bff 0%, #22d3ee 50%, #17c07b 100%)`
- Eyebrow pill: bg `rgba(255,255,255,0.6)`, border `rgba(31,107,255,0.22)`

## Layout
- Section padding 112px 16px; content container 1152px; heading block max-width 672px, centered.
- 5 step columns, each 214px wide (`flex: 1 1 0` + 20.4px gap = 1152px total).
- 1px gradient connector line spans the full 1152px, positioned at y=27.5px so it runs through the center of the 56px icon badges (badges paint above it via DOM order).
- Icon badge 56x56, radius 16, icon 24x24; number badge 24px circle at top:-8px / left:40px.
- Cards: radius 16, padding 21px, top margin 20px below badge; card heights are content-driven (they differ per column, matching the design).

## Assets
- All 5 icons recreated as **inline SVG** (Lucide-style: plug-zap, graduation-cap, users, layout-dashboard, qr-code; 24x24 viewBox, stroke 2, color #1F6BFF). No files placed in `assets/`.
- `screenshot.png` in this folder is the Figma reference render (1500x729).

## Ambiguities / approximations
- The Figma line gradient had 15 interpolated stops (#1f6bff → #22d3ee → #17c07b); simplified to a 3-stop gradient — visually identical since the stops were a smooth interpolation between those three hues.
- Section background is transparent in Figma; page canvas behind is very light blue (~`#e9eefc`). Card fills are semi-transparent white glass and depend on that page background; no `backdrop-filter` present in the extraction.
- No decorative floating elements exist in this section, so no `data-parallax` hooks were added. `gs-reveal` added to eyebrow, title, subtitle, and each of the 5 step columns (badge + card revealed together for clean stagger).
