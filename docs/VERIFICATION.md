# Bitty website verification

Refreshed on 2026-10-28 at 12:27 UTC. This records what the website can claim today and what needs another check before a claim changes.

## Firmware evidence

The firmware project is [ryangrams/bitty](https://github.com/ryangrams/bitty). Its working checkout is `/Volumes/Shades 4TB/SUDev/m5-flappy`.

The audited local commit and public `main` both point to `f83f0cda458d3b0ab730b52d53191a932a4079e8` (`Add StickS3 builds and shared speaker audio`). The local checkout was clean. The firmware source, USB manager and engineering documentation are now public. The installer remains a development preview with firmware downloads disabled.

This was a read-only audit. It inspected the project's documentation, relevant input and rendering code, Git status, local renderer previews and published GitHub Pages content. It did not change firmware files, build firmware, open a serial connection, flash hardware or run a new physical game test. Hardware results below are the firmware project's recorded results. No existing project graph was found.

## Hardware and controller claims

| Item | Website status | Evidence and limits |
| --- | --- | --- |
| Original M5StickC Plus | Tested device | ESP32-PICO-D4, 4 MiB flash, no PSRAM, 135 by 240 portrait display. `skills/m5stick-development/references/hardware.md:3` records this device. The published USB preview identifies the original Plus as its intended board. The new USB partition layout and transfer flow still need their first complete physical check. |
| StickS3 | Compiling build target, physical testing pending | A separate ESP32-S3 target now builds with 8 MiB flash, 8 MiB PSRAM and speaker audio. Physical sound, controls, Bluetooth, sleep and frame timing remain unverified. `docs/STICKS3_AUDIO.md:3,23` and `docs/RELEASE_STATUS.md:17`. |
| StickC-Plus SE, Plus2, original StickC and Core boards | Unverified | Each needs its own firmware review and hardware checks. Build flags or automatic display detection do not establish support. The SE has no onboard motion sensor, so tilt input needs separate consideration. |
| IINE Gamebrick Mini | Tested in H keyboard mode | Yellow indicator, advertised as `IINE-keyboard`. The firmware records pairing, reconnect after flashing, Tetris directional movement and both rotations, and Mario jump, run and combined running jump. `docs/CONTROLLERS.md:15-26,78`. |
| IINE C profiles and other controllers | Unverified | Advertised controller names do not establish compatibility. The firmware supports BLE HID and excludes Bluetooth Classic HID. `docs/CONTROLLERS.md:26,74,80`. |

The IINE's full playthroughs, power-cycle coverage, Tetris Up/Down/Hold and Mario title shortcuts still need physical checks. Say that H-mode controls have been tested. Avoid implying every profile or every game has completed controller testing.

Additional devices are planned. Publish new compatibility only after the firmware project supplies a device-specific build and recorded hardware verification. Keep dates out of that promise.

## Games and current status

These implementations are present in the public source and have been used in local firmware builds. No downloadable GitHub release was available at the audit time. The published USB interface preview withholds firmware images.

| Capability | Recorded state | Evidence |
| --- | --- | --- |
| Flappy Bird modes and procedural themes | Native implementation with Original, Clock, Demo, Arcade, Big and Co-op modes. The public starter build uses authored replacement art. Compatible original artwork requires user-supplied files. | `README.md`, Flappy Bird modes section, and `tools/starter_assets.py`. |
| NES cartridge support | Implemented for compatible user-supplied cartridges. Individual games have format, mapper and control limits. | `docs/NES.md`. |
| Tetris adapters | Implemented using prepared user-supplied cartridges. Some controls and layouts still need physical checks. | `docs/TETRIS.md` and the README's hardware verification notes. |
| Geometry / Famidash adapter | Implemented with a supported user-supplied Famidash cartridge. | `docs/GEOMETRY_DASH.md`. |
| Galaga and Arkanoid adaptations | Native code with original graphics and generated layouts. Automated hardware timing probes exist. Physical tilt feel, sound and controller play remain unverified. | `docs/TILT_ARCADE.md:3,34`. |
| Jetpack adaptation | Native code and original art. Requires no ROM for its project-created presentation. Fidelity work and hardware checks remain in progress. | `docs/JETPACK.md:3-7` and `docs/JETPACK_AUDIT.md`. |
| Two-device Flappy and Tetris links | Experimental. Complete two-device radio playthroughs remain untested. | `docs/COOP.md`, `docs/TETRIS.md` and the README's hardware verification notes. |
| New original game proposals | Concepts until code exists and the firmware project verifies implementation. | Website concepts are proposals, not evidence of shipped games. |

Use development labels for the existing firmware work. Keep both new original proposals labeled **Concept** until implemented. Screenshots, generated artwork and mockups must say what they depict. A drawing of a concept on a device cannot establish that the game runs there.

## Galaga and Flappy controls

| Game | Device controls | Controller controls |
| --- | --- | --- |
| Galaga | Tilt left/right to move. Tap or hold front M5 to fire. Tap right to pause/resume. Tap left to save neutral tilt and pause. Hold right for 700 ms to open the menu. | Left/right replaces tilt movement. A or B fires. Start pauses/resumes. A dedicated Menu button opens the M5 menu. |
| Flappy Bird | Press front M5 to flap, start or replay. Hold right for 700 ms to open the menu. Tilt is unused. | A flaps, starts or replays. B opens the menu or advances within it. A dedicated Menu button opens the M5 menu. |

Galaga resumes from pause with the front button too. After selecting a game or leaving a menu, held action buttons must be released before the next shot. The IINE H-mode test scope above does not establish a completed Galaga controller playthrough.

Sources: `docs/TILT_ARCADE.md:9-22`, `docs/CONTROLLERS.md:32-33,57-58`, `firmware/flappy/flappy.ino:1303-1317,2409,2484` and `firmware/flappy/app_model.h:915-917` at the audited commit.

## Screen imagery

The firmware checkout contains original Galaga renderer output at `.local/tilt-arcade/galaga-ready.png`, `galaga-formation.png`, `galaga-tractor.png`, `galaga-dual.png` and `galaga-bonus.png`. These are 135 by 240 renderer fixtures produced by `.local/tilt-arcade/galaga_render.cpp`. The Galaga implementation last changed in commit `af968dc3ad50f8be44828ff717b11aaf7ae57b05` on 2026-10-27. These scenes represent the current renderer. Label them as renderer previews when used as a reference, and distinguish a composited device mockup from a photograph of hardware.

The old Flappy reference images `.local/artifacts/preview.png` and `.local/artifacts/features-preview.png` contain privately imported original game artwork. They show green pipes, a yellow bird and bright city scenery. Keep those images and their imported art out of this website.

The public starter art is generated by `tools/starter_assets.py`. It uses a teal geometric flyer, gold-capped teal pillars, slate-blue scenery and a `TINY FLAP` title. A mockup presented as the public starter build should follow that appearance. Project-created procedural themes such as Toast on the Run and Past Due have their own authored appearance. No private art or firmware screenshots were copied into the website during this audit.

## Published installer preview and blocker

The public [firmware repository](https://github.com/ryangrams/bitty) now contains source at the audited commit. Its [releases API](https://api.github.com/repos/ryangrams/bitty/releases) still returns an empty array.

The [GitHub Pages interface preview](https://ryangrams.github.io/bitty/) returns HTTP 200 and loads its application module. Its [release status file](https://ryangrams.github.io/bitty/release.json) returns `{"available": false, "version": "preview-f83f0cda"}`. The candidate manifest path `https://ryangrams.github.io/bitty/manifest.json` returns HTTP 404. The preview deliberately provides no installable firmware image.

The [firmware release status](https://github.com/ryangrams/bitty/blob/main/docs/RELEASE_STATUS.md) says the first complete hardware installation and transfer check is pending. Its acceptance list includes a verified recovery backup, partition migration, fresh installation, runtime upload, interrupted transfer, removal, replacement, restart, boot selection and controller reconnection. The previous private game build remains the device's last installed release.

The **Load your device** link can lead to this preview with a nearby explanation that installation is still being verified. Keep installation readiness false. Do not say a downloadable USB release is available or call the installation handoff complete.

## GitHub Issues

GitHub Issues is enabled on the firmware repository: `has_issues: true`. Its [issue list](https://github.com/ryangrams/bitty/issues) returned HTTP 200 and the issues API returned an empty array. Opening the [new issue URL](https://github.com/ryangrams/bitty/issues/new) without authentication led to GitHub's sign-in page with the correct repository destination preserved.

Use the generic new issue URL for actionable bugs, game requests and port requests. The public source now also contains issue templates under `.github/ISSUE_TEMPLATE/`. Recheck any template-specific link when adopting it. Keep discussion in Discord. Ask for device model, behavior, logs and lawful references. Never request commercial game files.

## Updating the website configuration

Keep installation links, verification state, supported devices, controller modes and game status in the website's editable configuration. The GitHub preview can be linked while its unavailable-installation state is explained. Keep the repository URL as the source and documentation fallback. Record the checked date and firmware evidence commit with each future status update.

Before marking installation available or the handoff complete:

1. Confirm the public source and installation documentation for the specific release. Record its published commit and release tag. Public source is available now; the downloadable release remains pending.
2. Obtain the installation destination from that project's published documentation. Open it over HTTPS and confirm its actual contents. Check every redirect.
3. Inspect the published manifest and every referenced artifact. Confirm successful responses, the intended original M5StickC Plus target, correct flash layout, matching release version and recorded artifact hashes. Review the release's distribution checks for imported assets and private files.
4. Check that browser requirements, data-cable requirements, model selection, firmware replacement and recovery instructions agree with the release. Confirm that downloads require no star or payment.
5. Have the firmware project verify the published installation path on the original M5StickC Plus, including a working boot and the documented recovery path. Record the tested release and outcome. A local build or passing HTTP response is insufficient evidence for this step.
6. Check that any game-library flow keeps user files local and explains its actual supported formats and adapters. Keep the rights statement accurate and never describe a checkbox as granting permission.
7. Update the central configuration with the verified URL, date, release and hardware scope. Rebuild the public website, then follow **Load your device** from the deployed site and repeat the important link checks.

For a new device, record the exact model, chip, flash size, release/build target and physical test scope before adding it to the tested list. For a new controller, record its exact mode as well as the model. For a game, move its status only as far as the implementation and verification evidence supports.

This document covers firmware and installation evidence. Discord destinations, affiliate links, support activation, rights sources and deployment verification need their own current checks.
