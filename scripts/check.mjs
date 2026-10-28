import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import assert from 'node:assert/strict';
const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(await readFile(resolve(root, 'content/site.json'), 'utf8'));
const html = await readFile(resolve(root, 'dist/index.html'), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
assert.equal(new Set(ids).size, ids.length, 'Duplicate HTML IDs');
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'One main heading required');
for (const m of html.matchAll(/href="#([^"]+)"/g)) assert(ids.includes(m[1]), `Missing anchor ${m[1]}`);
for (const m of html.matchAll(/(?:src|href)="(\/[^"#]+)"/g)) {
  const path = m[1].split('?')[0];
  if (path === '/') continue;
  await stat(resolve(root, 'dist', path.slice(1)));
}
for (const m of html.matchAll(/<img\s([^>]+)>/g)) {
  assert(m[1].includes('alt="'), 'Every image needs alternative text');
  assert(m[1].includes('width="') && m[1].includes('height="'), 'Images need dimensions');
}
assert(!html.includes('—'), 'Em dashes are forbidden');
assert(!/not just|rather than|doesn.t just|not only/i.test(html), 'Check prose cadence');
assert(!/<script|<iframe|<form\b/i.test(html), 'Static public site must not collect data or load scripts');
assert(html.includes('As an Amazon Associate I earn from qualifying purchases.'));
assert(html.includes('Concept / not implemented'));
assert(html.includes('A checkbox cannot grant them either.'));
if (config.installation.verified) {
  assert(config.installation.url && /^https:\/\//.test(config.installation.url));
  assert(config.installation.verifiedAt && config.installation.release, 'Installer needs dated release evidence');
} else {
  assert(html.includes('Installation is not available yet.'));
}
for (const item of [...config.devices, config.controller]) {
  if (item.purchaseUrl && item.affiliateVerified && config.affiliate.siteApproved) {
    assert(html.includes(item.purchaseUrl.replaceAll('&', '&amp;')));
    assert(html.includes('Paid link'));
  }
}
let bytes = 0;
async function walk(dir) { for (const e of await readdir(dir, { withFileTypes: true })) { const p = resolve(dir,e.name); if(e.isDirectory()) await walk(p); else bytes += (await stat(p)).size; } }
await walk(resolve(root,'dist'));
assert(bytes < 850_000, `Static payload grew to ${bytes} bytes`);
console.log(`Checked links, anchors, image accessibility, publication status, rights, disclosures and prose. Static files: ${Math.round(bytes/1024)} KiB.`);
