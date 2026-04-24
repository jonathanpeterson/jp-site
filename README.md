# jonathan-peterson.com

Personal site for Jonathan Peterson — product leader, technologist, enthusiastic dance music DJ.

Built in public as a vibe coding project. The full story of how this was built and why is at [jonathan-peterson.com/writing/history-of-this-site/](https://jonathan-peterson.com/writing/history-of-this-site/). The original site charter (audiences, tone, IA, content principles) is at [jonathan-peterson.com/writing/website-charter/](https://jonathan-peterson.com/writing/website-charter/).

## Stack

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | [Astro](https://astro.build/) | Component model with no theme layer — the HTML written is the HTML that ships |
| Styling | [Tailwind CSS](https://tailwindcss.com/) + custom CSS | Utility classes for layout, CSS custom properties for the color scheme |
| Content | Markdown files in `src/content/` | No CMS, no database — local files are draft, pushed to git is live |
| Hosting | [GitHub Pages](https://pages.github.com/) | Free, no build minute limits, Actions-based deploys on push |
| RSS | `@astrojs/rss` | Feeds at `/rss.xml`, `/writing/rss.xml`, `/dj/rss.xml` |

Previous iterations went through Ghost on GCP, Hugo + PaperMod on Netlify, Hugo + Congo on GitHub Pages, and briefly Astro + Keystatic before the CMS was abandoned entirely.

## Structure

```
src/
  content/
    writing/       # Blog posts and long-form writing
      history/     # Career and site history posts
      personal/    # Personal essays
    dj/            # DJ set notes and mix reviews
    pages/         # Static page content (about, portfolio, etc.)
  pages/           # Astro page routes
  components/      # Astro components
  styles/          # global.css + scheme.css (color tokens)
  utils/           # Collections helpers, remark footnotes plugin
public/            # Static assets (images, favicon, manifests)
```

## Local Development

```bash
npm install
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to dist/
```

## Content

Posts are markdown files. Add a file to `src/content/writing/` or `src/content/dj/` and push — it's live. Frontmatter fields:

```yaml
---
title: "Post title"
description: "Optional description for feed and meta"
date: 2026-04-21
tags: ["tag1", "tag2"]
---
```

Inline annotations (expand on click) use a custom remark plugin:

```markdown
![visible label text](fn "content that expands on click")
```
