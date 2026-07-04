# Background — Figma node 1:1090 ("Background")

## Positioning / stacking (important)
- This layer is the **full-viewport fixed backdrop**: `position: fixed; inset: 0; z-index: 0; pointer-events: none; overflow: hidden`.
- Stacking order across the page: `.bg` (z-index 0) → page content sections (z-index 1) → `.nav` (z-index 100, also fixed).
- **Page background color:** vertical gradient `#eef4ff (0%) → #f6f9ff (40%) → #eaf1ff (100%)`. Set `body { background-color: #eef4ff; }` so overscroll matches. In Figma the layer is 1539 x 1064 (one viewport of the 1539px page).

## Contents (each has a data-parallax hook)
1. **Cyan orb** — 672px circle, Figma left 995 / top 121 (implemented as `right: -128px` for fluid widths). Radial gradient: `rgba(127,230,245,0.45)` at center fading to transparent at 62% of a 475.18px radius, with Figma's darkened intermediate stops preserved (`rgba(95,173,184,.34)`, `rgba(64,115,123,.23)`, `rgba(32,58,61,.11)`). `data-parallax="0.25"`.
2. **Blue orb** — 608px circle at left -160 / top 288. Radial: `rgba(31,107,255,0.2) → rgba(16,54,128,0.1) 30% → transparent 60%`, radius 429.92px. `data-parallax="0.4"`.
3. **Grid** — 1539 x 1383 at top 95px, opacity 0.7, hairline grid in `rgba(31,107,255,0.06)`. `data-parallax="0.05"`.
4. **Circuit-trace waves** — inline SVG (viewBox 0 0 1539 1276.8) at top -229px: two stepped horizontal traces (blue `#1F6BFF` @ .35 stroke-opacity, cyan `#22D3EE` @ .4) with four node dots, group opacity 0.35, stroke-width 1.72. `data-parallax="0.15"`. Source also saved at `D:\SKAI space\assets\bg-waves.svg`.

## Key colors
- Base gradient: `#eef4ff`, `#f6f9ff`, `#eaf1ff`
- Accents: `#1f6bff` (blue), `#22d3ee` / `rgba(127,230,245,…)` (cyan)

## Assets
- `D:\SKAI space\assets\bg-waves.svg` (inlined in fragment as well — fragment is self-contained).
- Reference screenshot: `D:\SKAI space\_specs\bg\screenshot.png`.

## Ambiguities / approximations
- **Grid cell size**: Figma's MCP export collapsed the repeating grid to two degenerate linear gradients (both stops at 0%), losing the tile size. Recreated as a 56px square hairline grid at the exact color `rgba(31,107,255,0.06)` and layer opacity 0.7 — it is nearly invisible in the render, so any 48–64px cell is visually equivalent.
- The waves SVG top offset (-229px) means only its lower portion shows in the first viewport, matching the design crop. `preserveAspectRatio="none"` keeps traces spanning the full width at any viewport size.
- Orb gradients interpolate through darkened (grayish) intermediate stops exactly as Figma exported them; do not simplify to a two-stop gradient or the falloff gets brighter.
- No `gs-reveal` on this layer (purely decorative, always visible); parallax hooks only.
