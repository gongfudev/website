---
title: Hack Session 502 ✼ Remotely (c)
publishDate: 2021-12-08
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 15.12.2021

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #502 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuIO/events/vfptqsyccqbtb/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [‹Distributed Arcade›](https://github.com/olange/arcade) Game World & Boards with H3 & hex-coordinate systems — @olange and @rudifa

### See also

* #501 Previous session
* #503 Next session

[olange](https://github.com/olange) | 2021-12-08

<hr/>

## Feedback on study of @olange and @rudifa

### Session

To allow representation of different sets of H3 coordinates with different colours, we tried to pivot the input type of the `areas` attribute of our [‹h3-minimap› web component](https://observablehq.com/@olange/h3-minimap) from an _array_ to a _hashmap of arrays_, in the form:

`{ "label": [ h3, h3, … ], "other label": [ h3, h3, … ]}`

We started to transform the input hashmap to an _array_ of GeoJSON `FeatureCollections` and ended up stuck with that output array, as it is not a valid GeoJSON object anymore and we can't apply `d3.geoBounds()` or `d3.centroid()` on that structure — which would the require a full rewrite.

Realized afterwards that we should probably use an input _array of hashmaps_ in the form `[ { "area": h3, "properties": { "stroke": "#ccc" } ]` and map each of those _hashmaps_ to individual `Feature` GeoJSON objects; and then change a bit the SVG rendering of the enclosing `FeatureCollection`, to add styling to every `Feature` — i.e. don't call `path()` on the `FeatureCollection` as we do now, but repeatedly on each `Feature`.

### Post-study

* Study of [GeoJSON](https://datatracker.ietf.org/doc/html/rfc7946) specification (RFC 7946)
* Study of version 4 of [H3geo API](https://h3geo.org/docs/next/library/migration-3.x/functions/)
* Study of [D3-Geo in depth](https://www.d3indepth.com/geographic/)
* Various tests with [geojson.io](http://geojson.io/)

## See also

* [#501](https://github.com/gongfuio/sessions/issues/501#issuecomment-989280143) Previous feedback
* [#505](https://github.com/gongfuio/sessions/issues/505#issuecomment-1006133946) Next feedback

[olange](https://github.com/olange) | 2021-12-16


