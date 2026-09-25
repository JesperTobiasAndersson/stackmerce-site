# StackMerce Site

Public StackMerce website built with Next.js for Vercel.

## Pages

- `/` main StackMerce homepage
- `/apps/discount` app profile for Discount
- `/privacy` public privacy policy page
- `/terms` public terms of service page

## Development

```bash
npm run dev
```

## Production

This site is intended to be deployed on Vercel and used as the public domain
for StackMerce marketing, legal pages, and app portfolio pages.

### Pushing does not publish

A push to `master` builds a **Preview** deployment, not Production. The build
goes green, Vercel reports success, and stackmerce.vercel.app keeps serving the
previous version — so a file can be committed, pushed and built, and still 404
on the live domain.

To actually publish, promote the build:

```bash
vercel link --yes --project stackmerce-site   # once per clone
vercel ls stackmerce-site                     # find the Ready preview
vercel promote <deployment-url> --yes
```

Give it a minute afterwards; the edge serves the old response for a short
while. Check with the content type rather than the status code — a missing
file returns `200` with the Next.js 404 page, so only
`content-type: video/mp4` (or whatever you expect) proves it is really there:

```bash
curl -sI https://stackmerce.vercel.app/videos/translate-csv-demo.mp4 | grep -i content-type
```

## Hosted assets

| File | Used by |
| --- | --- |
| `public/videos/discount-demo.mp4` | Discount app listing |
| `public/videos/translate-csv-demo.mp4` | Translate CSV listing — rebuild it from the Translate CSV repo with `node listing/render-demo-video.mjs` |
