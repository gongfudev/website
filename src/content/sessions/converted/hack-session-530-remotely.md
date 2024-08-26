---
title: Hack Session 530 ✼ Remotely (c)
publishDate: 2022-06-22
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 29.06.2022

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #530 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuio/events/djhhvsydcjbmc/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [Learning GUN.eco](https://github.com/olange/learning-gun) a peer-to-peer distributed graph — @olange and @rudifa

### Feedback

* See [comment here below](#issuecomment-1176576784)

### See also

* #529 Previous session
* #531 Next session

[olange](https://github.com/olange) | 2022-06-22

<hr/>

## Feedback on @olange and @rudifa's session

We spent the evening quietly reading and learning the API of GUN.eco, trying bits of code and discussing our possible use cases:

1. [GUN API › Core](https://gun.eco/docs/API#-core-api-): `Gun()`, `put()`, `get()`
2. [GUN API › Main](https://gun.eco/docs/API#-main-api-): `set()`, `map()`, `on/once()`
3. [GUN API › Extended](https://gun.eco/docs/API#-extended-api-): `path()`, `not()`, `later()`
3. [GUN API › Core (again)](https://gun.eco/docs/API#-extended-api-): `opt()`

We felt again a bit lost in the ton of documentation, that seems to be aggregated from numerous conversations: wording/naming is not always consistent, code snippets are often themselves documentation, and some idioms find no matching documentation.

For instance, the idiom `this.map().val()` is found in the examples ⟵ where is `val()` described? Another example: `gun.user().is.pub` that is found in examples ⟵ where is `user()` defined? where is the `.is` property described? It is succinctly described in the User API, but not exposed in its navigation as an entry, so we only accidentally found it, while scrolling and reading thru everything; and we were still left to wonder whats is the `.is.pub` property, second-guessing whether it is the public key of the user or something else — but we have not understood SEA yet and only wanted to know where it would be defined.

And again, starting Gun is different in every possible context: `const Gun = require('gun/gun')` triggered an `Uncaught ReferenceError: Gun is not defined` cryptic error in Node REPL, why? Well, we had to figure it out — hint: `var Gun = require('gun/gun')` or `const GUN = require('gun/gun')` work, so variable hoisting in global scope was the issue, but then, the actual solution was `const GUN = require('gun')` or `const GUN = require('gun/gun'), SEA = require('gun/sea')` — when we were just trying things out in the REPL. Every time we start something new, or restart after a break of a week, we run in this issue.

Rudi asked whether we were in the right spot. I argued it has great fit to our use cases (in-memory graph and graph traversal API + streaming features + _peer-to-peer_ synchronisation + authentication and user-owned space + small memory footprint) and suggested we should read the docs fully to get a better overview, then decide.

## Post-session study

I remembered Redis' small memory footprint, great performance and success we had using it in a web app we developed in 2016. I also knew there was RedisGraph and Redis was developing cluster features, so I wondered if the Redis + RedisGraph stack still had a small memory footprint; if there was something that would allow for the _peer-to-peer_ synchronisation of a cluster of Raspberry Pi 4, without Internet access; optionally, I wondered how much the tooling would be of a help. So:

* I spinned a [Redis+RedisGraph container](https://app.redislabs.com/#/login) on Google Cloud Platform;
* Installed the [RedisInsight](https://developer.redis.com/explore/redisinsightv2/getting-started) desktop app and explored my cloud database instance;
* I read the tutorial «[Getting Started with Knowledge Graphs in RedisGraph](https://redis.com/blog/getting-started-with-knowledge-graphs-in-redisgraph/)» (by Alex Milowski, 22.06.2020) and explored the samples available within RedisInsight.

## See also

* [#534](https://github.com/gongfuio/sessions/issues/534#issuecomment-1198135794) Next feedback
* [#529](https://github.com/gongfuio/sessions/issues/529#issuecomment-1164293794) Previous feedback

[olange](https://github.com/olange) | 2022-07-06

<hr/>

About the documentation of GUN.eco, this might be a possible explanation of why we had the feeling of being lost in the documentation while getting started; here is an excerpt from [GUN › Docs › Bounty › Documentation](https://gun.eco/docs/Bounty#documentation):

> « Our first goal is to reward improvements to the documentation, so more people can know and understand how GUN works. This is our philosophy:
>
> Mark is [BDFL](https://en.wikipedia.org/wiki/Benevolent_dictator_for_life), and uses a socratic discipleship approach to educating people.
> This means that people get personalized, detailed help to their questions.
> The goal is that this equips people with nuance and comprehension, not robotic copy&paste behavior.
> However, it also locks up that information in the [chatroom](https://gitter.im/amark/gun) in ways that are harder for new people to access.
>
> To date, we have had a 10% or less success rate in getting the person who asked the question to copy it and the answer to StackOverflow or the documentation. Our conclusion from this failure is somewhat obvious:
>
> _Observation_: Content curation is a menial task that nobody wants to do.
> 
> Open Source is great, and inevitably all software will become Open Source (that is, software wants to be free) at some point due to economic pressure over time. However, it is clear that because menial tasks do not require creativity and give contributors autonomy, it may be better to reward through monetary means. »

The excerpt inspires me following comments:

1. The chatroom seems to play an important role in learning GUN.eco (and we did not pop up there, as we're quietly reading from the docs, and not productively using GUN yet);
2. The documentation is indeed an aggregate of various contributions, possibly largely driven by question and answers, which originated in the chatroom, and only 10% of this knowledge was backported to the docs;
3. Considering documentation as a _menial task_, that does not require creativity, is a weird statement and, IMO, contradicts  the first goal, stated at the beginning of the excerpt: helping developers learn something thru documentation requires not only careful content curation, but essentially also a pedagogic project and oversight.

The docs are a bazaar currently for us newcomers, that we're not even much interested to contribute, because it seems to be about to get a major rewrite — or none, and project here is unclear. Who would invest time in such context? No one, and not because it is a _menial task_ — and it is not — but because the documentation project seems to lack governance.

Also, getting things to work in our ES2018+Web Components environment was tedious, importing the various parts of GUN did not work at first, because GUN needs to be loaded synchronously and it was stated nowhere. Paradoxically, this is also why we did not pop in the chatroom — as it was expected it should run in no time. I felt frustrated and did not want to pop in a chatroom with such feeling and no result («hi, my name is O, bootstrapping of GUN was an horror for me and I still don't know what GUN is, I was only remembered jQuery and CommonJS-style module loading, but I guess, once I'll overcome the first steps and my feelings, I'll like GUN's features and will then have something interesting to ask– see-you later then»).

Anyway, let's try to learn it, now that we came there; its API is small, by reading everything twice, we should get it.

_Update_: I went on, read the [GUN › Docs › Bounty › Documentation](https://gun.eco/docs/Bounty#documentation) again and watched the «[The surprising truth about what motivates us](https://www.youtube.com/watch?v=u6XAPnuFjJc)» short movie by RSAnimate, from Dan Pink's talk, 01.04.2010: there are so many considerations there and the discussion leaves me confuse, about the state of the documentation and the desire of the author of GUN; he seems not be driven by adoption of GUN's technology, but more about mediating its design and his thinking, for others to join him in developing it; it seems a strong investment is implicitly asked. Ok, may be I'm rambling. Let's go back to the docs. But honestly, I get a lot distracted by _meta_ thinking while reading its various bits.

[olange](https://github.com/olange) | 2022-07-06


