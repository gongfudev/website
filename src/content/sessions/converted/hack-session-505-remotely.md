---
title: Hack Session 505 ✼ Remotely (c)
publishDate: 2021-12-29
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 05.01.2022

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #505 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuIO/events/cgptqsydccbhb/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [‹Distributed Arcade›](https://github.com/olange/arcade) Game World & Boards with H3 & hex-coordinate systems — @olange and @rudifa

### See also

* #504 Previous session
* #506 Next session

[olange](https://github.com/olange) | 2021-12-29

<hr/>

## Feedback on @olange and @rudifa's session

### Future work

Reflecting upon last year's recent sessions, we discussed directions for our upcoming sessions:

1. Finishing the work started in ObservableHQ, that is, building ‹game-world› and ‹game-board› web components (rendering in SVG), to be able to mock our game and support ideation and game design
2. Start mockup from scratch with Figma
3. Study the sync the game state peer-to-peer, using an in-memory lightweight distributed database such as GUN.

We decided finishing what was started last year in Observable, but converting the components to standalone ones based on the Lit starter template. This is the most expensive option, which will require us to set time aside our sessions.

### Clojure, ClojureScript and hand-drawing

We also discussed [Clojure](https://clojure.org/guides/getting_started), [ClojureScript](https://clojure.org/guides/getting_started), which I restarted studying during the EOY break, following a series of podcasts I listened to, while wood-working in the garage on a bed for our little one.

As well as tools for drawing by hand, in 2D and 3D, as I restarted drawing a sketch of the arcade table setup I envision, with the [uMake app](https://apps.apple.com/app/umake/id1042246861) on my iPad. I quickly presented older drawings from my [olange/shapes](https://github.com/olange/shapes/blob/master/docs/usage/unity/coquelicot/README.md) repo.

## Post-session study by @olange

Reinstall of Clojure on my notebook:

* Installation of [OpenJDK 17](https://formulae.brew.sh/formula/openjdk) and [clojure/tools/clojure](https://clojure.org/guides/getting_started#_installation_on_mac_via_homebrew) with Homebrew
* Installation of [Babashka](https://github.com/babashka/babashka#installation) with Homebrew and played with examples from the [Babashka Book](https://book.babashka.org)
* Installation of [Clojure Calva](https://marketplace.visualstudio.com/items?itemName=betterthantomorrow.calva) extension for VS Code, fired up the «Getting started» REPL and played a bit with it

Random walk in the Clojure-_verse_:

* Study of [Clojure Reader Conditionals (aka CLJC)](https://clojure.org/guides/reader_conditionals#_cljx)
* Quick overview of [repl.it](https://replit.com/)
* A refreshing tour of the [Clojure Toolbox](https://www.clojure-toolbox.com) and of [ClojureWerkz](http://clojurewerkz.org) — I got lost in [aleph](https://github.com/clj-commons/aleph), [manifold](https://github.com/clj-commons/manifold) and [sente](https://github.com/ptaoussanis/sente)
* Overview of [babashka/obb](https://github.com/babashka/obb/) CLJS scripting of Mac apps and [babashka/nbb](https://github.com/babashka/nbb) CLJS scripting on Node.js — got lost in the [#retrocomputing #aestetic tweets](https://twitter.com/c64core) of [chr15m/c64core](https://github.com/chr15m/c64core) twitter bot
* Browsed [Clojure for the Brave and True](https://www.braveclojure.com/zombie-metaphysics/) book by Daniel Higginbotham

It's been a while! tooling has wonderfully evolved since 2013.

## See also

* [#502](https://github.com/gongfuio/sessions/issues/502#issuecomment-995340436) Previous feedback
* [#512](https://github.com/gongfuio/sessions/issues/512#issuecomment-1049279776) Next feedback

[olange](https://github.com/olange) | 2022-01-05


