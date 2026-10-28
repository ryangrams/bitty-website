# Bitty website verification

Checked on 2026-10-28 at 05:45 UTC. This records what the website can claim today and what needs another check before a claim changes.

## Firmware evidence

The firmware project is [ryangrams/bitty](https://github.com/ryangrams/bitty). Its working checkout is `/Volumes/Shades 4TB/SUDev/m5-flappy`.

The audited local commit is `430326b53f325e8ae31077845d999e87a9fea11e` (`Correct Jetpack vehicle controls and bonus sequences`). The checkout also contains active, uncommitted USB library and installer development. Those drafts are separate from the committed firmware and from this website.

This was a read-only audit. It inspected the project's documentation, Git status, local installer draft and public GitHub endpoints. It did not change firmware files, build firmware, open a serial connection, flash hardware or run a new physical game test. Hardware results below are the firmware project's recorded results. No existing project graph was found.

## Hardware and controller claims

| Item | Website status | Evidence and limits |
| --- | --- | --- |
| Original M5StickC Plus | Tested device | ESP32-PICO-D4, 4 MiB flash, no PSRAM, 135 by 240 portrait display. `skills/m5stick-development/references/hardware.md:3` records this device. The local installer draft also limits its build to the original Plus. |
| Plus2, original StickC, Core and S3 boards | Additional testing and device builds needed | The hardware reference requires separate verification for Plus2, StickC and S3. The local installer draft also names Core as needing its own tested build. Build flags or automatic display detection do not establish support. |
| IINE Gamebrick Mini | Tested in H keyboard mode | Yellow indicator, advertised as `IINE-keyboard`. The firmware records pairing, reconnect after flashing, Tetris directional movement and both rotations, and Mario jump, run and combined running jump. `docs/CONTROLLERS.md:15-26,78`. |
| IINE C profiles and other controllers | Unverified | Advertised controller names do not establish compatibility. The firmware supports BLE HID and excludes Bluetooth Classic HID. `docs/CONTROLLERS.md:26,74,80`. |

The IINE's full playthroughs, power-cycle coverage, Tetris Up/Down/Hold and Mario title shortcuts still need physical checks. Say that H-mode controls have been tested. Avoid implying every profile or every game has completed controller testing.

Additional devices are planned. Publish new compatibility only after the firmware project supplies a device-specific build and recorded hardware verification. Keep dates out of that promise.

## Games and current status

These are local firmware capabilities. No public release was available at the audit time.

| Capability | Recorded state | Evidence |
| --- | --- | --- |
| Flappy modes and procedural themes | Implemented locally. Original artwork requires user-supplied files. The source includes project-created themes. | `README.md:3-5` and its Flappy Bird modes section. |
| NES cartridge support | Implemented for compatible user-supplied cartridges. Individual games have format, mapper and control limits. | `docs/NES.md` and `README.md:86`. |
| Tetris adapters | Implemented using prepared user-supplied cartridges. Some controls and layouts still need physical checks. | `README.md:94-100,162` and `docs/TETRIS.md`. |
| Geometry / Famidash adapter | Implemented with a supported user-supplied Famidash cartridge. | `README.md:88,164` and `docs/GEOMETRY_DASH.md`. |
| Galaga and Arkanoid adaptations | Native code with original graphics and generated layouts. Automated hardware timing probes exist. Physical tilt feel, sound and controller play remain unverified. | `docs/TILT_ARCADE.md:3,34` and `README.md:149`. |
| Jetpack adaptation | Native code and original art. Requires no ROM for its project-created presentation. Fidelity work and hardware checks remain in progress. | `docs/JETPACK.md:3-7`, `docs/JETPACK_AUDIT.md` and `README.md:151-162`. |
| Two-device Flappy and Tetris links | Experimental. Complete two-device radio playthroughs remain untested. | `docs/COOP.md`, `docs/TETRIS.md` and `README.md:162`. |
| New original game proposals | Concepts until code exists and the firmware project verifies implementation. | Website concepts are proposals, not evidence of shipped games. |

Use development labels for the existing firmware work. Keep both new original proposals labeled **Concept** until implemented. Screenshots, generated artwork and mockups must say what they depict. A drawing of a concept on a device cannot establish that the game runs there.

## Published installer blocker

The public [firmware repository API](https://api.github.com/repos/ryangrams/bitty) reported `size: 0`, `has_pages: false` and default branch `main`. Its [branches](https://api.github.com/repos/ryangrams/bitty/branches) and [releases](https://api.github.com/repos/ryangrams/bitty/releases) returned empty arrays. Fetching the README returned GitHub's empty-repository error.

The expected GitHub Pages address, `https://ryangrams.github.io/bitty/`, returned HTTP 404. It is a checked candidate address, not a working installation destination.

The local `web/index.html` references `app.mjs`, which was absent. The directory contained `config.mjs`, `index.html`, `protocol.mjs` and `style.css`. No published manifest or release binary was available to inspect. The firmware project's current work log also describes this installer as unfinished.

The **Load your device** link can currently lead to the firmware repository with a nearby explanation that the browser installer is in progress. Do not label the installation handoff verified or say visitors can install from that page yet.

## GitHub Issues

GitHub Issues is enabled on the firmware repository: `has_issues: true`. Its [issue list](https://github.com/ryangrams/bitty/issues) returned HTTP 200 and the issues API returned an empty array. Opening the [new issue URL](https://github.com/ryangrams/bitty/issues/new) without authentication led to GitHub's sign-in page with the correct repository destination preserved.

Use the generic new issue URL for actionable bugs, game requests and port requests. No issue-template file was available in the empty repository, so a template-specific URL is unverified. Keep discussion in Discord. Ask for device model, behavior, logs and lawful references. Never request commercial game files.

## Updating the website configuration

Keep installation links, verification state, supported devices, controller modes and game status in the website's editable configuration. Keep the repository URL as the current installation fallback. Record the checked date and firmware evidence commit with each future status update.

Before changing the installation link to a working installer or marking the handoff complete:

1. Confirm that the firmware repository contains the public source and installation documentation. Record its published commit and release tag.
2. Obtain the installation destination from that project's published documentation. Open it over HTTPS and confirm its actual contents. Check every redirect.
3. Inspect the published manifest and every referenced artifact. Confirm successful responses, the intended original M5StickC Plus target, correct flash layout, matching release version and recorded artifact hashes. Review the release's distribution checks for imported assets and private files.
4. Check that browser requirements, data-cable requirements, model selection, firmware replacement and recovery instructions agree with the release. Confirm that downloads require no star or payment.
5. Have the firmware project verify the published installation path on the original M5StickC Plus, including a working boot and the documented recovery path. Record the tested release and outcome. A local build or passing HTTP response is insufficient evidence for this step.
6. Check that any game-library flow keeps user files local and explains its actual supported formats and adapters. Keep the rights statement accurate and never describe a checkbox as granting permission.
7. Update the central configuration with the verified URL, date, release and hardware scope. Rebuild the public website, then follow **Load your device** from the deployed site and repeat the important link checks.

For a new device, record the exact model, chip, flash size, release/build target and physical test scope before adding it to the tested list. For a new controller, record its exact mode as well as the model. For a game, move its status only as far as the implementation and verification evidence supports.

This document covers firmware and installation evidence. Discord destinations, affiliate links, support activation, rights sources and deployment verification need their own current checks.
