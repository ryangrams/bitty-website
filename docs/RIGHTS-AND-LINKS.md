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

Neither supplied URL leads to a game controller. The observed redirects contain Amazon sharing parameters and **no visible `tag` parameter**. That inspection does not verify Associates commission attribution. Preserve the supplied URLs as research evidence, and verify approved affiliate destinations before presenting them as purchase recommendations.

The existing affiliate exports at `~/SUDev/affiliate-tools/links.csv` and `links.md` contained no matching M5Stack, M5Stick, 8BitDo, gamepad, game-controller, Joy-Con, or Bitty entry when checked. A controller's compatibility must also come from the firmware project before the website recommends it.

## Amazon disclosures

For each verified affiliate purchase link, place **Paid link** beside the link. Keep this explanation beside the product cards:

> Purchasing through these links is a great way to support this side project. I earn a commission from qualifying purchases.

Include this exact statement clearly and conspicuously on the site:

> As an Amazon Associate I earn from qualifying purchases.

[Amazon's disclosure guidance](https://affiliate-program.amazon.com/help/node/topic/GHQNZAU6669EZS98) requires clear, conspicuous disclosure near links plus the Associates identification statement. [FTC affiliate guidance](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking) explains that readers may not understand the payment relationship from the words “affiliate link” alone.

[Amazon's current program policies](https://affiliate-program.amazon.com/help/operating/policies) require accurate website information in the Associates application. Ryan should confirm that `bitty.games` is included in his Associates website list and supply approved destinations for the exact supported device and any verified controllers. Keep purchase claims, prices, and affiliate attribution within what has actually been verified.

## GitHub Sponsors

[Ryan's GitHub Sponsors profile](https://github.com/sponsors/ryangrams) is publicly active. The [one-time support destination](https://github.com/sponsors/ryangrams?frequency=one-time) exposes one-time tiers, including an existing “Buy Me a Coffee” tier. No owner-only activation step was apparent from the public profile.

Use the button **Buy me a coffee**, with **via GitHub Sponsors** beside it, linking to:

```text
https://github.com/sponsors/ryangrams?frequency=one-time
```

Suggested supporting copy:

> You can send one-time support through GitHub Sponsors. It helps me keep building Bitty.

[GitHub's official Sponsors documentation](https://docs.github.com/en/sponsors/receiving-sponsorships-through-github-sponsors/about-github-sponsors-for-open-source-contributors) confirms support for one-time and monthly sponsorship tiers. No separate Buy Me a Coffee account is needed. Downloads, contributions, and community participation stay available independently of sponsorship or GitHub stars.
