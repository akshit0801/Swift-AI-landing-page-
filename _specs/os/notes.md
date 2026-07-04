# Section "os" — A Complete Operating System for Future Skills (Figma node 1:277)

## Fonts
- **Sora** — section H2 (46.4px / 51.04px, letter-spacing -0.928px) and card H3 titles (17.6px / 26.4px, -0.352px). Figma exported family "Sora:Regular" with Tailwind class `font-medium`; rendered weight in the screenshot looks semibold, so **weight 600 was used (approximation — could be 500)**.
- **Plus Jakarta Sans** — subtitle (16.8px / 27.3px), card body (14.4px / 23.4px), dark-card chips (13.12px / 19.68px). Weight 400.
- **JetBrains Mono** — eyebrow pill (11.52px / 17.28px, letter-spacing 2.0736px, uppercase). Weight 400.

## Key colors
- Section / page background: `#eef4ff` (flat — sampled from screenshot; the section node itself has no fill, bg comes from the page).
- Heading / card titles: `#0a1c46`
- Body text: `#5b6b90`
- Accent blue: `#1f6bff` (eyebrow text, blue icon tiles)
- Accent cyan: `#22d3ee` (dots, cyan icon tiles)
- Accent orange: `#ff7a1a` (orange icon tiles)
- Accent green: `#17c07b` (Signals Dashboard tile)
- Light card: bg `rgba(255,255,255,0.55)`, border 1px `rgba(255,255,255,0.7)`, radius 24px, shadow `0 20px 45px -20px rgba(10,28,70,0.28)` + inset `0 1px 0 rgba(255,255,255,0.6)`
- Dark card (Swiftee): gradient `linear-gradient(133.37deg, rgba(10,28,70,0.72) 7.74%, rgba(6,18,47,0.62) 92.27%)`, border 1px `rgba(127,230,245,0.22)`, shadow `0 24px 55px -24px rgba(6,18,47,0.7)` + inset `0 1px 0 rgba(255,255,255,0.12)`
- Chips in dark card: bg `rgba(255,255,255,0.1)`, radius 14px, h 36px, text `rgba(255,255,255,0.9)`
- Eyebrow pill: bg `rgba(255,255,255,0.6)`, border `rgba(31,107,255,0.22)`

## Layout
- Content container 1152px, section padding 112px top/bottom, 16px sides.
- Bento grid: 4 cols x 276px, 3 rows x 245px, 16px gaps (1152 x 767 total).
  - Digital Activity Platform: col 1-2, row 1
  - Swiftee AI Companion (dark): col 3, rows 1-2 (tall, h 506)
  - AI Companion Activity Cards: col 4, row 1
  - Robotics & Electronics Kits: col 1, row 2
  - **Row 2, cols 2 and 4 are intentionally empty** (matches design)
  - Signals Dashboard: col 1-2, row 3; Physical Mission Passport: col 3, row 3; Certificates & Badges: col 4, row 3
- Card padding: Figma offset 25px = 24px padding + 1px border (border-box).

## Assets
- All 7 card icons recreated as **inline SVG** (path data copied verbatim from Figma export; stroke #FFFFFF, stroke-width 1.83333, viewBox 0 0 22 22). Nothing placed in `assets/`.
- Reference screenshot: `_specs/os/screenshot.png` (1500x1239, original 1539x1271).

## Ambiguities / approximations
- Card text says **"Swiftee AI Companion"** in the design (task brief said "Swiftbot") — design text used verbatim.
- `backdrop-filter: blur(12px)` added to glass cards — implied by the translucent-white glass style but not present in the Figma export; harmless over the flat bg.
- Sora weight 600 vs 500 (see Fonts above).
- Dark-card gradient angle rounded 133.3728deg → 133.37deg; stops 7.735%/92.265% → 7.74%/92.27%.
- No decorative floating elements exist in this section, so no `data-parallax` hooks were added. `gs-reveal` is on the heading block and every card.
