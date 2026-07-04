# Notes — section "Measurable Progress, Not Just Activity" (slug: progress, Figma node 1:531)

## Fonts
- **Sora** — section H2 (46.4px / 51.04px, weight 500, letter-spacing -0.928px), panel H3s (16.8px / 25.2px, 500, -0.336px), stat values (30px / 36px, weight 700, -0.6px).
- **Plus Jakarta Sans** — lede (16.8px / 27.3px, 400), stat labels (13.6px / 20.4px, 400), panel subtitles (13.12px / 19.68px, 400), heatmap cell numbers (11.2px / 16.8px, 500), alert paragraph (13.6px / 22.1px, 400).
- **JetBrains Mono** — eyebrow (11.52px, letter-spacing 2.0736px, uppercase), heatmap row labels "Grade 6/7/8" (12.48px / 18.72px), alert footer "School usage…" (12.48px / 18.72px).
- **Inter** — chart axis labels only (area chart months 12px, radar axis labels 11px), rendered as SVG `<text>`.

## Key colors
- Headline navy: `#0a1c46`; body gray-blue: `#5b6b90`
- Brand blue: `#1f6bff`; cyan: `#22d3ee`; green: `#17c07b`; orange: `#ff7a1a`; light cyan (alert footer text): `#7fe6f5`
- Glass card: bg `rgba(255,255,255,0.55)`, border 1px `rgba(255,255,255,0.7)`, radius 24px, shadow `0 20px 45px rgba(10,28,70,0.28)` + inset `0 1px 0 rgba(255,255,255,0.6)`
- Dark alert card: `linear-gradient(159.39deg, rgba(10,28,70,0.72) 7.735%, rgba(6,18,47,0.62) 92.265%)`, border `rgba(127,230,245,0.22)`, shadow `0 24px 55px rgba(6,18,47,0.7)` + inset `0 1px 0 rgba(255,255,255,0.12)`
- Eyebrow pill: bg `rgba(255,255,255,0.6)`, border `rgba(31,107,255,0.22)`, dot `#22d3ee`, text `#1f6bff`
- Area chart: line `#1F6BFF` 3px; area fill = vertical gradient black 0.5 → 0 opacity with fill-opacity 0.6 (yes, a gray/black fade — matches Figma export exactly)
- Radar: grid rings/spokes `#1F6BFF` @ 0.14 opacity; data polygon fill `#22D3EE` @ 0.35 + 2px `#22D3EE` stroke

## Layout
- Section padding 112px top/bottom, 16px sides; content container 1152px; heading block max 672px centered.
- Dashboard = CSS grid, 3 equal columns (373.33px each), 16px gaps; rows 122px / 331px / 243px. Chart + heatmap cards span columns 1–2 (763px); radar + alert cards in column 3 (373px).

## Charts (recreated as inline SVG — no raster assets)
- **Area chart** (713×220 viewBox): line + area paths use the EXACT path data exported from Figma (recharts output), translated -20px x / +26.2px y to sit in the plot area (Figma plot bleeds 20px left of the visible surface, clipped by the SVG viewport). Month labels at x 125/270/415/560/702, y 204.
- **Radar** (323×220 viewBox): pointy-top hexagon grid, center (161.5,110), ring radii 18.9 / 37.8 / 56.7 / 75.6 computed from Figma inset percentages (match exported ring viewBoxes). Data polygon uses exact Figma path data, translated to (101.5, 42.3). Axis label positions computed from Figma insets.
- **Heatmap**: pure CSS flex grid; 64px mono label + 5 equal cells, 36px tall, 10px radius, 0.9 opacity, 6px gaps, 12px row gaps.
- Icons: exact stroke path data copied from Figma SVG exports (Lucide-style: circle-check, file-check, trending-up, triangle-alert), stroke `#ffffff`.

## Ambiguities / approximations
- **Section background is NOT included**: in Figma the backdrop is a page-level light blue (~`#e3ebfd` / `#eaf0fe` gradient wash). Translucent glass cards need that backdrop to look correct — the parent page must supply it.
- No `backdrop-filter` appeared in the Figma export; glass look comes purely from rgba backgrounds. Add `backdrop-filter: blur()` only if the assembled page shows content behind the cards.
- Radar axis tick lines: color not present in export (tiny 4–8px connectors); approximated as `#5b6b90` @ 0.35 opacity.
- Figma heading font is listed as "Sora Regular" but styled `font-medium`; used weight 500 (visually matches screenshot).
- Curly quotes in alert text are verbatim: “test & improve”.
- No decorative floating elements exist in this section, so no `data-parallax` hooks were added; `gs-reveal` is on eyebrow, title, lede, and all 7 cards.

## Files / assets
- `fragment.html`, `styles.css`, `screenshot.png` (reference render) in `d:\SKAI space\_specs\progress\`.
- No downloads in `d:\SKAI space\assets\` needed — all icons/charts are inline SVG.
