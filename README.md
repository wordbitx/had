# Halal Corn Dog

Premium website for Halal Corn Dog — a halal Korean-style corn dog street-food
stall serving across Brazil. Built with **Next.js 14 + TypeScript + Tailwind**
(App Router, static export).

- Deep green `#004925` + bright yellow `#FFD303` (Brazil's colours)
- Six routes: `/` (Home), `/menu`, `/stall`, `/our-story`, `/find-us`, `/faq`
- Interactive **Build Your Own** on the Menu page: 4 coatings, 5 fillings,
  6 condiments — exactly the client's real menu (no prices, no invented
  locations, stats or contact details anywhere)

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export in out/
```

## Images — read this

The original image files are served **unoptimized, byte-for-byte** (no
recompression, no resize — quality 100). They live in `public/images/`.

Because this repository is pushed through the GitHub API, which only accepts
UTF-8 text files, the image bytes are committed as `public/images/*.b64`
(base64 text). `scripts/decode-images.mjs` decodes them into the real
`.webp` / `.png` files automatically before `dev` and `build`
(`predev` / `prebuild` in `package.json`) — Vercel runs the same step, so
deployments just work. The decoded files are git-ignored build outputs.

To manage images with plain `git` instead, drop the real files into
`public/images/` and delete the `.b64` sources.

## Demo gate — Coming Soon

Home and Menu are live. The other four pages (`/stall`, `/our-story`,
`/find-us`, `/faq`) show a premium green-and-yellow **Coming Soon** view.
Their real content is fully preserved in the page components — to restore a
page, set its value to `false` in `COMING_SOON` in `src/lib/site.ts`
(one small change per page).

## Hero performance

The hero food photo is a real file (`public/images/food-hero.webp`) rendered
with Next.js `<Image priority>` — preloaded with `fetchpriority="high"`,
never lazy-loaded, never a CSS background. On mobile it shows as a full
uncropped band (aspect 3/1) with the content below it, exactly like desktop.
