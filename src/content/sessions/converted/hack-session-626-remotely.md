---
title: Hack Session 626 ✼ Remotely (c)
publishDate: 2024-04-24
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks:
  - Astro content collections
techno:
  - astro
  - vercel
audience:
  - Dev
---

## 01.05.2024

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #626 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuio/events/300357083/) meetup.

### Projects

• [GitHub › GraphQL API › Export issues and comments of @gongfudev/sessions](https://github.com/rudifa/astro-gfio-sessions-comments) — @olange and @rudifa  
• [Flutter](https://flutter.dev) — @andreaskundig and @david-hodgetts

### See also

* #625 Previous session
* #627 Next session

[olange](https://github.com/olange) | 2024-04-24

<hr/>

Reviewed with @rudifa the ETL pipeline he built to query all issues with comments thru GitHub's GraphQL API, and transform them to individual HTML fragments.

[olange](https://github.com/olange) | 2024-05-01

<hr/>

The [prototype project](https://github.com/rudifa/astro-gfio-sessions-comments) fetches the Hack Session data via [github graphql](https://api.github.com/graphql) and uses the [marked.js](https://marked.js.org/) package to convert the markdown data fragments to HTML in Astro components.

[rudifa](https://github.com/rudifa) | 2024-05-06

<hr/>

Renamed the prototype project to [astro-gfio-sessions](https://github.com/rudifa/astro-gfio-sessions-comments.git) and published it on [netlify](https://astro-gfio-sessions.netlify.app/).

[rudifa](https://github.com/rudifa) | 2024-05-07


