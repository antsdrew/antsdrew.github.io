# antsdrew.github.io

Personal portfolio site for **Andrew Pheng Qi Jinn** — Software Engineering graduate, TAR UMT.

🔗 Live: [antsdrew.github.io](https://antsdrew.github.io)

## Tech Stack

- **React** + **Vite** — component structure, fast dev server
- **React Router** — client-side routing (`/` home, `/project/:id` detail pages)
- **Plain CSS** — no framework, custom design system in `src/styles.css`
- **CounterAPI** (optional) — free page-view tracking, see [Analytics setup](#analytics-setup)

Fonts: [Fraunces](https://fonts.google.com/specimen/Fraunces) (headings), [Work Sans](https://fonts.google.com/specimen/Work+Sans) (body), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (labels/tags).

## Project Structure

```
├── public/
│   ├── resume.pdf          ← replace to update the Resume button
│   ├── .nojekyll            ← tells GitHub Pages to skip Jekyll processing
│   └── 404.html              ← SPA routing fallback for GitHub Pages
├── src/
│   ├── assets/images/       ← photos used in the site (e.g. hero photo)
│   ├── components/          ← one file per UI piece (Navbar, Hero, ProjectCard, Timeline, etc.)
│   ├── config/
│   │   └── analytics.js     ← CounterAPI workspace/key (optional, see below)
│   ├── data/
│   │   └── projects.js      ← ⭐ single source of truth for all projects — edit here to add/update
│   ├── lib/
│   │   └── counter.js       ← CounterAPI wrapper
│   ├── pages/
│   │   ├── HomePage.jsx     ← assembles all sections in order
│   │   └── ProjectDetail.jsx← reusable template for full project pages
│   ├── App.jsx               ← routes
│   ├── main.jsx               ← entry point
│   └── styles.css            ← entire design system (colors, type, layout, all component styles)
├── vite.config.js            ← build output set to `docs/` (see Deployment)
└── index.html
```

## Sections

About · Education · Projects · Skills · Experience · Certifications · Involvements · Awards · Contact

Each section pulls from its own data array at the top of its component file (or from `src/data/projects.js` for Projects). To add content, edit the array — no need to touch JSX or CSS.

### Adding a project

Open `src/data/projects.js` and add an object to the `projects` array:

```js
{
  id: 'my-project',              // used in the URL if it gets a detail page
  title: 'Project Name',
  subtitle: 'One-line description',
  period: 'Month Year — Month Year · Context',
  icon: '🔧',                     // shown on the card
  description: '...',
  tech: ['Python', 'React'],
  features: ['...'],              // only shown on detail pages
  repoUrl: '',
  liveUrl: '',
  awards: [],
  hasDetailPage: false,           // true = gets its own /project/:id page
  featured: false,                // true = large hero-style card at top of grid
}
```

Repo links are hidden site-wide until repos are cleaned up — see `SHOW_REPO_LINKS` at the top of `projects.js`.

## Local Development

```bash
npm install
npm run dev       # local preview with hot reload
```

## Deployment

This site deploys to GitHub Pages by serving the `docs/` folder from the `main` branch.

```bash
npm run build      # outputs to docs/
git add .
git commit -m "update site"
git push
```

GitHub Pages settings (Settings → Pages) must be:
- **Source:** Deploy from a branch
- **Branch:** `main` / `docs`

The `.nojekyll` file in `public/` is required — without it, GitHub Pages tries to build the site with Jekyll and fails, since this is a plain static React build, not a Jekyll site.

## Analytics Setup

View counters (per-section + site total) use [CounterAPI](https://counterapi.dev), since a static site has no backend of its own.

1. Sign up free at [counterapi.dev/signup](https://counterapi.dev/signup)
2. Create a workspace
3. Generate an API key from the dashboard
4. Paste both into `src/config/analytics.js`

Until both are filled in, the counters stay invisible — nothing else breaks.

> Note: because this is a static site, the API key is visible in the page source to anyone who looks. CounterAPI's free tier is rate-limited, which keeps casual abuse in check, but don't reuse a key tied to anything more sensitive than a view count.

## License

Personal project — feel free to reference the structure, but please don't republish the content as your own.
