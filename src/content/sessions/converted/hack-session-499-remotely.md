---
title: Hack Session 499 ✼ Remotely (c)
publishDate: 2021-11-10
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 24.11.2021

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #499 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuIO/events/sdgdfsyccpbgc/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [‹Distributed Arcade›](https://github.com/olange/arcade) Game World & Boards with H3 & hex-coordinate systems — @olange and @rudifa

### See also

* #498 Previous session
* #500 Next session

[olange](https://github.com/olange) | 2021-11-10

<hr/>

## Feedback on study of @olange and @rudifa

Continued working on our [‹h3-minimap› web component](https://observablehq.com/@olange/h3-minimap) in ObservableHQ:

* selected a set of projections from the [Projection Comparison](https://observablehq.com/@d3/projection-comparison) notebook;
* started to embed the [Worldmap (SVG)](https://observablehq.com/@d3/world-map-svg#path) notebook code in a Web Component; struggled to get the projection function working; studied [d3-geo › Projections](https://github.com/d3/d3-geo#projections) source code.

## Post-study

* fixed the projection constructor function — it simply needed an additional invocation, before being used;
* added caching of the various intermediate functions and compound objects;
* added scaling of the projection.

## See also

* [#498](https://github.com/gongfuio/sessions/issues/498#issuecomment-984152481) Previous feedback
* [#500](https://github.com/gongfuio/sessions/issues/500#issuecomment-984143254) Next feedback

[olange](https://github.com/olange) | 2021-12-01


