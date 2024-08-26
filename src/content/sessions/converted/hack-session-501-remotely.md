---
title: Hack Session 501 ✼ Remotely (c)
publishDate: 2021-12-01
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 08.12.2021

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #501 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuIO/events/282001731) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [‹Distributed Arcade›](https://github.com/olange/arcade) Game World & Boards with H3 & hex-coordinate systems — @olange and @rudifa

### See also

* #500 Previous session
* #502 Next session

[olange](https://github.com/olange) | 2021-12-01

<hr/>

## Feedback on study of @olange and @rudifa

Worked on a [‹h3-game-world-start› notebook](https://observablehq.com/@olange/h3-game-world-start) in ObservableHQ and implemented a trivial search function, to automatically define the initial coordinate of a new _game board_ in our _game world_. The coordinates of every _game board_ in our _game world_ is determined by its H3-index — that is, an hexagonal or pentagonal area, subdividing the earth.

### Trivial algorithm

More specifically, given a collection of areas occupied by existing _game boards_, the algorithm finds the first free adjacent area to any of the game boards.

We used the [`h3.kRing( h3Index, k)`](https://h3geo.org/docs/api/traversal#kring) function from H3's API, which finds neighbours being either pentagonal or hexagonal areas — after we discovered that [`h3.hexRanges( h3Indexes, k)`](https://h3geo.org/docs/api/traversal#hexranges) was not available in the JS implementation; and that [`h3.hexRing( h3Index, k)`](https://h3geo.org/docs/api/traversal#hexring) would bail out, if the origin or one of the neighbours was a pentagonal area.

```javascript
function findFreeArea( areas) {
  const firstFreeArea = [];
  for( const area of areas) {
    const neighbours = h3.kRing( area, 1); // 6-7 neighbours, including the origin area
    const freeNeighbour = neighbours.find(( neighbour, i) => {
      return i > 0 // omit origin area, which is included by kRing (at k-ring 0)
          && !areas.includes( neighbour); // neighbour should not match any other area
    });
    if( freeNeighbour) {
      firstFreeArea.push( freeNeighbour);
      break;
    }
  }
  return firstFreeArea;
}
```

### Further work

So far, it does not handle the case where there would be no free adjacent area. In that case, we would need to increase the H3 resolution — that is, how the earth sphere is subdivided — to increase the number of areas available.

But before addressing this issue of increasing the number of available areas, we need to address another question: how will we convey the notion of _its adjacency_ to every game board (its neighbours)? and what about updates to the _game world_, during game play (that is, new adjacent/neighbouring _game boards_)?

## See also

* [#500](https://github.com/gongfuio/sessions/issues/500#issuecomment-984143254) Previous feedback
* [#502](https://github.com/gongfuio/sessions/issues/502#issuecomment-995340436) Next feedback

[olange](https://github.com/olange) | 2021-12-08


