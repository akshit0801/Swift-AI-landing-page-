// Assembles index.html + css/sections.css from _specs/<slug>/fragment.html and styles.css
const fs = require('fs');
const path = require('path');

const ROOT = 'd:\\SKAI space';
const SPECS = path.join(ROOT, '_specs');

// Page order: bg (fixed backdrop) + nav first, then flow sections
const ORDER = ['bg', 'doodles', 'nav', 'hero', 'notlab', 'journey', 'os', 'skills', 'progress', 'why', 'missions', 'setup', 'cta', 'footer'];

let bodyParts = [];
let cssParts = [];
let missing = [];

for (const slug of ORDER) {
  const fragPath = path.join(SPECS, slug, 'fragment.html');
  const cssPath = path.join(SPECS, slug, 'styles.css');
  if (!fs.existsSync(fragPath)) { missing.push(slug); continue; }
  let frag = fs.readFileSync(fragPath, 'utf8').trim();
  // Inject id="<slug>" on the fragment root tag (anchor targets for nav + testing)
  if (!/^<[a-z]+[^>]*\sid=/.test(frag)) {
    frag = frag.replace(/^(<[a-z]+)/, `$1 id="${slug}"`);
  }
  if (slug === 'hero') {
    bodyParts.push('<main class="page-main">');
  }
  bodyParts.push(`<!-- ===== section: ${slug} ===== -->\n${frag}\n`);
  if (slug === 'cta') {
    bodyParts.push('</main>');
  }
  if (fs.existsSync(cssPath)) {
    cssParts.push(`/* ===== section: ${slug} ===== */\n${fs.readFileSync(cssPath, 'utf8').trim()}\n`);
  }
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SCAI Space — Lead the AI Future. Not Just Follow It.</title>
  <meta name="description" content="SCAI Space helps schools build future-ready students through a complete skills-first learning ecosystem." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&family=Inter:wght@400&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/base.css" />
  <link rel="stylesheet" href="css/sections.css" />
</head>
<body>
${bodyParts.join('\n')}
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/gsap.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js"></script>
  <script src="js/main.js"></script>
  <!-- Vercel Web Analytics -->
  <script>
    window.va = window.va || function () { (window.vai = window.vai || []).push(arguments); };
  </script>
  <script defer src="/_vercel/insights/script.js"></script>
</body>
</html>
`;

fs.mkdirSync(path.join(ROOT, 'css'), { recursive: true });
fs.writeFileSync(path.join(ROOT, 'index.html'), html);
fs.writeFileSync(path.join(ROOT, 'css', 'sections.css'), cssParts.join('\n'));
console.log('written index.html (' + html.length + ' chars), sections.css (' + cssParts.join('\n').length + ' chars)');
if (missing.length) console.log('MISSING fragments:', missing.join(', '));
