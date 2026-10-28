# Studio Upgrade community destinations

Checked on October 28, 2026. The website's community link belongs to Ryan Grams's existing Studio Upgrade Discord server.

## Invite

Use [Join the Studio Upgrade Discord](https://discord.gg/Y9r6MQEsm4) as the main community action.

The public [Discord invite API](https://discord.com/api/v10/invites/Y9r6MQEsm4?with_counts=true&with_expiration=true) returned the following fields:

| Field | Verified value |
| --- | --- |
| Invite code | `Y9r6MQEsm4` |
| Server name | Studio Upgrade |
| Server ID | `1525909777568497724` |
| Inviter | Ryan Grams, `ryangrams` |
| Expiration | `expires_at: null` |
| Destination channel | `📋rules-and-roles`, `1526269814178447594` |

The public invite page also displayed Studio Upgrade and Ryan Grams as the inviter. Existing Studio Upgrade connect pages use this same invite: `~/SUDev/su-loop/index.html:199` and `~/SUDev/HighLevel Work/sites/connect/index.html:185`.

The invite currently has no expiration. Check it again before future link changes. New members enter [rules and roles](https://discord.com/channels/1525909777568497724/1526269814178447594). Direct channel links can require Discord sign-in and server membership, so the invitation remains the primary public destination.

## Existing channels

These destinations were read from the signed-in Studio Upgrade server sidebar. No channels or messages were created or changed.

| Channel | Destination | Website use |
| --- | --- | --- |
| `🌎general` | [Open general](https://discord.com/channels/1525909777568497724/1525909778084266146) | Main discussion destination after joining. Its topic describes it as the main room for thinking out loud and asking questions. |
| `🎙️studio-builds` | [Open studio builds](https://discord.com/channels/1525909777568497724/1525910387810242791) | Existing studio-building channel. |
| `🎥gear-talk` | [Open gear talk](https://discord.com/channels/1525909777568497724/1525910448828973276) | Existing gear discussion channel. |
| `📢app-updates` | [Open app updates](https://discord.com/channels/1525909777568497724/1525910836231798966) | Existing channel under Apps & Tools. |
| `📲feedback` | [Open feedback](https://discord.com/channels/1525909777568497724/1525910875549208638) | Existing channel whose topic invites feature requests and bugs. Bitty's actionable reports should still go to GitHub Issues. |
| `❓support` | [Open support](https://discord.com/channels/1525909777568497724/1525910902535225425) | Existing channel under Apps & Tools. |
| `🛜roam-dock_wifi-streamdeck` | [Open Roam Dock](https://discord.com/channels/1525909777568497724/1527798652079312986) | Existing controller project channel under Apps & Tools. |

No dedicated Bitty or record-player channel was visible in the checked sidebar. Do not invent a channel or claim a dedicated destination exists. The public server widget is disabled, so the complete channel check used the signed-in browser.

## Routing for Bitty

Keep conversations and early ideas in Discord. Send actionable bugs, device-port requests, game or app requests, and concrete contributions to [Bitty's GitHub Issues](https://github.com/ryangrams/bitty/issues). A direct [new issue link](https://github.com/ryangrams/bitty/issues/new) is available. GitHub can ask visitors to sign in before submitting an issue.

For a bug, ask for the exact device model, build or version, expected behavior, observed behavior and reproduction steps. For a port, ask for the exact hardware model and the proposed work. For a game idea, ask for the mechanics and how the controls could work on a tiny screen.

Never ask visitors to upload commercial ROMs, APKs, artwork, music or other commercial game files to either service. Descriptions, lawful references and original work are enough to start a discussion or issue.

Suggested public copy:

> Come build tiny, useful, ridiculous things with us. Bitty belongs in the same room as studio controllers, record-player gadgets and whatever somebody wires up next. Join the Studio Upgrade Discord for discussion. Put actionable bugs and device-port requests in GitHub Issues.

Keep the invite and discussion destination in `content/site.json`. If a Bitty channel is created later, verify its exact name, server and URL before updating the configuration.
