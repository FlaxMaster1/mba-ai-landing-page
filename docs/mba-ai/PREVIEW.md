# Website preview

The owner requested public GitHub Pages hosting on October 28, 2026 after changing the repository visibility to public.

Website: https://flaxmaster1.github.io/mba-ai-landing-page/

The `Publish MBA AI website` workflow builds and publishes `codex/mba-ai-landing-build` on each push. PR #1 remains a draft; deployment does not merge it. The website is publicly viewable without a password. The GitHub repository URL displays source files, not the rendered website.

Only `dist/` is uploaded to Pages. Full font ZIPs and license records are excluded from the website build; the selected webfonts are delivered to site visitors. Because the owner made the repository public, committed files under `private/` are accessible as source despite that directory name.

## On this computer

After `npm ci` and `npm run build:mba`, run `npm run preview -- --host 127.0.0.1` and open http://127.0.0.1:4321/. This is a working HTML/CSS/JavaScript preview with local fonts, available only on the computer running that command. It is not a shareable remote review link. Stop the preview with Ctrl+C. For editing, use `npm run dev:mba -- --host 127.0.0.1`.

The current review session starts the built preview on that loopback address. If it has stopped, use the commands above to restart it.

## Other reviewers

Share the website URL above. Reviewers need no GitHub account and no local server. For password protection, move to authenticated hosting; this GitHub Pages deployment is public.

## Placeholder scope and remaining requirements

The Pardot area is plain text: “Pardot form embedded here”. No form UI or submission endpoint is rendered. Pending original video uses a gray placeholder and disabled play button. The existing published alumni film remains embedded. All temporary illustrative assets use neutral gray rectangles with image icons; official logos remain intact.

Eight unchanged WOFF2 files cover the theme's regular/bold/black Acumin, regular/bold/black condensed Acumin, and regular/bold Minion faces. Original ZIPs and desktop fonts are not served. License records and file hashes are under `private/`, which is not copied into the static build. A rendered preview necessarily delivers its selected webfonts to authorized viewers.

Before production: approved final photography, Roberts and student film edits with captions/transcripts, alumni film rights review, final Pardot embed and consent/tracking configuration, editorial/factual and accessibility approval, and explicit hosting approval.

## Validation

`npm run check`, `npm run build:mba`, and `SITE=mba-ai npm run audit:build` pass. With the local preview running, `node scripts/review-mba.mjs` verifies widths 320, 390, 768 and 1440, horizontal overflow, placeholder presence, image decoding, and successful same-origin webfont responses. It saves local screenshots under ignored `review/`. The published external alumni player is blocked during automated checks, so its playback is not validated.
