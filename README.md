# elizabeth cay — portfolio

A minimal personal site + blog, built with [Astro](https://astro.build).
Static, fast, and theme-aware (light/dark, remembered per visitor).

## Stack

- **Astro 7** — static site generation, zero JS shipped except the theme toggle
- **Content Collections** — Markdown blog posts with typed frontmatter
- Plain CSS (no framework), Inter via Google Fonts

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static site to ./dist
npm run preview  # serve the built site locally
```

## Editing content

Almost everything on the home page lives in one file:

- **`src/data/profile.ts`** — name, intro, social links, and the
  `experience`, `extracurriculars`, and `projects` lists. Edit here; the page
  updates automatically.
- **Social links** are the `# ` placeholders in `profile.ts` under
  `profile.links` — swap `github` and `linkedin` for your real profile URLs.
  Email is already set to `caye@mcmaster.ca`.

### Blog posts

Add a Markdown file to `src/content/blog/`. Frontmatter schema
(`src/content.config.ts`):

```md
---
title: my post title
description: a one-line summary (optional)
date: 2026-09-15
draft: false        # set true to hide it from the site
---

your markdown here…
```

The file name becomes the URL slug (`my-post.md` → `/blog/my-post/`). The three
most recent posts also surface under "reading & writing" on the home page.

## Assets

Images live in `public/assets/` and are referenced by absolute path
(e.g. `/assets/flower_icon.jpeg`). The avatar and favicon are set in
`profile.ts` and `src/layouts/BaseLayout.astro` respectively.

## Deploy

`npm run build` produces a fully static `dist/` — deploy it to any static host
(Netlify, Vercel, Cloudflare Pages, GitHub Pages). Set your real domain in
`astro.config.mjs` under `site`.
