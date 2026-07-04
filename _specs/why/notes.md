# Notes — section "Why Schools Choose SCAI Space" (slug: why, Figma node 1:712)

## Fonts
- **Sora** — H2 (46.4px / 51.04px, weight 500, letter-spacing -0.928px), card titles (17.28px / 25.92px, 500, -0.3456px).
- **Plus Jakarta Sans** — card body text (14.4px / 23.4px, 400).
- **JetBrains Mono** — eyebrow "WHY SCHOOLS CHOOSE US" (11.52px / 17.28px, letter-spacing 2.0736px, uppercase).

## Key colors
- Headline navy: `#0a1c46`; body gray-blue: `#5b6b90`
- Icon tiles (48×48, radius 16): blue `#1f6bff`, cyan `#22d3ee`, green `#17c07b`, orange `#ff7a1a`; icon strokes `#ffffff` @ 1.83333px
- Glass card: bg `rgba(255,255,255,0.55)`, border 1px `rgba(255,255,255,0.7)`, radius 24px, shadow `0 20px 45px rgba(10,28,70,0.28)` + inset `0 1px 0 rgba(255,255,255,0.6)`
- Eyebrow pill: bg `rgba(255,255,255,0.6)`, border `rgba(31,107,255,0.22)`, dot `#22d3ee`, text `#1f6bff`

## Layout
- Section padding 112px top/bottom, 16px sides; container 1152px; heading block max 672px centered.
- 4 cards: 276px wide × 244px tall, 16px gaps → CSS grid `repeat(4, 1fr)` with `gap: 16px` (276×4 + 16×3 = 1152). Card padding 25px.
- Card internal spacing: icon tile → title 16px, title → body 8px.

## Icons (inline SVG, exact Figma path data — Lucide-style)
1. sparkles (Differentiate Your School)
2. rocket (Build Future-Ready Students)
3. eye (Visible Progress)
4. plug-zap (Easy Implementation)

## Ambiguities / approximations
- **Section background NOT included** — page-level light blue (~`#e3ebfd`) backdrop is supplied by the parent page; translucent cards depend on it.
- No `backdrop-filter` in the Figma export; glass look is rgba-only.
- Figma lists heading font as "Sora Regular" but applies medium styling; used weight 500 (matches screenshot).
- No decorative floating elements in this section, so no `data-parallax` hooks; `gs-reveal` is on eyebrow, title, and all 4 cards.

## Files / assets
- `fragment.html`, `styles.css`, `screenshot.png` (reference render) in `d:\SKAI space\_specs\why\`.
- No downloads in `d:\SKAI space\assets\` needed — all icons are inline SVG.
