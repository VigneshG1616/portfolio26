# portfolio_try_new_minimalist

Minimalist flat portfolio for Vignesh G — MERN Stack Senior Web Developer.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build Tool | Vite 6 |
| Animations | Framer Motion 12 |
| Styling | SCSS (Sass 1.86) |
| Fonts | Plus Jakarta Sans, Inter, JetBrains Mono (Google Fonts) |
| Icons | Font Awesome 6 (CDN) |

No Bootstrap. No ScrollReveal. No VanillaTilt. Intentionally minimal dependencies.

## Features

- **Light / Dark mode** — CSS custom properties (`var(--bg)`, `var(--text)`, etc.) toggled via `[data-theme]` on `<html>`. Anti-FOUC inline script in `index.html` reads `localStorage` before React hydrates, so the correct theme is set on first paint with zero flash.
- **Framer Motion animations** — `fadeUp` stagger on Hero (mount), `whileInView` scroll reveals on all sections, `AnimatePresence` for the theme icon swap (sun ↔ moon with rotate transition).
- **Fully responsive** — custom `bp()` SCSS mixin at `sm: 600px`, `md: 768px`, `lg: 1024px`. Mobile hamburger menu with animated drawer.
- **Projects table** — CSS Grid list with responsive grid-template-areas collapse on mobile.

## Project Structure

```
src/
├── components/
│   ├── Navbar/        # Fixed nav, theme toggle, mobile drawer
│   ├── Hero/          # Full-viewport intro with animated meta row
│   ├── About/         # Photo + bio + categorised skill chips
│   ├── Projects/      # Table-style project list
│   │   ├── Projects.jsx
│   │   └── ProjectRow.jsx
│   ├── Contact/       # Email link, phone details, social icons
│   └── Footer/        # Logo, copyright, back-to-top
├── context/
│   └── ThemeContext.jsx   # ThemeProvider + useTheme hook
├── data/
│   └── portfolioData.js   # All content (navLinks, heroData, aboutData, projectsData, contactData, socialLinks)
└── styles/
    ├── main.scss          # Imports all partials
    ├── _tokens.scss       # CSS custom properties — light + dark values
    ├── _reset.scss        # Box-sizing reset, base typography
    ├── _utils.scss        # bp() mixin, .container, .section, .btn, .chip
    ├── _navbar.scss
    ├── _hero.scss
    ├── _about.scss
    ├── _projects.scss
    ├── _contact.scss
    └── _footer.scss
```

## Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the dist/ build locally
```

## Build Output

```
dist/assets/index.css   ~15.5 KB (gzip ~3.4 KB)
dist/assets/index.js   ~339 KB  (gzip ~108 KB)  ← includes React + Framer Motion
```

## Theme System

Two sets of CSS custom properties defined in `_tokens.scss`:

```scss
:root                  /* light theme */
[data-theme="dark"]    /* dark theme  */
```

Variables cover: `--bg`, `--bg-2`, `--bg-3`, `--border`, `--border-2`, `--text`, `--text-2`, `--text-3`, `--accent`, `--accent-dim`, `--accent-hover`, `--code-bg`, `--code-text`.

Theme preference is persisted to `localStorage` under the key `vg-theme`. On first visit, system preference (`prefers-color-scheme`) is used as the default.

## Content Updates

All text, links, and project data live in `src/data/portfolioData.js`. Edit that single file to update the portfolio — no component changes needed.

## Notes

- Resume PDF should be placed at `public/assets/resume_vignesh_g_26.pdf`.
- Profile image is loaded from `i.ibb.co` (external CDN). Replace the URL in `aboutData.img` to self-host.
- Font Awesome 6 is loaded from the official CDN (`kit.fontawesome.com`). Replace the kit URL in `index.html` with your own if needed.
