# Deployment and verification

Live website: [bitty.games](https://bitty.games). Editable source: [ryangrams/bitty-website](https://github.com/ryangrams/bitty-website).

## Hosting and isolation

The dedicated Cloudflare Worker is `bitty-website`, with custom domains `bitty.games` and `www.bitty.games`. The latter redirects to the HTTPS apex, preserving path and query. Its asset directory and account identity are in `wrangler.jsonc`. The Worker’s small request handler is `scripts/worker.mjs`.

The independent checkout is `/Volumes/Shades 4TB/SUDev/bitty-website`. Firmware and installer development stay in their own repository and checkout. Website builds never read or modify the firmware checkout.

Before the initial deployment, Cloudflare projects, Worker routes, zone status and public DNS were inspected. The domain was active, with no associated website or Worker route and no publicly resolving website address. The authenticated session could read zone metadata but could not list DNS records. Cloudflare’s custom-domain flow provisioned routing and certificates without an existing-record conflict. Later website revisions reuse those routes and do not change DNS.

## Publish

```sh
npm run build
npm run check
npx wrangler@4.143.0 deploy
```

Use the existing authenticated Cloudflare account. If necessary, run `npx wrangler@4.143.0 login` locally. Credentials live outside the repository. No GitHub Actions secret is required.

Commit and push the editable source, deploy, then verify:

- Valid HTTPS returns 200 at `https://bitty.games/`.
- HTTP redirects to HTTPS. `www` redirects to the apex while preserving a test path and query.
- A missing path returns the custom 404 with status 404.
- Phone layouts have no horizontal overflow, show the hero image above the fold and preserve readable hardware information.
- The keyboard skip link, visible focus and expandable notes work.
- Every Load Bitty action reaches the same published GitHub loader. Its preview or release status matches the website.
- Creator guides, file guides, skills, Issues, Discord, GitHub Sponsors, manufacturer references and paid destinations resolve as expected.
- The published HTML and versioned stylesheet match the build. Security headers are present.

Cloudflare retains Worker versions. Use its dashboard or `npx wrangler@4.143.0 rollback` to restore one, then verify the public domain. Restoring Git source alone does not change the live website.

## Activation status

GitHub Sponsors is active with one-time support. The Discord invite and general channel are verified. The existing Amazon Associates account lists `bitty.games`, and the three verified Geniuslinks are enabled with paid-link disclosures. No separate coffee account or new affiliate account is needed.

The firmware loader remains an interface preview with flashing disabled. That is the remaining installation activation task, owned by the separate firmware project. Follow [VERIFICATION.md](VERIFICATION.md) before changing readiness or adding a board to the tested list. Website deployment does not prove a successful device installation.

USB-A accessories are linked as manufacturer-documented candidates. Dock fit and device data/power checks are pending. No new accessory affiliate destination was verified.

## Temporary output

`dist/` is reproducible build output, and `artifacts/` contains local publication checks and screenshots. Both are ignored. Remove `dist/` after a verified deployment to keep the checkout lean. Restore it with `npm run build`. Stop the temporary preview when the live site is ready. Production runs on Cloudflare and survives closing this chat.
