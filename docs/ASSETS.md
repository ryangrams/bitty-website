# Asset provenance

## Hero

`assets/illustrations/bitty-concept-original.png` was generated with the built-in imagegen tool on 2026-10-28. It is an original illustration of an imagined orange pocket device, labeled as a concept on the site. It does not claim to be a photograph or an accurate hardware diagram.

The prompt was:

> Use case: illustration-story. Asset type: original hero artwork for Bitty, Ryan Grams's tiny games side project website. Create a refined editorial 3D illustration, landscape 3:2, of one small orange stick-shaped handheld electronics device in a dark studio scene. Stylized, clearly an illustration, no fake product photography. The device is a narrow orange rounded rectangular bar, small black portrait screen on the upper half, one orange square button below screen, short black USB cable gently curves around it. The screen displays an ORIGINAL abstract pixel forest with one warm amber flashlight beam, dark spruce silhouettes, one tiny violet pixel player, no text. Device rests diagonally on matte charcoal desk, subtle warm walnut edge and precise violet bounce light. A few restrained square pixels floating near screen, elegant physical materials, mostly matte. Background #101116, violet #6D4BF5 with warm amber #E8A33D, orange #FF6B2C. Large simple composition with the device occupying right and middle, little visual clutter. No people, no children, no camp reenactment, no branded logos, no Mario, no Tetris, no recognizable game characters, no text, no extra controls. This is a concept illustration, not evidence of implemented software.

`bitty-concept.webp` is the page image, encoded with `cwebp -q 82`. `bitty-concept.jpg` is the social preview, encoded with macOS `sips` at JPEG quality 82. The original stays in source and is excluded from the deployed assets.

## Game scenes and diagrams

`lights-out.svg` and `patch-panic.svg` are original pixel-grid illustrations authored for the two proposed games. Their titles, controls and proposed appeal live in `content/site.json`. Both concepts remain unimplemented.

Device and controller diagrams in `scripts/build.mjs` are original simplified illustrations. They are decorative and are not product photographs or dimensioned technical drawings.

No Amazon product photography, commercial game screenshots, characters, artwork or music has been copied into this repository. Manufacturer photos were considered, but no redistribution license was verified.

## Fonts

Archivo Expanded, Inter Tight and JetBrains Mono were obtained through Google Fonts’ CSS service and self-hosted as Latin WOFF2 files. Their SIL Open Font License files were obtained from the corresponding directories in [google/fonts](https://github.com/google/fonts/tree/main/ofl).

- Archivo: `ofl/archivo/OFL.txt`
- Inter Tight: `ofl/intertight/OFL.txt`
- JetBrains Mono: `ofl/jetbrainsmono/OFL.txt`

The CSS declares local font files with `font-display: swap`. Visitors do not contact Google Fonts to render the site.
