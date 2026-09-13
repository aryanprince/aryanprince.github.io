# Aryan Prince

A minimal personal portfolio at https://aryanprince.com, built with Astro. Static HTML, self-hosted Instrument Sans, and no client-side JavaScript.

## Development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

Edit `src/site.ts` for experience summaries and links. Set `site.resumeUrl` to your hosted PDF URL; until then, the site displays a working **Request resume** email link. Other copy lives in `src/pages/index.astro`, with styling in `src/styles/global.css`.

The portfolio gives a short introduction to the work and technical focus. Detailed accomplishments, dates and qualifications belong in the linked resume.

## Deployment

The existing Vercel project is `aryp/aryanprince-github-io`. `vercel.json` sets the Astro preset, `npm run build`, and `dist` output directory. The Node.js version is set to 24.x in `package.json`.

```sh
npx vercel link --project aryanprince-github-io --scope aryp
npx vercel --prod
```

The original site remains available in Git history.
