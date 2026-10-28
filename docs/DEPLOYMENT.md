# Deployment and verification

The website is deployed at [https://bitty.games](https://bitty.games). Its separate editable source is [ryangrams/bitty-website](https://github.com/ryangrams/bitty-website).

## Hosting

Cloudflare Worker: `bitty-website`.

Custom domains: `bitty.games` and `www.bitty.games`. The latter redirects to the apex while preserving the path and query. The Worker and assets run on Cloudflare. No local preview process is needed for production.

The domain was inspected before deployment. Existing Pages projects and Workers were preserved. No existing Bitty website or Worker custom domain was present. The zone was active and its publicly queried apex and `www` addresses had no website records. The OAuth session could inspect zone metadata and Worker routes, but DNS record listing returned 403. Wrangler’s custom-domain flow created the required website routing and managed certificates without an existing-record conflict.

The local checkout lives on Shades at `/Volumes/Shades 4TB/SUDev/bitty-website`. It is an independent Git repository. The firmware checkout and its uncommitted installer work were preserved.

## Completed checks

- Static build and content checks pass with no application dependencies.
- HTTPS returns 200 with certificate validation enabled.
- HTTP redirects to HTTPS.
- HTTPS `www` redirects to the apex, preserving a test path and query.
- Missing pages return the custom 404 with status 404.
- Authoritative Cloudflare DNS and public resolvers return the deployed addresses. DNS-over-HTTPS requests from the Mac Studio and TrashMac both return the public site with status 200. Some local DNS caches initially retained the earlier negative result.
- The ZeroTier preview was reachable from TrashMac.
- Desktop layout was visually inspected. Phone layouts at 390 pixels and 320 pixels have no horizontal overflow.
- The skip link moves focus to `main`. Tab moves between navigation links. Keyboard focus is visible with an amber outline. The interface uses native links and a native disclosure control.
- The hero and both concept images load, have dimensions and alternative text, and are visibly labeled as illustrations or concepts.
- Firmware, Issues, prefilled issue actions, manufacturer pages, Discord, GitHub Sponsors, Studio Upgrade and the rights reference were checked. GitHub sign-in preserves prefilled issue contents.
- All three Geniuslink destinations return the intended Amazon ASIN with the owner’s Associates tag. Public purchase buttons remain gated on the website-list setting described below.
- Security headers include CSP, HSTS, frame protection, MIME sniffing protection and restricted browser permissions. The website has no analytics script, cookie, form or client-side JavaScript.

## Remaining activation steps

### Amazon Associates website list

The account’s three affiliate links are ready:

| Item | Geniuslink | Verified Amazon ASIN | Bitty status |
| --- | --- | --- | --- |
| StickC-Plus SE | [Open link](https://geni.us/SUm5stickplusse) | B0HCYBPKJT | Support unverified. No onboard IMU. |
| StickS3 | [Open link](https://geni.us/SUm5sticks3) | B0GWHN8HK3 | Support unverified. Needs its own port. |
| IINE Mini Controller, Grey | [Open link](https://geni.us/SUiinegamebrick) | B0FLK6TP38 | Tested in H mode on the original Plus. |

The available Amazon browser session is not connected to the existing Associates account, so its approved website list could not be verified. The owner needs to sign into that existing account and verify or add `https://bitty.games`, preserving the other entries. Then set `affiliate.siteApproved` to `true` in `content/site.json` and redeploy. This reveals the verified purchase buttons, each labeled “Paid link,” with the disclosure beside them. No extra account is needed.

### Separate firmware release

The firmware source is now public at commit `f83f0cda458d3b0ab730b52d53191a932a4079e8`. Its GitHub Pages interface preview returns 200, while `release.json` reports `available: false` and `manifest.json` returns 404. No GitHub release is available. “Load your device” opens the GitHub project, and a secondary link opens the installer preview. Installation and firmware downloads remain disabled. The installation handoff is incomplete.

Once the separate firmware task publishes an installable device-specific release, follow [VERIFICATION.md](VERIFICATION.md). Check the actual public page, its device list, manifests and binary URLs before enabling the verified installation destination in `content/site.json`. Website publication does not establish a working USB installer.

GitHub Sponsors is already active with one-time support. The Discord invite and destination channels are verified. Neither requires owner activation for this website.

## Update or roll back

See the [repository README](../README.md) for build, deployment and rollback commands. Keep compatibility, links and game status in `content/site.json`. After edits, run the build and checks, commit and push the source, deploy, then verify the public domain again.
