---
title: Hack Session 491 ✼ Remotely (c)
publishDate: 2021-09-22
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 29.09.2021

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #491 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuIO/events/sdgdfsyccmbmc/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [‹Distributed Arcade›](https://github.com/olange/arcade) Game World & Boards with H3 & hex-coordinate systems — @olange and @rudifa

### See also

* #490 Previous session
* #492 Next session

[olange](https://github.com/olange) | 2021-09-22

<hr/>

## Feedback on study of @olange and @rudifa

[‹Distributed Arcade›](https://github.com/olange/arcade) – Rudi and I stabilized the code base and removed all impediments for newcomers to build and start the web app:

* moved the `webapp/components/games/hexa-grid/spare-parts/` to a new `webapp/unused/` subfolder, which is not part of any build and deployment;
* removed the preload link of Pixi.js, which caused cryptic errors when starting Swowpack's dev server and was not really needed, as the preload link of the `component/hexa-game/hexa-game.js` does itself load pixi.js;
* improved the readability of the Snowpack config, marking paths more explicitly.

And we added a status note to the project README on GitHub and on the deployed landing page, to make it clear that the project is in early development stage.

The [upgrades to the project dependencies described last week](https://github.com/gongfuio/sessions/issues/490#issuecomment-925365087) are still pending and we'll address them in an upcoming session.

## See also

* [#490](https://github.com/gongfuio/sessions/issues/490#issuecomment-925365087) Previous feedback
* [#494](https://github.com/gongfuio/sessions/issues/494#issuecomment-948046523) Next feedback

[olange](https://github.com/olange) | 2021-09-29


