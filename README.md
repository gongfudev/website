# Gōng-fu DEV website

Website of Gōng-fu DEV meetup, rewritten as a progressive web app (PWA).

For our current productive website, visit the [gongfudev.github.com](https://github.com/gongfudev/gongfudev.github.com) repository.

## Status

👾 Design. Work-in-progress.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## License

Distributed under the Apache-2.0 license. See [LICENSE](LICENSE) for details.

# Status of the [fork by rudifa](https://github.com/rudifa/gongfudev-website)

| Branch          | Purpose / usage                                  |
| :-------------- | :----------------------------------------------- |
| main            | kept in sync with the [upstream](https://github.com/gongfudev/website.git) |
| dev-rudifa      | work in progress, published on [vercel](https://gongfudev-website.vercel.app/sessions/) |

## Branch dev-rudifa: current features

### website

The `sessions` page displays a sampling of session cards that reproduce the content of the corresponding [session](https://github.com/gongfudev/sessions) issues.

### updating the website

This project has two node scripts used for the development of the website and updating from [session](https://github.com/gongfudev/sessions) data.

1. fetch data and save locally:

```
gongfudev-website % scripts/fetch-repo-issues.js -s
```

2. convert the most recent 20 sessions data to astro .md files:

```
gongfudev-website % scripts/convert-to-md.js -n 20
```

Each script has a few options helpful in the development and testing work.

```
gongfudev-website % scripts/fetch-repo-issues.js -h

This script fetches issues from the specified github repo and saves them to a f
ile or prints them to stdout, in JSON format.

Options:
      --version    Show version number                                 [boolean]
  -c, --commented  Fetch only commented issues                         [boolean]
  -i, --invert     Invert the order of issues                          [boolean]
  -l, --log-rate   Log rate limit data from GitHub API                 [boolean]
  -r, --repo       Specify the repo               [string] [default: "sessions"]
  -o, --owner      Specify the repo owner        [string] [default: "gongfudev"]
  -s, --save       Save the fetched issues to src/data/issues.json     [boolean]
  -h, --help       Show help                                           [boolean]
```

```
gongfudev-website % scripts/convert-to-md.js -h

This script converts GitHub issues to markdown files.

Options:
      --version  Show version number                                   [boolean]
  -i, --issue    Convert ith issue                         [number] [default: 0]
  -n, --number   Convert first n issues                    [number] [default: 0]
  -v, --verbose  Run with verbose logging                              [boolean]
  -h, --help     Show help                                             [boolean]
```
