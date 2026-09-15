# amlan-nayak.github.io

Personal/academic website for Amlan Nayak, built with [Jekyll](https://jekyllrb.com/)
and hosted on [GitHub Pages](https://pages.github.com/) at
[amlan-nayak.github.io](https://amlan-nayak.github.io).

## Editing content

| Page | File |
|---|---|
| Home | `index.md` |
| Publications | `publications.md` |
| Talks | `talks.md` |
| CV | `resume.html` embeds `cv.pdf` — replace that file |
| Blog | `blog.html` lists posts; add new ones as `_posts/YYYY-MM-DD-title.md` |
| Site title, nav links, socials | `_config.yml` |
| Colors/fonts/spacing | `css/main.css` |

## Local preview

```bash
bundle install   # once
bundle exec jekyll serve
```

Then open `http://localhost:4000`. Requires Ruby + Bundler.

## Deployment

Pushing to `master` triggers a GitHub Pages build automatically — nothing
else to do.
