# Vinicius Trindade — Portfolio

Personal website/portfolio built with Astro + Tailwind.

## Local development

```bash
npm install
npm run dev
```

Build & preview:

```bash
npm run build
npm run preview
```

## Routes

- `/` → language selector (auto-redirects based on browser language)
- `/pt/` → Portuguese
- `/en/` → English
- `/fr/` → French

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow that builds and deploys to GitHub Pages on pushes to `main`.

Important config is in `astro.config.mjs`:

- `site`: should match your public URL
- `base`: should match your repository name for project pages (e.g. `/Vinicius-Trindade`)

If you later use a custom domain at the root (no subpath), set `base: '/'` (or remove it) and update `site` accordingly.

## Content

All bilingual content lives in `src/lib/siteContent.ts`.

## Structure

- `src/components/PortfolioPage.astro` — the whole page. Every locale route (`/pt/`, `/en/`, `/fr/`) renders it, so all languages always share the same layout and behaviour.
- `src/components/Icon.astro` — inline SVG icons (contact logos, arrows, …).
- `src/scripts/` — client-side behaviour, one file per feature (projects carousel and the page freeze behind it, certificates carousel, lightbox, hover tilt, theme toggle).
- `src/styles/global.css` — custom styles on top of Tailwind, including the shared hover treatment: `.clickable` for clickable boxes, `.link-underline` for clickable text. Elements that are not clickable get no hover effect.
