---
title: "Shiny New Blog Smell"
description: "A colophon of tools tried and iterations in building out jonathan-peterson.com"
date: 2026-04-21
tags: []
---

I decided to take on some actual substantive personal projects to play with vibe coding in a meaningful way. I also wanted to build out a reasonable degree of home lab at the same time. Rebuilding a personal web presence ended up being the project that went the deepest and through the most iterations. I didn't really keep any narrative notes, but just worked it out [in public on GitHub](https://github.com/jonathanpeterson/jp-site). The first pass was using Claude like a copywriter, to work through the content and tone that I wanted, while throwing a batch of prior web content, bio, LinkedIn profile, etc. That put together a pretty decent [charter](/writing/website-charter/) as a starting point for build out.

---

## v0: Ghost on GCP

Initially I built a Ghost site, mostly because I've seen so much content move to Substack, [which has a Nazi problem](https://www.theguardian.com/media/2026/feb/07/revealed-how-substack-makes-money-from-hosting-nazi-newsletters) and wanted to be able to help folks self-host instead. I built out a GCP micro instance set up with [Daniel Raffel's gcloud_ghost_instancer](https://github.com/jonathanpeterson/gcloud_ghost_instancer) — which provisions a free-tier Cloud instance and gets Ghost running with minimal fuss. I ended up making [several changes to get it working](https://github.com/danielraffel/gcloud_ghost_instancer/pull/1). But as I started trying to work with and customize it, I realized that it was far more newsletter platform than blog. Something as basic as updating the site title and CSS required direct MySQL writes because the Ghost integration API key doesn't have write access to site settings. That's not development, that's fighting the platform. I ported all content to markdown and punted.

## v1: Hugo + PaperMod on Netlify (March 17)

The move to Hugo was a move toward simplicity: static files, markdown content, no database, no server to maintain. [PaperMod](https://themes.gohugo.io/themes/hugo-papermod/) is a clean minimal theme that required almost no configuration to get something that looked decent. Deployed to [Netlify](https://www.netlify.com/) with auto-deploy on push.

The Netlify honeymoon lasted two days. All content edits or CSS changes triggered a full build, and the free-tier build minutes ran out fast. The alternative — running the Netlify build environment locally via Docker — worked, but requiring a container runtime just to preview a blog post is not a reasonable workflow for a personal site.

Also, PaperMod had the same problem as Ghost in a different way: it's designed for a pure blog, and this site has distinct professional, writing, and DJ audiences that need their own paths. Card layouts required heavy CSS overrides. It wasn't going to get easier.

## v2: Hugo + Congo + GitHub Pages (March 19 – April 3)

Switching to [GitHub Pages](https://pages.github.com/) solved the hosting problem cleanly — free, no meaningful build limits, Actions-based deploys. That stayed solved.

Went through two more Hugo themes before landing on [Congo](https://themes.gohugo.io/themes/congo/): it has a clean typographic system, proper light/dark support, customizable homepage layout, and was actively maintained. Stopped fighting themes and started building content.

Over the next two weeks the site got a custom orange/purple color scheme, a nav avatar, per-page banner images, content-type icons, a unified writing/DJ feed with tag-based routing, and inline footnotes. The site finally started to feel like mine.

But I still wanted to get something in the way of a CMS instead of local markdown editing.  I tried [Sveltia](https://sveltiacms.app/en/), then [Front Matter](https://gohugo.io/content-management/front-matter/) (a VS Code extension), then Pages CMS, none of which felt right. Each left config artifacts in the repo. The deeper issue was that Hugo's template lookup system made truly custom layouts hard without forking or monkey-patching the theme, and the more custom things got, the more that friction showed.

## v3: Astro + Keystatic + GitHub Pages (April 20)

Rebuilt from scratch in [Astro](https://astro.build/) so I could move to [Keystatic](https://keystatic.com/) for a light, form-based CMS. Kept all the content, and design decisions but threw out the theme entirely. Astro's component model means the HTML I write is the HTML that ships — no theme layer in between. [Tailwind](https://tailwindcss.com/) for styling, Keystatic for CMS (runs locally in dev, no external service required). GitHub Pages for hosting, same as before.

## v3.1: Astro + ~~Keystatic~~ + GitHub Pages (April 21)

I'm done with trying to have CMS.  Keystatic is just too fragile, too many starts and stops of servers and reloads, draft state, which makes zero sense when local files are ALL draft and once pushed to git, they become live.  I'm just sailing the text file seas like God, [Ken Thompson and Dennis Ritchie intended](https://www.nokia.com/blog/the-invention-of-unix/).