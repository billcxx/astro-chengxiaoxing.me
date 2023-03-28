# My personal website

This site is created starting from Astro Starter Kit: Basics

```
npm create astro@latest -- --template basics
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                           |
| :------------------ | :----------------------------------------------- |
| `pnpm install`      | Installs dependencies                            |
| `pnpm dev`          | Starts local dev server at `localhost:3000`      |
| `pnpm build`        | Build your production site to `./dist/`          |
| `pnpm preview`      | Preview your build locally, before deploying     |
| `pnpm astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro --help` | Get help using the Astro CLI                     |

```sh
pnpm dlx husky-init && pnpm install
npx husky add .husky/pre-commit 'pnpm prettier && git add -A .'
```

```sh
pnpm install -g wrangler
export CLOUDFLARE_ACCOUNT_ID=xxxx
pnpm run deploy # the page
```

If we want to have SSR with Astro + cloudflare pages and page function, see instructions here https://github.com/natemoo-re/astro-icon/issues/35. I have tried and it works, the only problem is I want the sign up component to be in the footer this will cause every page to be SSR instead of static.

Since my need is very simple, so probably is separate work is easier and more elegant.
