# Rights and verified links

Checked on October 28, 2026. These notes support the public website's wording and link configuration. Recheck product models, destinations, and current policies before changing purchase or installation links.

## User-supplied games

Use this site language:

> You must own a legitimate copy and have the rights required to use and adapt any game files you load. Owning a copy of Mario or Tetris does not automatically grant those rights. A checkbox cannot grant them either. Bitty does not supply commercial ROMs, APKs, or a commercial game's original artwork or music. Please keep commercial game files out of GitHub and Discord.

Mario and Tetris are textual examples. Their names do not establish that those games run on Bitty. Likewise, mentioning APKs does not claim that Bitty supports Android applications.

The ownership and rights requirements above are project rules. The sources distinguish ownership of a copy from ownership of copyright and describe limited exceptions. Avoid broad claims that buying a game permits every conversion or that every private adaptation is prohibited.

Primary sources:

- [U.S. Copyright Office, 17 U.S.C. §106](https://www.copyright.gov/title17/92chap1.html#106): the copyright owner's exclusive rights include reproduction, derivative works, and distribution, subject to statutory limitations.
- [U.S. Copyright Office, 17 U.S.C. §117](https://www.copyright.gov/title17/92chap1.html#117): limited provisions for a program owner's necessary-use adaptations and archival copies. This does not establish a general right to obtain or share commercial game files.
- [U.S. Copyright Office, 17 U.S.C. §202](https://www.copyright.gov/title17/92chap2.html#202): ownership of a material copy and copyright are distinct.
- [U.S. Copyright Office, Copyright and Digital Files FAQ](https://www.copyright.gov/help/faq/faq-digital.html): explains backup-copy limits, software license considerations, and unauthorized distribution.
- [U.S. Copyright Office, 17 U.S.C. §1201](https://www.copyright.gov/title17/92chap12.html#1201): access-control circumvention has separate restrictions and exceptions. Do not publish instructions or promises that assume a purchased copy resolves those questions.

The checkbox sentence describes a limit of the website's own interface: Bitty cannot confer a third party's copyright permissions through an acknowledgment.

## Original M5StickC Plus

The original M5StickC Plus is model **K016-P**. [M5Stack's official documentation](https://docs.m5stack.com/en/core/StickC-Plus) identifies the model and its onboard IMU. [M5Stack's product page](https://shop.m5stack.com/products/m5stickc-plus-esp32-pico-mini-iot-development-kit) currently marks it **EOL (End of Life)**.

Use this hardware wording only alongside the firmware project's current supported-device list:

> The original M5StickC Plus is the device I've tested. M5Stack now lists it as end of life. Check the model carefully before buying. Plus SE, Plus2, and StickS3 are separate devices, and support needs to be confirmed for each one.

EOL describes the manufacturer's product status. It does not establish Bitty compatibility for a replacement model. No price or stock claim is needed on this site.

## Supplied Amazon links

Both user-supplied short links resolved successfully. The destinations differ from the original tested M5StickC Plus.

| Supplied link | Verified destination | Model issue |
| --- | --- | --- |
| <https://a.co/d/0aIvGvvB> | [Amazon ASIN B0HCYBPKJT](https://www.amazon.com/dp/B0HCYBPKJT), M5Stack Official StickC-Plus SE ESP32 IoT Development Kit | Plus SE. The listing explicitly says it has no onboard IMU. |
| <https://a.co/d/004XU2s8> | [Amazon ASIN B0GWHN8HK3](https://www.amazon.com/dp/B0GWHN8HK3), M5Stack Official M5StickS3 ESP32S3 Mini IoT Development Kit | StickS3. It is a separate hardware model. |

[M5Stack's official Plus SE product page](https://shop.m5stack.com/products/m5stickc-plus-se-mini-iot-dev-kit-esp32-pico) confirms that the SE removes the onboard 6-axis IMU.

Neither supplied URL leads to a game controller. The observed redirects contain Amazon sharing parameters and **no visible `tag` parameter**. That inspection did not verify Associates commission attribution. Ryan subsequently authorized creating affiliate links in his existing Geniuslink account for both supplied devices and the controller he purchased.

The existing affiliate exports at `~/SUDev/affiliate-tools/links.csv` and `links.md` contained no matching M5Stack, M5Stick, 8BitDo, gamepad, game-controller, Joy-Con, or Bitty entry when checked. A controller's compatibility must also come from the firmware project before the website recommends it.

## Created Geniuslink destinations

The existing authenticated Geniuslink account and its existing API credentials were used. No new account or credentials were created. A fresh account search found no links for the three exact Amazon ASINs before creation. The documented `POST /v3/shorturls` endpoint created Simple links in the existing default group. [Geniuslink's live API specification](https://api.geni.us/openapi) documents this endpoint and the account's affiliate-program status endpoint.

| Public affiliate link | Exact Amazon destination | Product identity |
| --- | --- | --- |
| [geni.us/SUm5stickplusse](https://geni.us/SUm5stickplusse) | [B0HCYBPKJT](https://www.amazon.com/dp/B0HCYBPKJT) | M5StickC Plus SE. Separate from the tested original Plus and without an onboard IMU. |
| [geni.us/SUm5sticks3](https://geni.us/SUm5sticks3) | [B0GWHN8HK3](https://www.amazon.com/dp/B0GWHN8HK3) | M5StickS3. Compatibility status must follow the firmware project. |
| [geni.us/SUiinegamebrick](https://geni.us/SUiinegamebrick) | [B0FLK6TP38](https://www.amazon.com/dp/B0FLK6TP38) | IINE Mini Controller, Grey, the exact purchased product. |

All three public links resolved successfully with HTTP 200 to their listed ASIN and appended the existing Amazon Associates tag `ryangrams-20`. Geniuslink's `GET /v1/affiliate/stats` reports **Amazon (US)** among the account's enrolled programs. This verifies the configured affiliate destinations. The account-action record below describes the separate Associates website list.

A narrow read-only receipt search identified the purchased controller's exact ASIN and Grey variant. The public Amazon product page independently matches that identity. Private receipt contents and personal details are excluded from this repository.

The firmware's `docs/CONTROLLERS.md` identifies the **IINE Gamebrick Mini** and physically tested H-mode keyboard profile, shown by its yellow light. Use the firmware's current testing limits. The [official IINE guide for L1161 and L1162](https://iine.store/pages/gamebrick-mini-retro-controller-guide-manual) supplies its mode and pairing instructions. A retailer's broad compatibility list does not establish Bitty support.

## Amazon disclosures

For each verified affiliate purchase link, place **Paid link** beside the link. Keep this explanation beside the product cards:

> Purchasing through these links is a great way to support this side project. I earn a commission from qualifying purchases.

Include this exact statement clearly and conspicuously on the site:

> As an Amazon Associate I earn from qualifying purchases.

[Amazon's disclosure guidance](https://affiliate-program.amazon.com/help/node/topic/GHQNZAU6669EZS98) requires clear, conspicuous disclosure near links plus the Associates identification statement. [FTC affiliate guidance](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking) explains that readers may not understand the payment relationship from the words “affiliate link” alone.

[Amazon's current program policies](https://affiliate-program.amazon.com/help/operating/policies) require accurate website information in the Associates application. Keep purchase claims, prices, and affiliate attribution within what has actually been verified.

### Owner publication choice and Associates website list

On October 28, 2026, Ryan requested adding `https://bitty.games` to the existing Associates account associated with `ryangrams-20`. The Codex browser submitted the addition and Amazon confirmed “Websites and Mobile Apps updated.” The saved list includes Bitty alongside Ryan’s site, YouTube, Geniuslink and Facebook. All four previous entries remain. The child-audience declaration used Ryan’s explicit confirmation that these sites are not directed primarily at children under 13.

Ryan authorized publishing the three supplied Geniuslinks with the disclosures above. `affiliate.publishPaidLinks` records that publication choice. Being listed in Associates does not establish product compatibility or grant rights to game files.

## GitHub Sponsors

[Ryan's GitHub Sponsors profile](https://github.com/sponsors/ryangrams) is publicly active. The [one-time support destination](https://github.com/sponsors/ryangrams?frequency=one-time) exposes one-time tiers, including an existing “Buy Me a Coffee” tier. No owner-only activation step was apparent from the public profile.

Use the button **Buy me a coffee**, with **via GitHub Sponsors** beside it, linking to:

```text
https://github.com/sponsors/ryangrams?frequency=one-time
```

Suggested supporting copy:

> You can send one-time support through GitHub Sponsors. It helps me keep building Bitty.

[GitHub's official Sponsors documentation](https://docs.github.com/en/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors) confirms support for one-time and monthly sponsorship tiers. No separate Buy Me a Coffee account is needed. Downloads, contributions, and community participation stay available independently of sponsorship or GitHub stars.

## Device budget wording

Ryan requested positioning around a $30 to $40 device. The site presents that as his hardware-budget target, with the optional controller sold separately. It is not a live retail quote. Prices vary by model, retailer and shipping.

On October 28, 2026, manufacturer base listings showed original Plus $19.95, Plus SE $19.00 and StickS3 $21.50. A public Amazon StickS3 listing showed $31.90. These amounts are research context and are deliberately omitted from the live product cards. Recheck current prices before publishing a retail-price claim.

Primary sources: [original Plus](https://shop.m5stack.com/products/m5stickc-plus-esp32-pico-mini-iot-development-kit), [Plus SE](https://shop.m5stack.com/products/m5stickc-plus-se-mini-iot-dev-kit-esp32-pico), [StickS3](https://shop.m5stack.com/products/m5sticks3-esp32s3-mini-iot-dev-kit), [Amazon StickS3](https://www.amazon.com/dp/B0GWHN8HK3).
