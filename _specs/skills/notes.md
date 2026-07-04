# Section "skills" — Skills Students Carry Beyond the Room (Figma node 1:391)

## Fonts
- **Sora** — section H2 (46.4px / 51.04px, letter-spacing -0.928px) and card H3 titles (16.32px / 24.48px, -0.3264px). Figma exported family "Sora:Regular" with Tailwind class `font-medium`; rendered weight looks semibold, so **weight 600 was used (approximation — could be 500)**.
- **Plus Jakarta Sans** — subtitle (16.8px / 27.3px), card body (14.08px / 22.88px). Weight 400.
- **JetBrains Mono** — eyebrow pill (11.52px / 17.28px, letter-spacing 2.0736px, uppercase). Weight 400.

## Key colors
- Section / page background: `#eef4ff` (flat — sampled from screenshot; the section node itself has no fill).
- Heading / card titles: `#0a1c46`
- Body text: `#5b6b90`
- Accent blue: `#1f6bff` (eyebrow text, gradient start)
- Accent cyan: `#22d3ee` (eyebrow dot, gradient end)
- Icon tile gradient: Figma exports a 15-stop 135deg blue-to-cyan gradient (`rgb(31,107,255)` → `rgb(34,211,238)`, an eased interpolation). **Simplified to 3 stops**: `linear-gradient(135deg, #1f6bff 0%, #0ca2f9 50%, #22d3ee 100%)` — #0ca2f9 is the exported 50% stop, visually identical.
- Card: bg `rgba(255,255,255,0.55)`, border 1px `rgba(255,255,255,0.7)`, radius 24px, shadow `0 20px 45px 0 rgba(10,28,70,0.28)` + inset `0 1px 0 rgba(255,255,255,0.6)` (note: this section's card shadow has 0 spread, unlike the os section's -20px — kept verbatim from the export).
- Eyebrow pill: bg `rgba(255,255,255,0.6)`, border `rgba(31,107,255,0.22)`.

## Layout
- Content container 1152px, section padding 112px top/bottom, 16px sides.
- Grid: 4 cols x 276px, 16px gaps; rows 163px / 163px / 140px (Figma row gaps were 15.44/15.69px — rounded to 16px).
  - Row 1: Critical Thinking (cols 1-2, wide), AI Literacy (col 3), Robotics Thinking (col 4)
  - Row 2: Electronics Reasoning, Communication, Collaboration, Creativity (cols 1-4)
  - Row 3: Judgment, Problem Solving, Self-Direction (cols 1-3); **col 4 intentionally empty**
- Card header: 40px gradient icon tile (radius 14px, 18px icon) + title in one flex row (12px gap); paragraph 12px below.
- Card padding: Figma offset 21px = 20px padding + 1px border (border-box).

## Assets
- All 10 card icons recreated as **inline SVG** (path data copied verbatim from Figma export; stroke #FFFFFF, stroke-width 1.5, viewBox 0 0 18 18; Creativity icon dots also use fill #FFFFFF). Nothing placed in `assets/`.
- Reference screenshot: `_specs/skills/screenshot.png` (1500x982, original 1539x1007).

## Ambiguities / approximations
- Icon tile gradient simplified from 15 stops to 3 (see above).
- `backdrop-filter: blur(12px)` added to glass cards — implied by the style but not present in the Figma export.
- Sora weight 600 vs 500 (see Fonts above).
- No decorative floating elements exist in this section, so no `data-parallax` hooks were added. `gs-reveal` is on the heading block and every card.
