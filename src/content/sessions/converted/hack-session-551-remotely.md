---
title: Hack Session 551 ✼ Remotely (c)
publishDate: 2022-11-21
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 23.11.2022

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #551 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuio/events/289527198/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• Embedding of [Cesium.js](https://cesium.com/platform/cesiumjs/) viewer in a [Lit component](https://github.com/rudifa/cesium-demo) and geospatial visualizations for the web — @olange and @rudifa

### See also

* #550 Previous session
* #552 Next session

[olange](https://github.com/olange) | 2022-11-21

<hr/>

## Feedback on @olange & @rudifa's session

### Review

* Review of latest changes to Rudi's [cesium-lit-demo](https://github.com/rudifa/cesium-lit-demo) ([deployed on Netlify](https://cesium-lit-demo.netlify.app))
* Review of the legacy Borland Pascal source code of _LexSem_, an _inédit_ text parser and B-tree based full text search engine — we got lost along our way in this 1991–1993 codebase.

### Discussion: possible models of a `<cesium-viewer>` web component

* Discussion on possible _models_ for a [`<cesium-viewer>` web component](https://github.com/CesiumGS/cesium/issues/10876):
* Comparison of the models of:
  1.  the [`<model-viewer>`](https://modelviewer.dev/examples/scenegraph/) web component, with a rich flat API on a _single_ element, allowing compound and interpreted values in its attributes (such as `calc()` CSS function, or triples of angles expressed in either rad or deg) …
  2. … vs the [`<video>`](https://developer.mozilla.org/fr/docs/Web/HTML/Element/video) HTML standard element, which has the `<source>` _coupled subelements_ …
  3. … vs a set of [`<three-app/scene/camera>`](https://github.com/petitatelier/three-web-components) _coupled/collaborative web components_, with a simple high-level API (allowing many scenes and scene graph, many cameras and rich controls – OSC, orbiter) …
  4. … vs a set of [Resium](https://resium.reearth.io/components/Viewer) _coupled/collaborative/embedded web components_, which extensively exposes and translates the API of Cesium as a declarative model — a possibly complicated one, which calls for a (missing) schema (à la XML/XSD), to show their possible and valid combinations.

### Source code exploration

* Exploration of the [source code of the `<model-viewer>`](https://github.com/google/model-viewer/blob/master/packages/model-viewer/src/model-viewer-base.ts) web component, namely its usage of the Lit/ReactiveElement as its base, its `debounce()` and `resizeObserver` functions, and its usage of Symbols.
* Exploration of the [source code of the `<three-app/scene/camera>`](https://github.com/petitatelier/three-web-components/tree/master/packages/three-app), namely how the various components discover each other and register with each other — one has to remind that the browser does not guarantee the order of instantiation follows the hierarchy of the DOM!
* Exploration of the source code of the [data-streams/osc-client|bridge](https://github.com/petitatelier/data-streams/tree/master/packages), the [OSC protocol](https://opensoundcontrol.stanford.edu) and its (infinite) applications — used by the [OSC controller](https://github.com/petitatelier/three-web-components/blob/master/packages/three-camera/three-camera-osc-controller.js) of the [`<three-camera>`](https://github.com/petitatelier/three-web-components/tree/master/packages/three-camera) sub component, to control its position from an external device.

## Post-study

* Study of platforms supported by [Unreal Engine 5 (UE5)](https://www.unrealengine.com/fr/unreal-engine-5) and [Cesium for UE5](https://cesium.com/learn/unreal/)
* Read the history of [Epic Games](https://en.wikipedia.org/wiki/Epic_Games) on Wikipedia
* Read the announcement of about [_Tomb Raider_ being now developed with UE5 by Crystal Dynamics](https://en.wikipedia.org/wiki/Tomb_Raider#Technology) — instead of Crystal Dynamic's own engine.

## Further study

* Suggesting to build a web component delivering UX (rather than DX), to further discover the Cesium API.
* For instance, build a [Flight Tracker](https://cesium.com/learn/cesiumjs-learn/cesiumjs-flight-tracker/) based on FlightRadar data…
* … or add hotspots, labels and drawings within the scene graph of the Cesium viewer
* … or whatever exercising the Cesium API and exploring its examples.

## See also

* [#566](https://github.com/gongfuio/sessions/issues/566#issuecomment-1461680189) Next feedback
* [#550](https://github.com/gongfuio/sessions/issues/550#issuecomment-1314993768) Previous feedback


[olange](https://github.com/olange) | 2022-11-22


