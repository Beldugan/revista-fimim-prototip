const { chromium } = require('playwright');
const http = require('http'), fs = require('fs'), path = require('path');
const models = process.argv.slice(3); const out = process.argv[2];
const srv = http.createServer((q, r) => { const f = path.join(__dirname, decodeURIComponent(q.url.split('?')[0].split('#')[0])); fs.readFile(f, (e, d) => { if (e) { r.writeHead(404); r.end(); return; } r.writeHead(200, { 'Content-Type': f.endsWith('.js') ? 'text/javascript' : 'text/html' }); r.end(d); }); }).listen(8765, async () => {
  const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
  for (const m of models) {
    const p = await b.newPage({ viewport: { width: 1500, height: 1000 } });
    const errs = []; p.on('pageerror', e => errs.push(e.message)); p.on('console', c => { if (c.type() === 'error') errs.push(c.text()); });
    await p.goto('http://localhost:8765/scene.html#' + m);
    try { await p.waitForFunction(() => window.__done, null, { timeout: 60000 }); } catch (e) { errs.push('timeout'); }
    const data = await p.evaluate(() => document.querySelector('canvas') && document.querySelector('canvas').toDataURL('image/webp', 0.9));
    if (data) fs.writeFileSync(path.join(out, m + '.webp'), Buffer.from(data.split(',')[1], 'base64'));
    console.log(m, errs.slice(0, 3), data ? data.length : 0);
    await p.close();
  }
  await b.close(); srv.close();
});
