# CTA section — Figma node 1:994 (slug: cta)

## Fonts
- **Sora ExtraBold (800)** — headline, 51.2px / 53.76px, letter-spacing -1.024px
- **Plus Jakarta Sans Regular (400)** — body paragraph 16px/26px, QR caption 13.12px/19.68px
- **Plus Jakarta Sans Medium (500)** — button label 15.2px/22.8px
- **JetBrains Mono Regular (400)** — badge pill, 11.52px/17.28px, letter-spacing 2.0736px, uppercase

## Key colors
- Card background: `linear-gradient(165.37deg, rgba(10,28,70,0.72) 7.735%, rgba(6,18,47,0.62) 92.265%)` — TRANSLUCENT: final look depends on the light page background behind it (page bg is a light lavender-blue, ~#eaf1fb)
- Card border: `rgba(127,230,245,0.22)`; inset highlight `inset 0 1px 0 rgba(255,255,255,0.12)`; drop shadow `0 24px 55px -24px rgba(6,18,47,0.7)`
- Badge text/border: `#7fe6f5` / `rgba(127,230,245,0.3)`
- Headline gradient span: 15-stop eased gradient `#22d3ee` (cyan) → `rgb(255,178,122)` (peach) — copied verbatim
- Body text: `rgba(255,255,255,0.8)`
- Button: `#ff7a1a`, glow shadow `0 14px 15px rgba(255,122,26,0.7)` (Figma used drop-shadow filter; implemented as box-shadow — visually equivalent on a pill)
- QR card: `rgba(255,255,255,0.55)` bg, border `rgba(255,255,255,0.7)`, shadow `0 20px 45px rgba(10,28,70,0.28)`, inset `0 1px 0 rgba(255,255,255,0.6)`; inner tile `#ffffff` with `inset 0 2px 4px rgba(0,0,0,0.05)`; QR icon stroke `#0A1C46`
- Glow orb: radial `rgba(34,211,238,0.5)` → transparent, 288px circle, blur(64px), at left 942px / top -96px

## Layout
- Section padding: 136px top (Figma: 24px offset + 112px padding), 112px bottom, 16px sides
- Card: 1152 x 521, radius 40px, overflow hidden
- Text column at absolute left 64px / top 80px, width 573px; QR card at absolute left 761px / top 127px, width 240px

## Assets
- All 3 graphics inlined as SVG (arrow icon, QR-style icon). Raw copies saved: `assets/cta-arrow-icon.svg`, `assets/cta-qr-icon.svg` (not referenced by the fragment — inline only)

## Ambiguities / approximations
- **Headline overlap glitch in Figma:** the Figma frame absolutely positions two headline lines so they overlap when the first line wraps (visible in the node screenshot as garbled overlapping text). Implemented as the clear intent: one flowing h2 — white "Turn ideas into real things — " followed by gradient span "and skills that last." — wrapping naturally at 573px (3 lines: "Turn ideas into real / things — and skills that / last.")
- **Grid overlay:** Figma export mangled the grid pattern gradient stops (0.19268% ≈ 1px of 519px). Approximated as a 48px blueprint grid, `rgba(31,107,255,0.06)` lines at 0.4 opacity — nearly invisible either way.
- QR card has no backdrop-filter in the Figma output (pure rgba fill), so none was added.
- Section background is transparent — the light page background shows through and matters for the translucent card colors.
- Animation hooks: `.gs-reveal` on card, h2, QR card; `data-parallax="0.3"` on `.cta-glow`. No animation code included.
