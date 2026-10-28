# Asset provenance

## Hockey Queen artwork

`assets/illustrations/hockey-queen.webp` is a lossless copy of Ryan's original Hockey Queen title artwork from `~/SUDev/hockey-queen/hockey-queen-v1/assets/final/title-v2.png`. Ryan authorized using his existing art for this website. The source project's `docs/ART_INTAKE.md` and `docs/ART_SPEC.md` document its generation and native-pixel preparation. The finished art is also present in the Godot screen-asset library. This image is artwork, not a screenshot of a running Bitty port.

The published image keeps its original 192 by 288 pixels and all 29 colors. It is 13,862 bytes, encoded with `cwebp -lossless -exact -z 9`. The decoded RGBA pixels match the source exactly. No crop, resize, redraw or color change was made, and the source project was left unchanged. Use pixel-preserving display scaling and label the Bitty port as in development.

Source SHA-256: `b7f94b6ee1b5b151b77ae8d10aa1cd3659d77d181f59974aa983392aac6b88be`.

## Current hero

The current hero is `assets/illustrations/bitty-games-mockup-v2.png`, generated with the built-in imagegen tool on 2026-10-28. Its hardware reference is the user-supplied StickC-Plus SE product photograph. The image preserves the short, wide device body, translucent orange housing, broad M5 button and USB port. One screen illustrates Galaga and the other illustrates Flappy Bird. Both screens are mockups. They are not device captures, and the public starter Flappy artwork differs. No private firmware screenshot or commercial game file was copied into the site.

The site visibly separates the reference SE shell from the hardware-tested original Plus. It does not claim SE firmware support. The published versions are `bitty-games-mockup-v2.webp` (cwebp quality 82) and `bitty-games-mockup-v2.jpg` (JPEG quality 82). The PNG remains an editable source reference outside the deployed assets.

The final prompt was:

> Use case: product-mockup. Edit the supplied M5StickC Plus SE product photograph into an accurate two-device website hero mockup. Input image is the exact physical hardware reference and must control every proportion. TWO units of that SAME SHORT WIDE device, side by side on a matte charcoal #101116 desk under restrained violet edge light and warm amber key light. Landscape 3:2 image. Both units fully visible, each occupies about two-thirds of image height, screens face the camera clearly at a slight three-quarter angle. Preserve faithfully the reference's short 48 mm x 24 mm rectangular body (2:1 length-to-width), chunky rounded corners, translucent orange shell, visible inner PCB/screw posts, screen to housing ratio, black bezel, LARGE WIDE translucent front M5 button below screen, left-edge side buttons, and metal USB-C port at bottom edge. Keep the broad rectangular front button's embossed M5 mark. No long remote-control shapes. No wrist straps, invented controls, analogue sticks, cables or extra hardware. LEFT UNIT screen: an illustrative GALAGA game scene on BLACK, a small white/red player spaceship low center and several tidy rows of colorful tiny pixel enemy ships in upper half, a few small stars and shots, original small pixel rendering. RIGHT UNIT screen: an illustrative FLAPPY BIRD game scene with a small yellow bird, green pipes, cyan sky, distant small city silhouettes, tan ground strip. Screens should look like low resolution 135 x 240 displays, vivid and readable. Change screen contents only from the reference, remove all original screen words StickC Plus SE and arrows. Make device body geometry the priority. This is a generated illustrative mockup for game ports, not an actual firmware screenshot or proof of support for the SE. No text anywhere outside the two physical M5 button marks. Background clean dark studio, no logos, no human hands, no long orange bar.

## Superseded first hero

`assets/illustrations/bitty-concept-original.png` was generated with the built-in imagegen tool on 2026-10-28. It is an original illustration of an imagined orange pocket device, labeled as a concept on the site. It does not claim to be a photograph or an accurate hardware diagram.

The prompt was:

> Use case: illustration-story. Asset type: original hero artwork for Bitty, Ryan Grams's tiny games side project website. Create a refined editorial 3D illustration, landscape 3:2, of one small orange stick-shaped handheld electronics device in a dark studio scene. Stylized, clearly an illustration, no fake product photography. The device is a narrow orange rounded rectangular bar, small black portrait screen on the upper half, one orange square button below screen, short black USB cable gently curves around it. The screen displays an ORIGINAL abstract pixel forest with one warm amber flashlight beam, dark spruce silhouettes, one tiny violet pixel player, no text. Device rests diagonally on matte charcoal desk, subtle warm walnut edge and precise violet bounce light. A few restrained square pixels floating near screen, elegant physical materials, mostly matte. Background #101116, violet #6D4BF5 with warm amber #E8A33D, orange #FF6B2C. Large simple composition with the device occupying right and middle, little visual clutter. No people, no children, no camp reenactment, no branded logos, no Mario, no Tetris, no recognizable game characters, no text, no extra controls. This is a concept illustration, not evidence of implemented software.

`bitty-concept.webp` is the page image, encoded with `cwebp -q 82`. `bitty-concept.jpg` is the social preview, encoded with macOS `sips` at JPEG quality 82. The original stays in source and is excluded from the deployed assets.

## Game scenes and diagrams

`lights-out.svg` and `patch-panic.svg` are original pixel-grid illustrations authored for the two proposed games. They are retained source assets for superseded, unimplemented proposals. The simplified site no longer publishes them or asks visitors to implement a specific game.

Device and controller diagrams in `scripts/build.mjs` are original simplified illustrations. They are decorative and are not product photographs or dimensioned technical drawings.

The user’s product photograph was used as a generation reference. The reference photograph itself was not copied into the public repository. No private game screenshot, ROM, APK, extracted commercial game artwork or music has been copied into the repository. The generated hero illustrates the two named games as requested, and its visible mockup label distinguishes it from captured gameplay.

## Fonts

Archivo Expanded, Inter Tight and JetBrains Mono were obtained through Google Fonts’ CSS service and self-hosted as Latin WOFF2 files. Their SIL Open Font License files were obtained from the corresponding directories in [google/fonts](https://github.com/google/fonts/tree/main/ofl).

- Archivo: `ofl/archivo/OFL.txt`
- Inter Tight: `ofl/intertight/OFL.txt`
- JetBrains Mono: `ofl/jetbrainsmono/OFL.txt`

The CSS declares local font files with `font-display: swap`. Visitors do not contact Google Fonts to render the site.
