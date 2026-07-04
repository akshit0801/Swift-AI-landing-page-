# missions — "Real Missions. Real Making. Real Skills." (Figma node 1:770)

## Fonts
- **Sora** — Medium (500): section title (46.4px / 51.04px, tracking -0.928px), card titles (16.32px / 22.44px, tracking -0.3264px)
- **Plus Jakarta Sans** — Regular (400): subtitle (16.8px / 27.3px)
- **JetBrains Mono** — Regular (400): eyebrow (11.52px, tracking 2.0736px, uppercase); Medium (500): tag chips (10.88px / 16.32px)

## Key colors
- Headline navy: `#0a1c46`
- Body/muted + light-tag text: `#5b6b90`
- Brand blue (eyebrow text, icon tiles 1 & 5): `#1f6bff`
- Cyan (eyebrow dot, icon tile 2): `#22d3ee`
- Orange (icon tile 3): `#ff7a1a`
- Green (icon tile 4): `#17c07b`
- Dark-card tag text: `#7fe6f5`
- Dark card bg: `linear-gradient(147.129deg, rgba(10,28,70,0.72) 7.735%, rgba(6,18,47,0.62) 92.265%)`, border `rgba(127,230,245,0.22)`, shadow `0 24px 55px rgba(6,18,47,0.7)`, inset highlight `rgba(255,255,255,0.12)`
- Light card bg: `rgba(255,255,255,0.55)`, border `rgba(255,255,255,0.7)`, shadow `0 20px 45px rgba(10,28,70,0.28)`, inset highlight `rgba(255,255,255,0.6)`
- Light tag chip bg: `#e7eefb`
- Eyebrow pill: bg `rgba(255,255,255,0.6)`, border `rgba(31,107,255,0.22)`

## Layout
- Section padding 112px 16px; content container 1152px; heading block max-width 672px, centered.
- 5 cards, each 218px wide x 244px tall (I used `flex: 1 1 0` + 15.6px gap = same 1152px total), radius 24px, padding 25px, content vertically centered.
- Tag chips: padding 2px 8px, radius 8px, wrap with ~6px gap (flex-wrap reproduces the exact Figma wrapping per card).

## Assets
- All 5 card icons recreated as **inline SVG** (Lucide-style stroke icons: traffic-cone, recycle, life-buoy, bridge/fence, heart-handshake; 22x22 viewBox, stroke 1.83333, white). No files placed in `assets/`.
- `screenshot.png` in this folder is the Figma reference render (1500x705).

## Ambiguities / approximations
- Section background is transparent in Figma — the page canvas behind it is a very light blue (~`#e9eefc`). The card fills are semi-transparent white/navy "glass" and depend on that page background; no `backdrop-filter` was present in the Figma extraction, so none was added.
- Chip absolute positions in Figma were converted to flex-wrap; wrapping matches the reference at desktop width.
- No decorative floating elements exist in this section, so no `data-parallax` hooks were added. `gs-reveal` added to eyebrow, title, subtitle, and each of the 5 cards.
