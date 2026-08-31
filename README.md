# Nexus — marketing site

The public site for **Nexus.AI** — the on-premises AI infrastructure control plane.
_Crate to cluster, offline._

### 🌐 Live site — https://axieyangb.github.io/nexus-site/

Built with Vite + React + TypeScript + Tailwind v4.

## CI/CD

Fully automated. Every push or merge to `main` triggers
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the
site and publishes it to GitHub Pages — no manual deploy step. A change is live
about a minute or two after it lands on `main`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # static output in dist/
npm run preview  # serve the built site locally
```

## Deploy

Pushes to `main` are built and published to GitHub Pages automatically by
`.github/workflows/deploy.yml`. The live site is served from the repo's Pages URL.

> **Custom domain:** if you point a domain (e.g. `nexus.ai`) at Pages, set
> `base: '/'` in `vite.config.ts` so assets resolve from the root.

## Editing content

Copy lives in `src/components/*` — one file per page section. Team names and the
contact email are placeholders (`Team.tsx`, `CTA.tsx`); fill in the real values
before a public launch.
