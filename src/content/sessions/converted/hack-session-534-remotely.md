---
title: Hack Session 534 ✼ Remotely (c)
publishDate: 2022-07-27
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 27.07.2022

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #534 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuio/events/dzfrvsydckbkc/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [Learning Gunnery.js — GUN made easy](https://github.com/olange/learning-gun) a peer-to-peer distributed graph and protocol (with an admittedly weird name, we would not have chosen) — @olange and @rudifa

### Feedback

* See [comment here below](#issuecomment-1198135794)

### See also

* #533 Previous session
* #535 Next session

[olange](https://github.com/olange) | 2022-07-27

<hr/>

## Feedback on @olange and @rudifa's session

We spent the evening in a discussion with Marc, who joined us after a year without meeting together, and we did an improvised recap of our [D-Arcade project](http://github.com/olange/arcade/) and our various experiments and studies, in the fields of [Hexagrids, H3, D3, Web Components and GUN](https://observablehq.com/collection/@olange/gong-fu-i-o).

## Post-session study

After the session, I spent more 2 hours trying out the quick examples of [gunnery.js]() in a new [@olange/playing-with-gunnery-js](https://observablehq.com/@olange/playing-with-gunnery-js) Observable notebook. Two observations:

* Gunnery.js bundles GUN and SEA in a library of its own, which can be easily imported as an ES module from Observable; to import in Observable, I used the version of [bundled and published by Skypack](https://www.skypack.dev/view/gunnery);
* Gunnery.js makes it very easy to use the API of SEA;
* however its API comes with its own _idioms_ and will need more study and experiments; there are some parts I did not understand and its documentation is quite sparse on those bits, that are harder to understand; for instance, what would be the use of the following idiom?  
  
    ```javascript
    // Save frozen data with hash, hash will be appended to the last key
    await db.gput(data, "#", "", {hash: true})
    await db.gput(data, "#inbox", "2021/August#", {hash: true})
    ```

The [Introduction to GUN](https://gun.eco/docs/Introduction) tells us this about _Frozen space_:

> [**Frozen Space**](https://gun.eco/Frozen). This data cannot be changed or removed, only added to. Nobody owns this data.
>
> **Note**: If nobody stores the data it may be forgotten, if the peers that store it are offline the data may not be found until they are online again. This is true of data in any space though.

And the [Content-Adressing](https://gun.eco/Content-Addressing) documentation of GUN tells us the following about a _hash_ in its context:

> A **hash** is a short yet unique "fingerprint" (see the [cartoon explainers](https://gun.eco/Cartoon-Cryptography)) of your data. It can be used as a name that is self-referencing to itself, frozen at some point in time. For instance, if the data were to change, then it would also get a new name.
>
> This is useful, because it lets you verify that data has not been changed even if it is in a public place. And using [SEA](https://gun.eco/SEA) with GUN, it prevent peers from changing the data if some name/key combo of '`#`'+hash is used.
>
> Note: This does not guarantee peers will keep the data saved though, they might expire it over time.

But why the hash in the keys of the `db.gput(data, "#", "", {hash: true})` idiom? Naming convention? Optional, or mandatory? Why are they needed, when there is the `{hash: true}` option?

One of many questions. May be I'll break the notebook in various individual experiments, in a future session, to better figure out the _use cases_ of those idioms.

## See also

* [#536](https://github.com/gongfuio/sessions/issues/536) Next feedback
* [#530](https://github.com/gongfuio/sessions/issues/530#issuecomment-1176576784) Previous feedback

[olange](https://github.com/olange) | 2022-07-28


