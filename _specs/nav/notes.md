# Nav — Figma node 1:1101 ("Nav")

## Positioning / stacking
- The nav is a **fixed** element pinned to the top of the viewport: full-width wrapper with `padding: 16px 16px 0` and the 1152px-max pill bar centered inside it.
- Stacking order used: `.bg` (node 1:1090) fixed at `z-index: 0` behind everything → page content `z-index: 1` → `.nav` at `z-index: 100` on top of everything.
- In the Figma page (1539px wide) the bar is exactly 1152px wide, 16px from the top.

## Fonts
- **Sora Bold (700)** — brand wordmark "SCAI Space", 17.6px / 26.4px, letter-spacing -0.352px.
- **Plus Jakarta Sans Regular (400)** — nav links, 14.4px / 21.6px.
- **Plus Jakarta Sans Medium (500)** — buttons, 15.2px / 22.8px.

## Key colors
- Ink / headings: `#0a1c46`
- Brand blue (accent, " Space"): `#1f6bff`
- Muted link text: `#5b6b90`
- CTA orange: `#ff7a1a` with glow `drop-shadow(0 14px 15px rgba(255,122,26,0.7))`
- Glass bar: `rgba(255,255,255,0.55)` fill, `1px solid rgba(255,255,255,0.7)` border, shadow `0 20px 45px rgba(10,28,70,0.28)`, top inner highlight `inset 0 1px 0 rgba(255,255,255,0.6)`
- Logo tile gradient: `linear-gradient(135deg, #1f6bff → #0ca2f9 (50%) → #22d3ee)` (Figma exported 15 interpolated stops between #1f6bff and #22d3ee; midpoint #0ca2f9 kept), radius 14px, glow `drop-shadow(0 8px 9px rgba(31,107,255,0.7))`.
- "Explore" button border: `rgba(31,107,255,0.25)`.

## Assets
- Logo sparkles icon inlined as SVG in fragment (source also saved at `D:\SKAI space\assets\nav-logo-icon.svg`, 18x18, white 1.5px stroke).
- Reference screenshot: `D:\SKAI space\_specs\nav\screenshot.png`.

## Ambiguities / approximations
- **backdrop-filter: blur(18px)** added for the glass effect. The Figma MCP export only carried the translucent white fill; the layer is a glassmorphism bar, so a background blur is assumed (value approximated).
- Figma padding read 17/13px on the bordered box; implemented as `padding: 12px 16px` + 1px border (identical outer geometry).
- No `gs-reveal` class added — the nav is fixed and should not scroll-reveal.
- Nav link hover states not present in the static design (pill radius already on links for a hover background if desired).
- Mobile: design has no hamburger menu; links + "Explore" are hidden ≤768px, brand + "Book a Demo" kept.
