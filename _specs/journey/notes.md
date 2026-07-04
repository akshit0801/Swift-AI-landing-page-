# journey — "From Curiosity to Creation" (Figma node 1:205)

## Fonts
- **Sora** — h2 (46.4px / 51.04px, letter-spacing -0.928px) and card h3 titles (18.4px / 27.6px, letter-spacing -0.368px). Figma exports `Sora:Regular` with Tailwind `font-medium`; implemented as weight **500**.
- **Plus Jakarta Sans** — subtitle (400, 16.8px / 27.3px) and card body text (400, 14.4px / 23.4px).
- **JetBrains Mono** — eyebrow label (400, 11.52px / 17.28px, letter-spacing 2.0736px, uppercase) and card step numbers 01–04 (400, 12.48px / 18.72px, letter-spacing 1.248px).

## Key colors
- Heading navy: `#0a1c46`; muted body text: `#5b6b90`
- Eyebrow: text `#1f6bff`, dot `#22d3ee`, pill bg `rgba(255,255,255,0.6)`, border `rgba(31,107,255,0.22)`
- Icon tiles (72px, radius 16px): step 1 `#1f6bff` (blue, search icon), step 2 `#22d3ee` (cyan, wrench), step 3 `#ff7a1a` (orange, lightbulb), step 4 `#17c07b` (green, chart). Tile shadow: `filter: drop-shadow(0 16px 15px rgba(10,28,70,0.5))` (as in Figma export).
- Cards: bg `rgba(255,255,255,0.55)`, border 1px `rgba(255,255,255,0.7)`, shadow `0 20px 45px rgba(10,28,70,0.28)` + inset `0 1px 0 rgba(255,255,255,0.6)`, radius 24px, padding 25px.

## Layout facts
- Section padding 112px vertical, 16px horizontal; content container 1152px (page canvas 1539px).
- Heading block max-width 672px, centered; subtitle 16px below title; steps row 64px below heading.
- 4 equal columns, 270px each with 24px gaps (= 1152). Icon tile centered above card, 20px gap.

## Assets
- All 4 icons recreated as **inline SVG** with path data copied verbatim from the Figma-exported SVGs (26x26 viewBox, white 2.16667px strokes). No raster assets; nothing placed in `assets/`.
- `screenshot.png` in this folder is the Figma reference render (1500px wide).

## Animation hooks
- `gs-reveal` on `.journey-heading` and each `.journey-step` (icon + card animate as one unit, allowing stagger).
- No `data-parallax` added: the icon tiles are structural content aligned to their cards, and the section has no purely decorative floating elements.

## Ambiguities / approximations
- Section/page background is not part of this node — screenshots show a light periwinkle (~`#e9eefb`) page background; left transparent here for the parent page to supply.
- Card step-number spacing: Figma gives a 23.89px-high number container with text offset 3.09px; approximated with `margin-top: 9px` on the h3 (total rhythm matches the render within ~1px).
- Cards' semi-transparent white fill suggests glassmorphism, but Figma export contained **no backdrop-filter/blur**, so none was added.
- Heading weight ambiguity: `Sora:Regular` family string vs `font-medium` class; 500 chosen (matches render).
