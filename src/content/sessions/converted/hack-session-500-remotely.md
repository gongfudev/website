---
title: Hack Session 500 ✼ Remotely (c)
publishDate: 2021-11-24
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 01.12.2021

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #500 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuIO/events/hxccqsyccqbcb/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [‹Distributed Arcade›](https://github.com/olange/arcade) Game World & Boards with H3 & hex-coordinate systems — @olange and @rudifa

### See also

* #499 Previous session
* #501 Next session

[olange](https://github.com/olange) | 2021-11-24

<hr/>

## Feedback on study of @olange and @rudifa

Worked on our [‹h3-minimap› web component](https://observablehq.com/@olange/h3-minimap) in ObservableHQ:

* replaced our implementation of `bbox()` with [`d3.geoBounds(this.areasGeom)`](https://github.com/d3/d3-geo#geoBounds) — to discover that `d3-geo` was producing the exact same results as our first implementation, which was looking for the mix/max ‹lat,lon› of all corners of our areas;
* tried to draw a _spherical bounding box_, instead of a _rectangular bounding box_ one, by using [`d3.geoCentroid(this.areasGeom)`](https://github.com/d3/d3-geo#geoCentroid) and a radius derived from the [`d3.geoBounds(…)`](https://github.com/d3/d3-geo#geoBounds) — but we struggled to understand what was this _centroid_ coordinate, which `d3-geo` returned us; it did not seem to wrap nicely all of our areas (some of them stayed outside our _bounding sphere_, when centered on the _centroid_);
* lost some time with the `proj.center()` method, to try to center our sphere on the _centroid_ of the areas, until we remembered what we had already discovered two weeks ago — namely to use the `.rotate()` method for this effect.

## Post-study

* centered the sphere with the `proj.rotate()` method, on the _center of the rectangular bounding box_ of all areas, instead of their _centroid_.

## See also

* [#499](https://github.com/gongfuio/sessions/issues/499#issuecomment-984151455) Previous feedback
* [#501](https://github.com/gongfuio/sessions/issues/501#issuecomment-989280143) Next feedback

[olange](https://github.com/olange) | 2021-12-01


