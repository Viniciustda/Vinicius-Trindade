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

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow that builds and deploys to GitHub Pages on pushes to `main`.

Important config is in `astro.config.mjs`:

- `site`: should match your public URL
- `base`: should match your repository name for project pages (e.g. `/Vinicius-Trindade`)

If you later use a custom domain at the root (no subpath), set `base: '/'` (or remove it) and update `site` accordingly.

## Content

All bilingual content lives in `src/lib/siteContent.ts`.
