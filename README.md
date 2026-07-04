# SCAI Space — Landing Page

Static one-page site implemented from the Figma design
([source file](https://www.figma.com/design/Ves9vVEbDCrSDwB1dMz9qd/Untitled?node-id=1-2)),
with GSAP ScrollTrigger parallax and reveal animations.

## Run

Open `index.html` directly in a browser, or serve the folder:

```
npx serve .
```

GSAP and the Google Fonts (Sora, Plus Jakarta Sans, JetBrains Mono) load from CDNs,
so an internet connection is needed.

## Structure

- `index.html` — assembled page (generated — don't edit by hand, see below)
- `css/base.css` — reset + page-level defaults
- `css/sections.css` — per-section styles (generated)
- `js/main.js` — GSAP animations
- `assets/` — SVGs exported from Figma
- `_specs/doodles/` — full-page hand-drawn STEM doodle background layer (rockets,
  planets, lightbulbs, gears, atoms, AI heads, growth charts, sparkles, dashed
  flight paths) as inline SVG line-art, each with a parallax speed
- `_specs/<slug>/` — per-section source fragments (`fragment.html` + `styles.css`),
  notes, and reference screenshots extracted from Figma
- `build.js` — assembles `index.html` and `css/sections.css` from `_specs/`

To change a section, edit its files in `_specs/<slug>/` and run `node build.js`.

## Animations (`js/main.js`)

- `.gs-reveal` elements fade/slide in on scroll, staggered per batch
  (`ScrollTrigger.batch`, fires once).
- `[data-parallax="<speed>"]` elements drift with scroll. Three modes: elements in
  the fixed background layer (`#bg`) move against the full page scroll; doodles in
  the full-page layer (`#doodles`) float at their own depth (positive speed =
  foreground, negative = background); in-flow decorations drift while their section
  crosses the viewport.
- The doodle layer (`#doodles`) is a full-document-height backdrop of blue line-art
  STEM illustrations, sitting above the color washes and behind all content.
- The hero copy and hero card counter-scroll at different depths as the hero leaves.
- The nav gets `.is-scrolled` past 40px of scroll.
- Honors `prefers-reduced-motion` (reveals shown immediately, no parallax).

Debug query params: `?noanim` disables all animation; `?instant` jumps tweens to
their end states.
