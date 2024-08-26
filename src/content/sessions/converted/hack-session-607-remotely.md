---
title: Hack Session 607 ✼ Remotely (c)
publishDate: 2023-12-20
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 20.12.2023

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #607 ✼ Remotely ✼](https://www.meetup.com/gōngfuio/events/297685391/) meetup.

### Projects

• [Lit Labs › Signals](https://www.npmjs.com/package/@lit-labs/preact-signals) — @olange and @rudifa
• [Flutter](https://flutter.dev) — @andreaskundig

### See also

* #606 Previous session
* #608 Next session

[olange](https://github.com/olange) | 2023-12-20

<hr/>

## Feedback on session #607 of @olange and @rudifa

Nos observations de ce soir:

* [`SignalWatcher()` **mixin**](https://github.com/lit/lit/blob/main/packages/labs/preact-signals/src/lib/signal-watcher.ts) déclenche un `requestUpdate()` pour tout changement à un signal quelconque (i.e. y compris ceux qui ne seraient pas considérés dans le `render()`);
* [`watch()` **directive**](https://github.com/lit/lit/blob/main/packages/labs/preact-signals/src/lib/watch.ts) et [`with-watch()` **tag**](https://github.com/lit/lit/blob/main/packages/labs/preact-signals/src/lib/html-tag.ts) ne déclenchent un `requestUpdate()` que pour le signal qui est considéré dans le `render()`;
* `@preact/signals-core/subscribe()|peek()` font ce qu’on souhaiterait, càd. refléter la valeur d’un signal dans une propriété d'un composant web et déclencher le `render()` à partir de ce changement à la propriété, plutôt que directement, comme les deux précédentes approches.

Nous avons aussi parlé de, entre autres:

* CUE
* C++ et du challenge la digitalisation de signaux analogiques à très haute fréquence (10 Ghz)
* [Georg Kantor](https://fr.wikipedia.org/wiki/Georg_Cantor) et différents _infinis_, et du livre [One Two Three Infinity](https://archive.org/details/OneTwoThreeInfinity_158/page/n7/mode/2up) de George Gamov
* 2^64

## See also

* [#619](https://github.com/gongfudev/sessions/issues/619#issuecomment-1996004598) Next feedback
* [#603](https://github.com/gongfuio/sessions/issues/603#issuecomment-1823615002) Previous feedback

[olange](https://github.com/olange) | 2023-12-20


