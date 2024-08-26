---
title: Hack Session 490 ✼ Remotely (c)
publishDate: 2021-09-22
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 22.09.2021

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #490 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuIO/events/sdgdfsyccmbdc/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [‹Distributed Arcade›](https://github.com/olange/arcade) Game World & Boards with H3 & hex-coordinate systems — @olange and @rudifa

### See also

* #489 Previous session
* #491 Next session

[olange](https://github.com/olange) | 2021-09-22

<hr/>

## Feedback on study of @olange and @rudifa

[‹Distributed Arcade›](https://github.com/olange/arcade) – Rudi and I restarted our common session, after a summer break of 6+ weeks, and upgraded all our project dependencies to their latest versions, to benefit from security and performance updates; we tested that there were no regressions after each upgrade.

Still pending, those upgrades, which require adjustments to the source code: Firebase from SDK v8 to v9 (brings better ES module support and allows for tree-shaking); LitElement 2.5 to LitElement 3 (to pave the way to Lit v2); Pixi.js 5.3 to 6.1 (the documentation is finally updated for v6). This will be for our next session.

Also we will probably replace Firebase with [GUN](https://github.com/amark/gun), as it bring the distributed-peer-to-peer-graph-database I was searching, to distribute the game world state and game boards state amont hosts in a local disconnected network.

## See also

* [#474](https://github.com/gongfuio/sessions/issues/474#issuecomment-853290312) Previous feedback
* [#491](https://github.com/gongfuio/sessions/issues/491#issuecomment-930571482) Next feedback

[olange](https://github.com/olange) | 2021-09-22


