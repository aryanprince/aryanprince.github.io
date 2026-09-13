import { Resvg } from '@resvg/resvg-js';
import { readFileSync, writeFileSync } from 'node:fs';
const svg = readFileSync('scripts/og-portfolio.svg','utf8');
const renderer = new Resvg(svg,{font:{fontFiles:['scripts/fonts/Geist.ttf','scripts/fonts/InstrumentSerif.ttf'],loadSystemFonts:false}});
writeFileSync('public/og-portfolio.png',renderer.render().asPng());
