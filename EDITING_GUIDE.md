# Editing this website

This is a Jekyll site (Beautiful Jekyll theme). Pages are plain Markdown files
with an HTML "front matter" header, and most content is hand-written HTML
inside the `.md` files. You don't need to touch Ruby/Jekyll internals to edit
text, images, or links.

## Where things live

| What you want to change | File |
| --- | --- |
| Home page text/sections (hero, research focus, recent pubs/talks, bio) | `index.md` |
| Publications list | `publications.md` |
| Talks list | `talks.md` |
| CV page (embeds the PDF) | `resume.html` |
| The actual CV file | `cv.pdf` (replace the file, same name) |
| Blog index page | `blog.html` |
| Individual blog posts | `_posts/` (currently empty — see below) |
| Site title, nav bar links, your name/email/socials, description | `_config.yml` |
| Profile photo / images | `static/img/` |
| Colors, spacing, fonts, layout | `css/main.css` |

## Editing a page like `publications.md` / `talks.md`

Each entry is one `<li class="publication-card">` block. To add a new
publication, copy an existing `<li class="publication-card">...</li>` block
and edit the text inside. Key pieces:

- `<span class="tag">PNAS</span>` — a small pill label (journal name, or a year).
- `<span class="status-badge">In review</span>` — optional second label for
  unpublished work (renders in the accent color). Omit this once a paper is
  published.
- `<h3>...</h3>` — the title.
- `<p class="authors">...</p>` — wrap your own name in `<strong>Amlan Nayak</strong>`
  so it's bolded, per the convention on the page.
- `<div class="publication-actions"><a class="text-link" href="...">View paper</a></div>` —
  the link to the paper/DOI. Omit this block entirely if there's nothing to
  link to yet.

Entries are grouped inside `<section class="publication-year" ...><h2 id="pub-YYYY">YYYY</h2>...</section>`
blocks by year — add a new `<section>` for a new year, newest first.

## Editing the home page (`index.md`)

It's split into `<section>` blocks, each with a comment-like `aria-labelledby`
tag naming its purpose (header/intro, research, featured publications, talks,
background). Find the section you want by its heading text and edit the
text/links inside — no need to touch the surrounding `<section>`/`<div>`
structure unless you're adding a new list item (copy an existing `<li>` block
as a template, as above).

## Site-wide settings (`_config.yml`)

- `title`, `description` — site title and meta description.
- `navbar-links` — the top nav bar; add/remove/rename pages here.
- `author:` block — your name, email, GitHub/Twitter/ORCID/LinkedIn handles.
  These are referenced elsewhere via `{{ site.author.email }}`, etc.
- `avatar` — path to your profile photo (used in the nav bar).

## Images

Drop new images into `static/img/` and reference them as
`{{ '/static/img/your-file.jpg' | prepend: site.baseurl }}` in Markdown/HTML
(see `index.md`'s hero portrait for an example with responsive `srcset`).

## Adding a blog post

Create a new file in `_posts/` named `YYYY-MM-DD-title.md` with front matter:

```
---
layout: post
title: "Your title"
subtitle: "A short description"
date: YYYY-MM-DD
---

Post content in Markdown goes here.
```

## Previewing changes locally

```bash
bundle exec jekyll serve
```

Then open `http://localhost:4000`. Requires Ruby + Bundler (`bundle install`
once, using the existing `Gemfile`).

## Publishing

This repo is a GitHub user page (`amlan-nayak.github.io`), so GitHub Pages
builds and deploys automatically from the `master` branch on every push —
no separate `gh-pages` branch and no manual deploy step. Just commit and
push:

```bash
git add -A
git commit -m "Update publications"
git push
```

The live site at `https://amlan-nayak.github.io` updates within a minute or
two. You can check build status under the repo's **Actions** tab (or
**Settings → Pages** if it's still building).
