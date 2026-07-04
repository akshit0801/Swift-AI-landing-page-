# Footer — Figma node 1:1032 (slug: footer)

## Fonts
- **Sora Bold (700)** — logo wordmark "SCAI Space", 17.6px / 26.4px, letter-spacing -0.352px
- **Sora Medium (500)** — column headings, 15.2px / 22.8px, letter-spacing -0.304px (Figma layer named "Sora:Regular" but weight is font-medium — implemented as 500)
- **Plus Jakarta Sans Regular (400)** — brand description 14.4px/23.4px; link items 13.76px/20.64px; copyright 13.12px/19.68px
- **JetBrains Mono Regular (400)** — tagline "Not a lab. A launchpad.", 13.12px/19.68px

## Key colors
- Card: `rgba(255,255,255,0.55)` bg, border `rgba(255,255,255,0.7)`, radius 24px, shadow `0 20px 45px rgba(10,28,70,0.28)`, inset highlight `inset 0 1px 0 rgba(255,255,255,0.6)` — translucent over the light page background
- Headings / "SCAI": `#0a1c46`
- "Space" accent: `#1f6bff`
- Body / links / copyright / tagline: `#5b6b90`
- Logo tile: 36px, radius 14px, 15-stop eased gradient 135deg `#1f6bff` → `#22d3ee` (copied verbatim), white sparkles icon (18px, stroke 1.5)
- Divider above bottom row: `rgba(31,107,255,0.14)`

## Layout
- Footer padding: 32px top, 40px bottom, 16px sides; card 1152px wide, padding 49px (+1px border = 50px visual)
- Columns per Figma x-offsets: brand 417.5px wide, then 40px gap, three 177.5px columns with 32px gaps (implemented as flex gap 32px + 8px extra margin on brand)
- Bottom row: margin-top 40px, 1px divider, padding-top 25px, space-between

## Assets
- Logo sparkles icon inlined as SVG (unique clipPath id `footer-logo-clip`). Raw copy saved: `assets/footer-logo-icon.svg` (not referenced by the fragment — inline only)

## Ambiguities / approximations
- Link items are plain text in the Figma output (no hrefs) — kept as plain `<li>` text, not anchors. Only the logo is a link.
- No backdrop-filter present in Figma output for the glass card; none added.
- Animation hooks: `.gs-reveal` on brand block and each of the 3 link columns. No parallax elements in this section (no decorative orbs/glows).
