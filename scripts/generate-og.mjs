import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'node:fs';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#111"/>
<g fill="#f5f5f5" font-family="Geist">
<text x="70" y="91" font-size="38" font-weight="600" letter-spacing="-2">ap.</text>
<text x="1130" y="85" text-anchor="end" font-size="22" fill="#bcbcbc">aryanprince.com</text>
<text x="68" y="267" font-family="Instrument Serif" font-size="112" letter-spacing="-2">Aryan Prince.</text>
<text x="72" y="339" font-size="35">CTO at PortzApp · Founding engineer</text>
<text x="72" y="397" font-size="28" fill="#ccc">Building web, mobile and AI products.</text>
<path d="M72 466H1128" stroke="#444"/>
<text x="72" y="525" font-size="23" fill="#bcbcbc">TypeScript / React / Laravel / Expo / Azure</text>
<text x="72" y="563" font-size="21" fill="#999">Architecture. Product engineering. Cloud infrastructure.</text>
</g></svg>`;
const renderer=new Resvg(svg,{font:{fontFiles:['scripts/fonts/Geist.ttf','scripts/fonts/InstrumentSerif.ttf'],loadSystemFonts:false}});
writeFileSync('public/og-portfolio.png',renderer.render().asPng());
