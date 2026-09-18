# Whisper of the Nine Tails storefront

Official marketing site for **Whisper of the Nine Tails** (九尾の囁き), an independent Edo-period exploration game by Dylan Wells.

This is a static [Astro](https://astro.build) site. All public copy, store links, and media paths live in one file: [`src/content.ts`](src/content.ts).

The GitHub repository and Cloudflare project remain `kuni-storefront`.

## Edit content

Open `src/content.ts` and change:

| Field | What it controls |
| --- | --- |
| `game.title`, `game.titleJa`, `game.tagline`, `game.pitch` | Hero, bilingual title, and SEO |
| `game.steamUrl` | Steam CTA. Leave `""` until a real `https://store.steampowered.com/...` URL exists. Empty keeps every button as **Coming soon on Steam**. |
| `game.price` / `game.priceLabel` | Buy panel. Do not invent a number. |
| `game.trailerUrl` | Trailer iframe. Leave empty for the placeholder slot. |
| `game.screenshots` | Gallery paths and alt text under `public/media/` |
| `pillars`, `about`, `social.links` | Remaining sections |

Replace files in `public/media/` when you have real stills or a trailer poster. The current SVGs are atmosphere studies, labeled as **not gameplay**.

Open Graph / Twitter cards use `public/og-image.png` (1200×630). Replace that file when you have final art.

## Local development

Requires Node 20+.

```bash
npm install
npm run dev
```

Visit `http://localhost:4321/`.

```bash
npm run build    # writes static files to dist/
npm run preview  # serve the production build locally
```

## Deploy

### GitHub Pages

A workflow at [`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds `dist/` on every push to `main` and deploys it with official GitHub Pages actions.

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run the workflow manually).
3. The production URL will be `https://dylanwells120-png.github.io/kuni-storefront/`.

The workflow sets:

- `SITE_URL=https://dylanwells120-png.github.io`
- `BASE_PATH=/kuni-storefront/`

GitHub project sites need that base path so CSS, images, and in-page links resolve under the repo name.

### Cloudflare Pages

1. Create a project from this repository.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Environment variables (production):
   - `SITE_URL` = your custom domain, e.g. `https://your-domain.example`
   - `BASE_PATH` = `/` (root domain) unless the site is served from a subpath

Cloudflare will run the build on each push to `main`. No extra adapter is required; this is a static Astro site.

If you use a custom domain on either host, set `SITE_URL` to that origin so canonical URLs, Open Graph tags, `robots.txt`, and `sitemap.xml` stay accurate.

## Project layout

```
src/content.ts          # all public copy and media paths
src/pages/index.astro   # storefront
src/pages/404.astro     # not-found page (same header/nav)
src/components/         # Hero, Pillars, Media, About, Buy, chrome
public/media/           # placeholder studies
```

## Notes

- Steam and social links are omitted until real URLs are configured. This repo does not invent store pages or reviews.
- `prefers-reduced-motion` disables decorative motion.
- The 404 page uses the same header as the rest of the site; every nav item returns home.
