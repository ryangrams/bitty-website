# Bitty website

The public website for [Bitty](https://bitty.games), Ryan Grams’s tiny games and apps side project.

This repository contains the website. Firmware and USB installation development live separately at [ryangrams/bitty](https://github.com/ryangrams/bitty). The active firmware checkout is preserved separately. Website builds never read, copy or modify its game files.

## Edit the site

Use Node.js 22 or later and Python 3 for the optional local preview. There are no application dependencies to install.

```sh
npm run build
npm run check
```

Edit `content/site.json` for external links, hardware compatibility, controller details, game status, original game concepts and installation status. Edit `scripts/build.mjs` for page structure and the remaining copy. Edit `style.css` for layout, type and color.

The generated `dist/` directory is ignored by Git. Build it again with `npm run build`. Each build replaces only that directory. The generated `dist/` was removed after the verified deployment to keep the checkout lean. Restore it with `npm run build`.

## Preview

```sh
npm run build
python3 scripts/preview.py --bind 127.0.0.1 --port 4178
```

For a remote review, discover the host’s current ZeroTier interface and pass its explicit private address to `--bind`. Verify the URL from another peer before sharing it. The temporary preview can stop when the production deployment is ready.

## Deploy

Hosting uses a dedicated Cloudflare Worker named `bitty-website`, with static assets. Its small request handler redirects `www.bitty.games` to `https://bitty.games` and serves the static files. Custom domains, account identity and build directory are tracked in `wrangler.jsonc`.

Use the existing Cloudflare account with access to the `bitty.games` zone. Sign in locally if needed:

```sh
npx wrangler@4.143.0 login
npm run deploy
```

Wrangler handles credentials outside this repository. Never commit tokens, OAuth configuration, account exports or `.env` files. Deployment requires Worker, static asset and custom-domain access. No GitHub Actions secret has been created.

Before changing domains, inspect existing Cloudflare Workers, Pages projects, custom domains and DNS. The initial inspection found an active `bitty.games` zone, no associated website or Worker route, and no publicly resolving apex or `www` address. The existing OAuth credential could read zone metadata and Worker routes but could not list DNS records. Cloudflare’s custom-domain deployment provisioned the website addresses and certificate without replacing an existing website.

After deploying, verify:

- `https://bitty.games/` returns the site over valid HTTPS.
- `https://www.bitty.games/` redirects to the apex, preserving the path and query.
- A missing path returns the custom 404 page with status 404.
- The site works at phone widths, with visible keyboard focus and a working skip link.
- Installation, community, contribution, support and purchase links still resolve to their intended destinations.

Cloudflare keeps deployed Worker versions. Use its dashboard or `npx wrangler@4.143.0 rollback` to restore a previous version, then verify the public domain again. Restoring source alone does not change the deployed version.

## Installation handoff

The source and GitHub Pages installer preview are public. The preview reports `available: false`, with installation and firmware downloads disabled pending a physical USB check. `installation.verified` stays `false`. “Load your device” links to the firmware project, and a separate link opens the clearly labeled installer preview.

After the separate firmware work is published, follow [the activation criteria](docs/VERIFICATION.md). Verify the actual public installer, its device list, release manifest and firmware assets. Then set its exact URL, `verified: true`, `verifiedAt` and `release` in `content/site.json`, update the surrounding status text, and redeploy. A successful website deployment does not establish that the installer works.

## Hardware and paid links

The original M5StickC Plus is the tested device. SE, Plus2, original StickC and S3 devices have separate hardware and need their own verified builds. A separate StickS3 build now compiles, with physical checks still pending. The SE has no onboard IMU. The IINE Gamebrick Mini is tested in H mode only. Status changes need evidence from the firmware project.

Purchase buttons require a verified Geniuslink destination and an approved affiliate site setting in `content/site.json`. Put “Paid link” beside each enabled purchase button. Preserve the disclosure beside the hardware section:

> As an Amazon Associate I earn from qualifying purchases.

The owner should confirm `bitty.games` is listed in Amazon Associates’ websites. See [rights and link evidence](docs/RIGHTS-AND-LINKS.md) for current primary sources. Do not add product prices or broader compatibility claims without checking them.

GitHub Sponsors is already active, including one-time coffee support. No separate Buy Me a Coffee account or Sponsors activation is needed. Downloads and participation stay independent of stars and payment.

## Community and game files

The verified Studio Upgrade Discord invite lands in its rules channel. General discussion belongs in its general channel. Actionable bugs and device-port requests go to GitHub Issues. See [community destinations](docs/COMMUNITY.md).

Never invite visitors to upload commercial game files. Users need legitimate copies and the rights required to use and adapt the files they load. Ownership of a copy and ownership of copyright are separate. Preserve the rights explanation and its primary-source link.

## Assets and privacy

Original concept artwork is included in `assets/illustrations`. The revised hero uses the user’s Plus SE photo as a hardware reference and shows generated Galaga and Flappy Bird screen mockups. It is labeled as illustrative, with the reference shell separated from tested firmware compatibility. The two proposed game scenes are original SVG concept art. None of these images are photographs of a running firmware build. Replace them with approved real photography when available. Keep image dimensions, alternative text and honest labels.

The original hero PNG is retained as a source asset. The build publishes a compressed WebP and JPEG for the page and social previews. Self-hosted Archivo, Inter Tight and JetBrains Mono have their OFL license files beside them. See [asset provenance](docs/ASSETS.md).

The site runs without client-side JavaScript, analytics scripts, cookies, forms or a database. External services apply their own policies. HTTP security headers are generated in `dist/_headers`. USB permissions are disabled on this public website. Installation belongs on the separate verified installation page.
