const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const BASE = 'http://localhost:3000';
const ROUTES = ['/', '/what-is', '/benefits', '/community', '/comunidad-rodadas', '/privacidad', '/terminos'];
const OUT = path.join('C:\\Users\\julia\\AppData\\Local\\Temp\\claude\\C--Users-julia-OneDrive-Escritorio-riderpath-riderpath\\bd609b60-6694-481f-8af7-2bee6bc159e2\\scratchpad\\screenshots');

if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

function slug(route) {
  return route === '/' ? 'home' : route.replace(/\//g, '').replace(/-/g, '_');
}

(async () => {
  const browser = await chromium.launch();

  for (const scheme of ['dark', 'light']) {
    const ctx = await browser.newContext({
      colorScheme: scheme,
      viewport: { width: 1440, height: 900 },
    });
    const page = await ctx.newPage();

    for (const route of ROUTES) {
      const name = `${slug(route)}_${scheme}`;
      try {
        await page.goto(BASE + route, { waitUntil: 'networkidle', timeout: 20000 });
        await page.waitForTimeout(800);
        const file = path.join(OUT, `${name}.png`);
        await page.screenshot({ path: file, fullPage: true });
        console.log(`OK  ${name} → ${file}`);
      } catch (e) {
        console.error(`ERR ${name}: ${e.message}`);
      }
    }

    await ctx.close();
  }

  await browser.close();
  console.log('Done.');
})();
