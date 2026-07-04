# notlab — "This Is Not Another Robotics Lab." (Figma node 1:114)

## Fonts
- **Sora** — heading (h2), Figma exports `Sora:Regular` with Tailwind `font-medium`; implemented as weight **500**, 46.4px / 51.04px, letter-spacing -0.928px.
- **Plus Jakarta Sans** — body/list items (400, 16px / 24px) and tag pills (500, 12.8px / 19.2px).
- **JetBrains Mono** — eyebrow label (400, 11.52px / 17.28px, letter-spacing 2.0736px, uppercase).

## Key colors
- Heading navy: `#0a1c46`
- Heading gradient (line 2, clipped to text): `linear-gradient(129.18deg, #0a1c46 6.17%, #1f6bff 54.38%, #22d3ee 93.83%)`
- Eyebrow: text `#1f6bff`, dot `#22d3ee`, pill bg `rgba(255,255,255,0.6)`, border `rgba(31,107,255,0.22)`
- Light card: bg `rgba(255,255,255,0.55)`, border `rgba(255,255,255,0.7)`, shadow `0 20px 45px rgba(10,28,70,0.28)` + inset `0 1px 0 rgba(255,255,255,0.6)`
- Dark card: bg `linear-gradient(161.81deg, rgba(10,28,70,0.72) 7.74%, rgba(6,18,47,0.62) 92.27%)`, border `rgba(127,230,245,0.22)`, shadow `0 24px 55px rgba(6,18,47,0.7)` + inset `0 1px 0 rgba(255,255,255,0.12)`
- Red ("not") accents: text/icon `#e5484d`, pill bg `rgba(229,72,77,0.1)`, icon circle bg `rgba(229,72,77,0.12)`, item text `rgba(10,28,70,0.7)` with line-through
- Green/teal ("is") accents: pill bg `rgba(23,192,123,0.2)`, pill text `#7fe6f5`, check circle gradient `linear-gradient(135deg, #17c07b, #22d3ee)` (Figma listed 12 interpolated stops; simplified to 2 endpoints — visually identical), item text `rgba(255,255,255,0.9)`

## Layout facts
- Section padding 112px vertical, 16px horizontal; content container 1152px (page canvas 1539px).
- Two cards 564px each with 24px gap (= 1152); min-height 321px; radius 24px; padding 33px.
- Gradient heading line is constrained to 476px so it wraps to two lines ("This Is a Future-" / "Skills Ecosystem.") with one blank line (~51px) after line 1 — reproduced with `margin-top: 51px` + `max-width: 476px`.

## Assets
- Icons recreated as **inline SVG** (X and check, 15px strokes copied verbatim from Figma-exported SVGs). No raster assets needed; nothing placed in `assets/`.
- `screenshot.png` in this folder is the Figma reference render (1500px wide).

## Animation hooks
- `gs-reveal` on `.notlab-heading` and each `.notlab-card`.
- No `data-parallax` added: this section contains no decorative floating elements (both cards and heading are structural content).

## Ambiguities / approximations
- Section/page background is not part of this node — screenshots show a light periwinkle (~`#e9eefb`) page background; left transparent here for the parent page to supply.
- Cards' semi-transparent white/navy fills suggest a glassmorphism intent, but Figma export contained **no backdrop-filter/blur** value, so none was added.
- Heading weight ambiguity: Figma family string says `Sora:Regular` but the generated class is `font-medium`; 500 chosen (matches render).
