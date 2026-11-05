# Wharton MBA: The Advantage Is What You Do With AI

Independent high-fidelity Astro prototype built from a one-time copy of Wharton's internally maintained old-theme design framework. The prototype does **not** pull from or reference the original repository at build time. It preserves its CMS-compatible typography, layout, templates, responsive components, and accessibility conventions.

## Development

Node.js 22.12+ and npm 9.6.5+:

```sh
npm ci
npm run dev:mba
npm run build:mba
```

The page is in `sites/mba-ai/pages/home.json`; content is separate from reusable presentation. The new `MBAMedia`, `LearningCycle`, and `PardotEmbed` sections are documented in `docs/mba-ai/`.

## Editorial and production status

**Working admissions creative, not an approved public admissions offer.** No prospect data is collected in the prototype. The Pardot embed is pending its approved URL; the original Michael Roberts film is in production; the Erika Lawrence WG'23 video is an approved publicly published testimonial; Hetvee Marviya WG'27 is a linked student story, not yet a produced video testimonial.

Licensed brand SVGs are bundled under `public/shared/logos/`. Web typography currently uses the approved Wharton font host until the supplied licensed WOFF2 files are imported into `public/shared/fonts/`. Do not commit the original multi-font ZIP archives, only the exact weights actually used.

Development branch: `codex/mba-ai-landing-build`. Review the editorial plan, test the mobile layout and responsive assets, and approve before deploying.
