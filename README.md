# Jay Panchal — Mechanical Engineering Portfolio

Static site, no build step. Served by GitHub Pages from `main`:
https://jaypanchal06.github.io/github-portfolio2006/

```
index.html        Landing page: hero, project index, experience, skills, about, contact
cpss.html         Project area 01 — Cal Poly Space Systems (five projects)
coursework.html   Project area 02 — Engineering Design, CAD & Analysis
styles.css        Shared stylesheet (all pages)
site.js           Mobile nav toggle
images/           Photos and logos referenced by the pages
```

## Editing

- **Add a project:** copy an `<article class="project">` block in `cpss.html` or `coursework.html`, give it a new `id`, and add a matching row to the project index in `index.html` and the `contents` list on that page.
- **Add photos:** drop the file in `images/`, reference it with `width`/`height` attributes and `loading="lazy"`, and write a real caption — captions are numbered like drawing figures (`1.4b`).
- **Change the date stamp:** the footer title block on each page carries `Rev` — update all three.
