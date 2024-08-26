---
title: Hack Session 540 ✼ Remotely (c)
publishDate: 2022-09-02
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 07.09.2022

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #540 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuio/events/shvtvsydcmbkb/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [‹h3-worldmap› notebook](https://observablehq.com/@olange/h3-minimap) retrofit of the [web component](https://github.com/olange/h3-worldmap) in the Observable notebook — @olange and @rudifa

### See also

* #539 Previous session
* #541 Next session

[olange](https://github.com/olange) | 2022-09-02

<hr/>

## Feedback on @olange's session

Small improvements on the [‹h3-worldmap›](https://github.com/olange/h3-worldmap) web component:

* removed obsolete source code (now unused `firstLayoutController` Lit controller and `infoBox` view);
* updated [H3-js](https://github.com/uber/h3-js) library from v3 to v4.

API of H3-js has quite changed, with more clear naming of methods IMO, but the rendering of worldmap was initially completely broken. I quietly read [H3's migration guide from v3](https://h3geo.org/docs/library/migrating-3.x), applied its recipes and completed migration without much trouble.

Also took on isolating the geometry construction process in a Lit controller, to clarify the component's lifecycle, but eventually stopped — tiredness suddenly fell on me, because of a flu. I will restart this effort in a next session, hopefully in a better condition.

## See also

* [#542](https://github.com/gongfuio/sessions/issues/542#issuecomment-1252401700) Next feedback
* [#536](https://github.com/gongfuio/sessions/issues/536#issuecomment-1210488376) Previous feedback


[olange](https://github.com/olange) | 2022-09-08


