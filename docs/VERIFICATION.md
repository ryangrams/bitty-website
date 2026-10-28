# Bitty website verification

Checked October 28, 2026. This is the evidence for the public website’s status labels. Firmware work is owned by the separate Codex conversation **Flappy M5** and checkout `/Volumes/Shades 4TB/SUDev/m5-flappy`. This website task has not edited that checkout or flashed a device.

## Installation handoff

Every **Load Bitty** button opens the same [GitHub loader](https://ryangrams.github.io/bitty/). The public page and application module return 200. At the initial audit, its `release.json` reported `available: false` and version `preview-46389a4c`. Its actual expected manifest, `/bitty/firmware/manifest.json`, returned 404, and GitHub releases were empty. The app exits before enabling installation when the release is unavailable.

The public site therefore labels the destination **USB loader preview** and states that flashing and firmware downloads are disabled. The three steps describe the intended flow once a release is enabled. The handoff is not complete until a real published release is installed and recovered on the exact supported hardware.

[ESP Web Tools](https://esphome.github.io/esp-web-tools/) currently documents desktop Firefox, Chrome and Edge, using Web Serial over HTTPS. iOS is unsupported and Android installation support is not implemented there. The site recommends starting with desktop Chrome or Edge, and retains the loader’s actual capability check. Bitty has no completed browser and OS installation matrix. A data cable is required. A USB serial driver may be needed for the board and OS, as documented by [M5Stack](https://docs.m5stack.com/en/core/StickC-Plus). Avoid promising that no setup is ever needed.

Before changing `installation.verified`:

1. Record the public firmware commit, release tag, manifest, board list and artifact hashes.
2. Fetch the actual manifest and all referenced binaries with valid HTTPS.
3. Obtain a physical receipt for fresh installation, boot, runtime transfer and recovery on the exact board. A compiling build or successful HTTP response is insufficient.
4. Verify file formats, browser guidance, driver caveats, removal and interrupted-transfer behavior against the published instructions.
5. Set `verified`, `verifiedAt`, `release` and `releaseAvailable` in `content/site.json`, update its status and steps, then rebuild, check and follow the deployed website’s button again.

## Firmware facts

The initial source audit covered public `main` at `46389a4c885b7b5d8061805680e974029a5cf0d5`. The separate firmware task then published the shared clock homes and authoring guides in commit `d16bd145bc4adf6d9310187749709ea1c768906d`. Cross-chat coordination confirmed the canonical loader, current source game list, required user files, missing release checks and authoring documentation plan.

| Item | Public label and limit |
| --- | --- |
| Original M5StickC Plus | Tested in firmware. New browser partition layout and loading still need verification. Onboard IMU and passive buzzer. |
| StickC-Plus SE | Testing pending. No separately verified Bitty target. No onboard IMU. Passive buzzer. |
| M5StickS3 | Separate build compiles. Physical input, sound, Bluetooth and timing checks pending. Onboard IMU and speaker. |
| IINE Gamebrick Mini, Grey | H keyboard mode, yellow indicator. Pairing, reconnect, Tetris directions/rotation and Mario run/jump combinations recorded on the original Plus. Other modes and complete playthroughs remain unverified. |

Sources: firmware `docs/CONTROLLERS.md`, `docs/STICKS3_AUDIO.md`, `docs/RELEASE_STATUS.md`, plus the manufacturer links in `content/site.json`. Sound hardware does not establish audible Bitty output. No listening test was performed by this website task.

| Game or adapter | File requirements and controls |
| --- | --- |
| Flappy | Authored public starter art. No extra game files. M5 or controller A flaps. |
| Galaga | Native adaptation with project graphics. No extra game files. Tilt moves, M5 fires. Physical game testing pending. |
| Arkanoid | Native adaptation with project graphics. No extra game files. Tilt moves the paddle, M5 launches and fires when Laser is active. |
| Bitty Jet | Native jetpack prototype, renamed from the Jetpack Joyride reference. No extra game files. Hold M5 or controller A/B to climb, release to fall. Release and rights review remain separate from the rename. |
| Mario / NES | Supported user-supplied NTSC NES cartridges, subject to mapper, format and control limits. |
| Tetris | Supported prepared user-supplied cartridges and adapters. |
| Geometry Dash / Famidash | Supported prepared user-supplied Famidash payload. |

Sources: `README.md`, `docs/NES.md`, `docs/TETRIS.md`, `docs/GEOMETRY_DASH.md`, `docs/TILT_ARCADE.md`, `docs/JETPACK.md` and `THIRD_PARTY_NOTICES.md`. Project-made source art and code are recorded provenance, not an overall legal clearance opinion.

Flappy and Mario clock modes existed at the initial audit. USB power keeps the device awake, while battery inactivity sleep applies. All seven shared clock homes are now implemented in the public source at `d16bd14`, with host tests and Plus/S3 build checks reported by the firmware task. Their new device flash is pending because its MacBook host is unreachable. The site labels the new clock homes as awaiting device testing. See [GAME_HOMES.md](https://github.com/ryangrams/bitty/blob/main/docs/GAME_HOMES.md) for controls: M5 starts play, left cycles games and holding right opens the menu. Two-device Flappy and Tetris modes exist in source but full physical playthroughs remain pending. Controller mode and device linking share Bluetooth and disconnect each other. Do not imply simultaneous controller and linked-device operation.

## Original projects and files

The tilt racer and one-button runner are original concepts in development. Hockey Queen is Ryan’s original asymmetric air-hockey game, with an iPhone App Store release planned and a Bitty adaptation in development. Its title artwork is original project art, not a Bitty screenshot. Controller mounts and a cable-routing desk dock are planned STL projects, with no download or date promised.

The public [skills directory](https://github.com/ryangrams/bitty/tree/main/skills) contains `content-to-github`, `m5stick-development` and `m5stick-game-fidelity`. The separate firmware task published [AGENT_QUICKSTART.md](https://github.com/ryangrams/bitty/blob/main/docs/AGENT_QUICKSTART.md) and [CREATING_GAMES.md](https://github.com/ryangrams/bitty/blob/main/docs/CREATING_GAMES.md) at `d16bd14`. Both raw public files returned 200 and their instructions were reviewed. The current firmware menu uses **Bitty Jet** as its display name. The loader footer now names Ryan Grams as maker.

Native games currently need compilation into firmware. Runtime user-file loading supports documented NES/adapted formats. Arbitrary native plug-ins are not supported. Creator instructions ask people to host their own original or properly licensed code and files, then submit a GitHub Issue containing the repository URL and licensing details for review. The website hosts no community cart files.

## Rights, community and purchases

See [RIGHTS-AND-LINKS.md](RIGHTS-AND-LINKS.md) for current Copyright Office, Halfbrick, Amazon and FTC sources. See [COMMUNITY.md](COMMUNITY.md) for the verified Discord invite and general channel. Generic commercial ROM/APK searches are not linked. Stars, payment and Discord membership are optional.

The three supplied Geniuslinks remain active, with the exact verified ASINs and Associates tag. Associates lists `bitty.games`. Each paid link has a nearby **Paid link** label and the required Amazon sentence appears with the kit. The adapter links are manufacturer references, with connector orientation and testing limits stated. They are not newly created affiliate links.

## Website checks

Run `npm run build` and `npm run check`. The checks cover anchors, static assets, image dimensions and alt text, the complete configured game list, one canonical loader destination, preview status, rights wording, affiliate links, disclosure and prose. The deployed payload stays below 850 KB, including the social-preview JPEG and font licenses. There is no client-side JavaScript, data collection, form or database.

Verify phone layouts at 390 by 844 and 320 by 740, including the hero image above the fold, no horizontal overflow and the full hardware table. Test keyboard focus, skip link and native disclosure controls. Recheck HTTPS, redirects, 404 behavior and important links after each deployment. Save publication evidence in ignored `artifacts/`.

### Published revision receipt

Website source `f9ff8f3` was deployed on October 28, 2026 as Cloudflare Worker version `6ead8e24-498d-48c0-b6bd-f0907cb9308e`. HTTPS returned 200 from the Mac Studio and TrashMac. The published HTML, versioned CSS, hero WebP and Hockey Queen WebP matched the local build byte for byte. HTTP and `www` returned 301 redirects, preserving the test query. The missing-page check returned 404. CSP, HSTS and the other configured security headers were present, with no `Set-Cookie` header.

All 25 important configured destinations passed HTTP checks after the two creator guides and clock guide were published. The three Geniuslinks reached the intended ASINs with `ryangrams-20`. The unavailable Delock references were excluded. New source guides were read and their exact public GitHub pages returned 200.

The live browser displayed seven game entries and three Load Bitty links, all pointing to the canonical loader. At 390 by 844, the hero image ran from y=295 to y=528. At 320 by 740, its bottom was y=546. Neither layout had horizontal page overflow, and the hardware table fit the phone width. Original Hockey Queen art loaded correctly. The skip link focused `main`. Native disclosure controls opened with Enter and showed a 3-pixel amber keyboard outline.

Following Load Bitty from the published website reached the actual GitHub Pages interface. Its **Hardware verification pending** button was disabled. Installation remains unverified. The new source clocks and authoring documentation do not change that status. The live website remains open as the task’s browser deliverable.

Screenshots and HTTP evidence are in ignored `artifacts/`, including `bitty-published-v3-mobile.png`, `bitty-published-v3-desktop.png`, `published-v3.html` and `link-audit.json`. The static build is approximately 709 KiB including the social image and license files. Browser layout overrides were reset after checks.
