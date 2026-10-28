import { readFile, writeFile, mkdir, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createHash } from 'node:crypto';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(await readFile(resolve(root, 'content/site.json'), 'utf8'));
const { site, links, installation, devices, controller, concepts, games, affiliate, community } = config;
const cssVersion = createHash('sha256').update(await readFile(resolve(root, 'style.css'))).digest('hex').slice(0, 12);
const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const arrow = '<span aria-hidden="true">↗</span>';
const link = (url, label, cls = '', extra = '') => `<a href="${esc(url)}" class="${cls}" ${extra}>${label}</a>`;
const issue = (title, body) => `${links.newIssue}?${new URLSearchParams({ title, body })}`;
const loadUrl = installation.verified ? installation.url : links.firmware;
const button = (url, label, cls = 'button') => link(url, `${label} ${arrow}`, cls);
const paidLink = (item) => item.purchaseUrl && item.affiliateVerified && affiliate.publishPaidLinks
  ? `<div class="purchase">${link(item.purchaseUrl, `See it on Amazon ${arrow}`, 'text-link', 'rel="sponsored noopener"')}<span class="paid-label">Paid link</span></div>`
  : '';
const deviceIcon = (state) => `<svg class="device-icon ${state}" viewBox="0 0 90 130" aria-hidden="true"><rect x="18" y="8" width="54" height="108" rx="8" fill="currentColor"/><rect x="24" y="16" width="42" height="66" rx="3" fill="#101116"/><path d="M36 53h7V39h7v8h7V31h5" fill="none" stroke="#9B7CFF" stroke-width="4"/><rect x="29" y="89" width="32" height="17" rx="3" fill="#101116"/><path d="M36 113v9h18v-9" fill="#767B85"/></svg>`;
const logo = `<span class="logo-mark" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></span><span>bitty<span class="logo-dot">.</span></span>`;
const page = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="theme-color" content="#101116"><meta name="color-scheme" content="dark">
<title>Bitty · Tiny games. Small hardware.</title>
<meta name="description" content="${esc(site.description)}">
<link rel="canonical" href="${site.origin}/"><link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta property="og:type" content="website"><meta property="og:title" content="Bitty · Tiny games. Small hardware.">
<meta property="og:description" content="${esc(site.description)}"><meta property="og:url" content="${site.origin}/">
<meta property="og:image" content="${site.origin}/assets/illustrations/${site.hero.socialImage}"><meta property="og:image:alt" content="Illustrative M5Stick mockups showing Galaga and Flappy Bird.">
<meta name="twitter:card" content="summary_large_image">
<link rel="preload" href="/assets/fonts/archivo.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/style.css?v=${cssVersion}">
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header wrap">
  <a class="logo" href="/" aria-label="Bitty home">${logo}</a>
  <nav aria-label="Main navigation"><a href="#hardware">Hardware</a><a href="#games">Games</a><a href="#community">Community</a></nav>
  ${button(loadUrl, 'Load your device', 'button button-small button-outline')}
</header>
<main id="main" tabindex="-1">
<section class="hero wrap" aria-labelledby="hero-title">
  <div class="hero-copy"><p class="eyebrow"><span class="pixel-dot"></span> A side project by Ryan Grams</p>
    <h1 id="hero-title">We definitely<br>got <span>caught.</span></h1>
    <p class="story">${esc(site.story)}</p>
    <p class="hero-description">${esc(site.intro)}</p>
    <div class="actions">${button(loadUrl, 'Load your device')}${link('#games', 'See what’s cooking <span aria-hidden="true">↓</span>', 'quiet-link')}</div>
    <p class="handoff-note"><span class="status-dot"></span>${esc(installation.status)}. <a href="#load">Check the current status.</a></p>
  </div>
  <figure class="hero-art"><img src="/assets/illustrations/${site.hero.image}" width="1536" height="1024" alt="${esc(site.hero.alt)}" fetchpriority="high"><figcaption><span>${esc(site.hero.caption)}</span><span>${esc(site.hero.label)}</span></figcaption><p class="mockup-note">${esc(site.hero.note)}</p></figure>
</section>
<div class="project-strip"><div class="wrap strip-inner"><span><i class="square violet"></i> Tiny screens</span><span><i class="square amber"></i> Buttons + tilt</span><span><i class="square orange"></i> Built in the open</span><a href="#contribute">Original game makers wanted ${arrow}</a></div></div>

<section class="approach wrap" aria-labelledby="approach-title"><div><p class="eyebrow">Small hardware. Familiar games.</p><h2 id="approach-title">${esc(site.approachHeading)}</h2><p>${esc(site.approachText)}</p></div><aside class="budget" aria-label="Hardware budget"><p class="eyebrow">The hardware budget</p><p class="budget-value">${esc(site.budget.amount)}</p><p>${esc(site.budget.note)}</p></aside></section>

<section class="section wrap hardware" id="hardware" aria-labelledby="hardware-title">
  <div class="section-heading"><div><p class="eyebrow">01 / The little hardware</p><h2 id="hardware-title">Check the model.<br>They’re different little beasts.</h2></div><p>I started with the original M5StickC Plus. More devices are planned as I port and test them. There’s no release schedule, and a similar name doesn’t mean the same firmware will work.</p></div>
  <div class="device-grid">${devices.map(d => `<article class="device-card"><div class="device-top">${deviceIcon(d.state)}<span class="badge ${d.state}">${esc(d.status)}</span></div><p class="spec">${esc(d.model)}</p><h3>${esc(d.name)}</h3><p>${esc(d.description)}</p>${link(d.source, `Manufacturer details ${arrow}`, 'text-link')}${d.state === 'tested' ? '' : paidLink(d)}</article>`).join('')}</div>
  <p class="hardware-note">Original StickC, Plus2, Core and other M5Stack devices also need separate verification. Buy a device for Bitty only when its own tested build is available.</p>
  <article class="controller"><div class="controller-art" aria-hidden="true"><svg viewBox="0 0 250 150"><rect x="20" y="32" width="210" height="96" rx="16" fill="#B9BCC4"/><rect x="27" y="39" width="196" height="76" rx="10" fill="#2E2F38"/><path d="M72 56h18v16h16v18H90v16H72V90H56V72h16z" fill="#101116"/><rect x="165" y="44" width="34" height="30" rx="7" fill="#767B85"/><rect x="165" y="78" width="34" height="30" rx="7" fill="#767B85"/><circle cx="182" cy="59" r="10" fill="#D6483B"/><circle cx="182" cy="93" r="10" fill="#D6483B"/><path d="M48 120h153" stroke="#767B85" stroke-width="4" stroke-dasharray="2 3"/><path d="M20 73h8v22h-8" fill="#101116"/></svg><span>Controller illustration</span></div><div><p class="eyebrow">The controller I’ve tested</p><h3>${esc(controller.headline)}</h3><p class="controller-story">${esc(controller.story)}</p><p class="controller-model">${esc(controller.name)}</p><p>${esc(controller.description)}</p><p class="spec">BLE HID · H mode · Yellow indicator</p>${paidLink(controller)}</div></article>
  <div class="affiliate-note"><p>${affiliate.publishPaidLinks ? 'Purchasing through my paid links is a great way to support this side project. I earn a commission from qualifying purchases. Check the compatibility label beside each device first.' : 'I’m preparing hardware links as another way to support this side project. Check the manufacturer’s model details above before choosing a device.'}</p><p>${esc(affiliate.disclosure)}</p></div>
</section>

<section class="section games-section" id="games" aria-labelledby="games-title"><div class="wrap">
  <div class="section-heading"><div><p class="eyebrow">02 / On the workbench</p><h2 id="games-title">Some of our favorites,<br>ported to a tiny screen.</h2></div><p>We’ve been porting games we love and figuring out how they should feel with tilt, a few buttons or a tiny controller. These are real firmware projects. Release prep and testing are still underway.</p></div>
  <div class="workbench">${games.map((g,i) => `<article><span class="workbench-number" aria-hidden="true">0${i+1}</span><span class="badge">${esc(g.status)}</span><h3>${esc(g.name)}</h3><p>${esc(g.description)}</p></article>`).join('')}</div>
  <p class="release-note">The source is public on GitHub. The installer preview is live, with firmware downloads disabled until the first physical USB load is verified. The hero screens are illustrative mockups. Public starter artwork differs.</p>
  <div class="concept-heading"><p class="eyebrow">Two original game ideas</p><h3>I have a couple of bad influences.</h3><p>Both are concepts. The art below is a mockup. Neither game is implemented.</p></div>
  <div class="concept-grid">${concepts.map((g,i) => `<article class="concept-card"><div class="concept-image"><img src="${g.image}" width="640" height="400" loading="lazy" alt="${esc(g.alt)}"><span class="badge concept">Concept / not implemented</span></div><div class="concept-copy"><p class="eyebrow">${esc(g.type)}</p><h3>${esc(g.name)}</h3><p>${esc(g.description)}</p><dl><dt>How you’d play</dt><dd>${esc(g.controls)}</dd><dt>Why I want to make it</dt><dd>${esc(g.appeal)}</dd></dl>${link(issue(`Game concept: ${g.name}`, `I’d like to help with ${g.name}.\n\nWhat I can contribute:\n\nPlease share only code and assets you have the rights to contribute.`), `Help make ${esc(g.name)} ${arrow}`, 'text-link')}</div></article>`).join('')}</div>
  <div class="rights" id="game-files"><h3>Bring files you have the right to use.</h3><p>You must own a legitimate copy and have the rights required to use and adapt any game files you load. Owning a copy of Mario or Tetris does not automatically grant those rights. A checkbox cannot grant them either.</p><p>Bitty does not supply commercial ROMs, APKs, or a commercial game’s original artwork or music. Please keep commercial game files out of GitHub and Discord. Those names are examples of rights questions, not a promise of compatibility.</p>${link(links.copyright, `Read the U.S. Copyright Office’s guidance ${arrow}`, 'text-link')}</div>
</div></section>

<section class="section wrap load-section" id="load" aria-labelledby="load-title"><div><p class="eyebrow">03 / Ready when the firmware is</p><h2 id="load-title">Loading starts<br>on GitHub.</h2><p>The public website will send you to the installation experience maintained with the firmware. Device-specific builds and instructions belong together.</p></div><div class="load-panel"><span class="badge planned">${esc(installation.status)}</span><h3>Check before you flash.</h3><p>${esc(installation.note)}</p>${button(loadUrl, 'Load your device')}${installation.previewUrl ? link(installation.previewUrl, `See the installer preview ${arrow}`, 'text-link preview-link') : ''}<p class="small">Opens ${installation.verified ? 'the verified GitHub installation experience' : 'the Bitty GitHub project'}. ${installation.verified ? '' : 'Installation is not available yet.'}</p><p class="small">Downloads and participation never require a star or payment.</p></div></section>

<section class="section community-section" id="community" aria-labelledby="community-title"><div class="wrap community-grid"><div><p class="eyebrow">04 / Come build something</p><h2 id="community-title">You’ll fit in<br>with the gizmo people.</h2><p>I’m bringing Bitty into the Studio Upgrade Discord, alongside people building studio controllers, record-player gadgets and other useful or ridiculous gizmos.</p><p>Bring your tiny-screen ideas, your weird hardware and the thing you got half working. We can work with half.</p><div class="actions">${button(links.discord, 'Join the Discord')}${community.channelUrl ? link(community.channelUrl, `${esc(community.discussionChannel)} ${arrow}`, 'text-link') : ''}</div><p class="small">Discussion in Discord. Bugs and device-port requests in GitHub Issues. Please share descriptions and original work, never commercial game files.</p></div><div class="contribute" id="contribute"><span class="pixel-cross" aria-hidden="true">✚</span><h3>Original game makers wanted.</h3><p>I’m looking for games built around tiny screens, a few buttons and tilt controls. If those limits sound fun, pull up a chair.</p><ul><li><strong>Code + ports.</strong> Help a new device earn a tested build.</li><li><strong>Original games.</strong> Bring mechanics, art or sound you have the rights to share.</li><li><strong>Testing + docs.</strong> Try a build, describe what broke, make the next person’s setup easier.</li><li><strong>Design.</strong> Make the small screen read clearly and feel good.</li></ul>${button(links.issues, 'Find a way to contribute', 'button button-outline')}${link(issue('Game or app idea: ', 'My game or app idea:\n\nHow it could work on a tiny screen:\n\nButtons or tilt controls:\n\nI am describing the idea without uploading commercial game files.'), `Request a game or app ${arrow}`, 'text-link')}${link(issue('Bug or device port: ', 'Device model:\n\nBuild/version:\n\nWhat I expected:\n\nWhat happened:\n\nSteps to reproduce or details of the proposed port:\n\nPlease do not attach commercial game files.'), `Report a bug or request a port ${arrow}`, 'text-link')}</div></div></section>

<section class="section wrap support-section" id="support" aria-labelledby="support-title"><div><p class="eyebrow">05 / Fuel the side project</p><h2 id="support-title">Coffee helps.</h2><p>If you like where this is going, you can support the experiments through GitHub Sponsors. There’s a one-time option if you’d like to buy the next coffee.</p><div class="support-actions">${button(links.coffee, 'Buy me a coffee', 'button button-amber')}<span>via GitHub Sponsors<br><small>One-time support available</small></span></div><p class="small">Everything here is open to you either way. ${link(links.firmware, `Star Bitty on GitHub ${arrow}`, 'inline-link')} if you’d like to keep an eye on it.</p></div><div class="support-pixels" aria-hidden="true"><svg viewBox="0 0 200 180"><path d="M55 30v-15h15v15zm40-15V0h15v15zM135 30V15h15v15z" fill="#9B7CFF"/><path d="M40 55h110v80H55v-15H40z" fill="#E8A33D"/><path d="M150 65h30v45h-30" stroke="#E8A33D" stroke-width="15" fill="none"/><path d="M25 150h140v15H25z" fill="#B87A2B"/><path d="M55 70h15v45H55z" fill="#101116" opacity=".18"/></svg></div></section>
</main>
<footer class="wrap site-footer"><div><a class="logo" href="/" aria-label="Bitty home">${logo}</a><p>A growing side project by Ryan Grams.</p></div><nav aria-label="Footer navigation">${link(links.firmware, `GitHub ${arrow}`)}${link(links.websiteSource, `Website source ${arrow}`)}${link(links.studio, `Studio Upgrade ${arrow}`)}<a href="#privacy">Privacy</a></nav><details id="privacy"><summary>A small note about this site</summary><p>This site uses no analytics scripts and sets no cookies. GitHub, Discord, Geniuslink and stores have their own privacy policies. Hosting is provided by Cloudflare. Hardware and release status last checked ${site.checked}.</p></details><p class="footer-bottom">Built for small screens. The website too.</p></footer>
</body></html>`;

await rm(resolve(root, 'dist'), { recursive: true, force: true });
await mkdir(resolve(root, 'dist/assets/illustrations'), { recursive: true });
await cp(resolve(root, 'assets/fonts'), resolve(root, 'dist/assets/fonts'), { recursive: true });
for (const file of [site.hero.image, site.hero.socialImage, 'lights-out.svg', 'patch-panic.svg']) {
  await cp(resolve(root, 'assets/illustrations', file), resolve(root, 'dist/assets/illustrations', file));
}
await cp(resolve(root, 'style.css'), resolve(root, 'dist/style.css'));
await writeFile(resolve(root, 'dist/index.html'), page);
await writeFile(resolve(root, 'dist/404.html'), '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page missing · Bitty</title><link rel="stylesheet" href="/style.css"><main class="wrap section"><h1>This bit is missing.</h1><p>The page may have moved.</p><a class="button" href="/">Back to Bitty</a></main></html>');
await writeFile(resolve(root, 'dist/favicon.svg'), '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#101116"/><path d="M8 5h6v8h8v5h-8v6h8v-6h5v11H8z" fill="#9B7CFF"/></svg>');
await writeFile(resolve(root, 'dist/robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${site.origin}/sitemap.xml\n`);
await writeFile(resolve(root, 'dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${site.origin}/</loc><lastmod>${site.checked}</lastmod></url></urlset>`);
await writeFile(resolve(root, 'dist/_headers'), `/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: DENY\n  Permissions-Policy: camera=(), microphone=(), geolocation=(), usb=()\n  Content-Security-Policy: default-src 'none'; img-src 'self'; style-src 'self'; font-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'\n  Strict-Transport-Security: max-age=31536000\n/assets/*\n  Cache-Control: public, max-age=86400\n/style.css\n  Cache-Control: public, max-age=3600\n`);
console.log('Built static site in dist/ from content/site.json.');
