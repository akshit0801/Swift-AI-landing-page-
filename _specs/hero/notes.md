# Hero — Figma node 1:6 ("Hero")

## Layout
- Section: column-centered, `padding: 160px 16px 96px` (160px top clears the fixed nav). Content container 1152px, position relative, ~683px tall on desktop.
- Left column 566px wide, normal flow. Right glass card is **absolutely positioned** at `left: 623px; top: 82px`, exactly 520 x 520px (Figma: left 622.72, top 81.73).
- Sits at `z-index: 1` above the fixed `.bg` layer, below the fixed `.nav`.

## Fonts
- **Sora ExtraBold (800)** — H1, 70.4px / 68.992px, letter-spacing -1.408px.
- **Sora Bold (700)** — stat numbers, 24px / 32px, letter-spacing -0.48px.
- **Sora SemiBold (600)** — "Swiftee" name, 15.2px / 22.8px, letter-spacing -0.304px.
- **Plus Jakarta Sans Regular (400)** — paragraphs (18.4px/29.9px and 16px/26px), stat labels (13.6px/20.4px), skill names & chat message (12.48px/18.72px).
- **Plus Jakarta Sans Medium (500)** — buttons, 15.2px / 22.8px.
- **JetBrains Mono Regular (400)** — eyebrow (11.52px, letter-spacing 2.0736px, uppercase), card tag (11.52px, letter-spacing 1.152px, uppercase), skill percentages (12.48px), chips (11.52px).

## Key colors
- Ink: `#0a1c46`; body text: `rgba(10,28,70,0.8)`; muted: `#5b6b90`
- Brand blue: `#1f6bff`; cyan: `#22d3ee`; green: `#17c07b`; CTA orange: `#ff7a1a` (glow `rgba(255,122,26,0.7)`)
- H1 gradient (line 2): `linear-gradient(125.39deg, #0a1c46 6.17%, #1f6bff 54.38%, #22d3ee 93.83%)`, clipped to text.
- Eyebrow pill: bg `rgba(255,255,255,0.6)`, border `rgba(31,107,255,0.22)`, dot `#22d3ee`.
- Glass button: bg `rgba(255,255,255,0.55)`, border `rgba(255,255,255,0.7)`, shadow `0 20px 45px rgba(10,28,70,0.28)` + inset `0 1px 0 rgba(255,255,255,0.6)`.
- Card: gradient `140deg rgba(255,255,255,0.6) 3.67% → rgba(228,236,255,0.4) 96.33%`, border `rgba(255,255,255,0.65)`, radius 35.2px, shadow `0 20px 45px -22px rgba(10,28,70,0.3)` + same inset highlight.
- Inner white cards: `rgba(255,255,255,0.7)`, radius 16px, shadow `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.1)`.
- Skill track: `#e7eefb`; fills: `#1f6bff` (82%), `#22d3ee` (68%), `#17c07b` (90%). Fill widths in Figma (359.156 / 297.828 / 394.188 of a 438px track) = exactly 82% / 68% / 90%.
- Chips: bg `rgba(255,255,255,0.6)`, border `rgba(31,107,255,0.2)`, radius 10px.
- Avatar tile: same blue→cyan 135deg gradient as nav logo (`#1f6bff → #0ca2f9 → #22d3ee`), radius 16px.

## Exact copy
- Eyebrow: "Not a lab. A launchpad." (uppercased via CSS)
- H1: "Lead the AI Future." / "Not Just Follow It." — the Figma H1 contains an **empty line** between the two phrases, so the gradient line starts one full line-height (69px) below line 1; reproduced with `margin-top: 69px`.
- Chat: "Swiftee" / "“Let's test your traffic light logic 🚦”" (curly quotes + emoji, verbatim).
- Stats: 120+ "Schools onboarded", 8 "Future-skill domains", 94% "Reflection completion".
- Chips: Servo, Sensor, LED Grid, Logic Board. Card tag: "Innovation Lab" (uppercased via CSS).

## Assets
- All three icons inlined as SVG (arrow 18px white, lab/bot icon 16px #1F6BFF, robot 24px white). Sources also saved: `D:\SKAI space\assets\hero-arrow-icon.svg`, `hero-lab-icon.svg`, `hero-bot-icon.svg`.
- Reference screenshot: `D:\SKAI space\_specs\hero\screenshot.png`.

## Ambiguities / approximations
- Figma wraps the Swiftee avatar in a "Container:transform" with a -6.32px vertical offset; the rendered screenshot shows a plain upright rounded square, so no transform was applied (avatar centered in the row).
- `backdrop-filter: blur()` added to the glass card (8px) and glass button (12px) — implied by the glassmorphism style, not present in the MCP export.
- The blue→cyan tile gradient was exported as 15 interpolated stops; collapsed to 3 stops (#1f6bff / #0ca2f9 / #22d3ee) — visually identical.
- `gs-reveal` added to: eyebrow, title, both paragraphs, CTA row, stats row, and the right card. No parallax attributes inside the hero (all elements are content, decorative orbs live in the bg layer).
- Mobile (≤768px): card becomes static full-width below the text; H1 scales to 44px.
