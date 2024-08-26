---
title: Hack Session 569 ✼ Remotely (c)
publishDate: 2023-03-29
img: /assets/stock-1L.jpg
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |

tracks: []
technos: []
audiences: []
---

## 29.03.2023

Wrap-up of our [Gōng-fu I/O Weekly · Hack Session #569 ✼ Remotely ✼](https://www.meetup.com/fr-FR/gōngfuio/events/291797728/) meetup.

### Projects

• [‹Bouboucle›](http://bouboucle.com) generative art with Javascript — @andreaskundig and @david-hodgetts 
• [Charm.sh](https://charm.sh) and [GitHub Copilot](https://github.com/features/copilot) — @olange, @rudifa and @SabrinaFiore

### See also

* #568 Previous session
* #570 Next session

[olange](https://github.com/olange) | 2023-03-29

<hr/>

## Feedback on session #569 of @olange et @rudifa

Spent the evening exploring the Charm apps, librairies and command-line tools:

* we SSHed into [Soft Serve](https://github.com/charmbracelet/soft-serve), a self-hostable Git server for the command line, and admired its polished, coloured and very usable TUI;
* then installed [Skate](https://github.com/charmbracelet/skate), a personal end-to-end encrypted key-value store; we linked our two computers to the same store on the Charm Cloud, and synced our mutual updates;
* we went thru all Charm libs, [BubbleTea](https://github.com/charmbracelet/bubbletea), [Bubbles](https://github.com/charmbracelet/bubbles), [Lip Gloss](https://github.com/charmbracelet/lipgloss), [Glamour](https://github.com/charmbracelet/glamour), [Log](), [Harmonica]() and [Wish](https://github.com/charmbracelet/wish), to understand they were really in Go, and we could not do anything about it, however we realised:
  * the UX of this TUI is amazing – its accessible, readable, beautiful and engaging;
  * Wish's proposal of using SSH as a protocol to connect to TUI apps is straightforward yet uncommon; try this:  
    ```shell
    # Jump directly to a repo in the TUI
    ssh git.charm.sh -t soft-serve
    
    # Print out a directory tree for a repo
    ssh git.charm.sh ls soft-serve
    ```
* installed [Whishlist](https://github.com/charmbracelet/wishlist) and tried to understand how Wish apps where installed;
* installed [Gum](https://github.com/charmbracelet/gum) and could not stop chewing; seriously:

```shell
gum spin --spinner dot --title "Buying Bubble Gum..." -- sleep 5
gum confirm && rm file.txt || echo "File not removed"
git log --oneline | gum filter | cut -d' ' -f1 | pbcopy
```

The quality of design is generally awesome: its simplicity, clarity, accessibility; it's graphically engaging; and the architecture of the library, the richness of the CLIs are one pleasant surprise after an other.

We wondered what JS ports or alternatives would be available! no ports, Charmbracelet's goodness seems unique to the Go community. As an ersatz to Gum, we peeked into [Netlify CLI](https://github.com/netlify/cli) to see which library it uses, to discover it is [SBoudrias//Inquirer](https://github.com/SBoudrias/Inquirer.js).

## See also

* [#574](https://github.com/gongfuio/sessions/issues/574#issuecomment-1534374365) Next feedback
* [#567](https://github.com/gongfuio/sessions/issues/567#issuecomment-1479990388) Previous feedback


[olange](https://github.com/olange) | 2023-03-29


