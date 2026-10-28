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
  if (path !== '/') await stat(resolve(root, 'dist', path.slice(1)));
}
for (const m of html.matchAll(/<img\s([^>]+)>/g)) {
  assert(m[1].includes('alt="'), 'Every image needs alternative text');
  assert(m[1].includes('width="') && m[1].includes('height="'), 'Images need dimensions');
}
assert(!html.includes('—'), 'Em dashes are forbidden');
assert(!/not just|rather than|doesn.t just|not only/i.test(html), 'Check prose cadence');
assert(!/<script|<iframe|<form\b/i.test(html), 'Public site must not collect data or load scripts');
assert(html.includes(config.site.story), 'Preserve Ryan’s actual origin story');
assert(html.includes(config.site.hero.note), 'Mockup caveats must remain visible');
assert.equal((html.match(/Studio Upgrade/g) || []).length, 1, 'Keep the name only for Discord');
assert.equal((html.match(/class="game-card /g) || []).length, config.games.length, 'Show the full game list');
assert(config.upcoming.every(g => html.includes(g.name) && html.includes(g.status)), 'Label upcoming games');
assert(html.includes('A checkbox cannot grant those rights.'));
assert(html.includes('have the rights required to use and adapt'));
assert(!/href="[^"]*archive\.org/i.test(html), 'No unverified commercial-file discovery links');
assert(html.includes('does not currently load arbitrary native carts'));
assert(html.includes(config.links.skills));
const loadLinks = [...html.matchAll(/<a href="([^"]+)"[^>]*\bdata-load[\s>]/g)].map(m => m[1]);
assert.equal(loadLinks.length, 3, 'Header, hero and setup need the same load action');
assert.deepEqual([...new Set(loadLinks)], [config.installation.url], 'Use one canonical installation destination');
assert(/^https:\/\//.test(config.installation.url));
if (config.installation.verified) {
  assert(config.installation.verifiedAt && config.installation.release && config.installation.releaseAvailable, 'Installer needs dated release evidence');
} else {
  assert(html.includes('Flashing is not available yet.'));
  assert(html.includes('Firmware downloads and flashing are disabled'));
}
const se = config.devices.find(d => d.id === 'se');
assert.equal(se.tilt, false, 'The SE has no onboard IMU');
assert(html.includes('Sound hardware'), 'Separate audio hardware from firmware testing');
assert(html.includes(config.affiliate.disclosure));
for (const item of [...config.devices, config.controller, ...config.accessories]) {
  if (item.purchaseUrl && item.affiliateVerified && config.affiliate.publishPaidLinks) {
    const url = item.purchaseUrl.replaceAll('&', '&amp;');
    assert(html.includes(`href="${url}"`));
    assert(html.includes('rel="sponsored noopener"'));
  }
}
let bytes = 0;
async function walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = resolve(dir, e.name);
    if (e.isDirectory()) await walk(p);
    else bytes += (await stat(p)).size;
  }
}
await walk(resolve(root, 'dist'));
assert(bytes < 850_000, `Static payload grew to ${bytes} bytes`);
console.log(`Checked anchors, assets, rights, disclosures, full game list and canonical loading link. Static files: ${Math.round(bytes/1024)} KiB.`);
