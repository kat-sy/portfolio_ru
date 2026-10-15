# Katerina Sysoeva — portfolio

Bilingual RU/EN portfolio with separate identities for Ecopart and Ehope. Static HTML is generated from shared templates and bilingual content. No runtime framework, backend or API keys are required.

## Run

Requires Node.js 20 or later. No package installation is necessary.

```sh
npm run build
npm test
npm run dev
```

The local development server prints its address. Deploy `dist/` to a static host. The Sites manifest retains the private preview identity; the source is also intended for `kat-sy/portfolio_ru`.

## Edit

- `src/site.mjs`: personal copy, labels, links and locale data.
- `src/cases.mjs`: evidence-based project stories in RU/EN.
- `src/build.mjs`: page composition and static route generation.
- `public/styles.css`: personal foundations and independently scoped case themes.
- `public/app.js`: image dialog, audience comparison, copy-email feedback and section navigation.
- `public/media/`: original project exports and web-optimized derivatives.
- `public/fonts/`: self-hosted fonts and their OFL licenses.
- `tests/site.test.mjs`: route, asset, localization and progressive-enhancement checks.

## Experience

Russian is the default at `/`. Both `/ru/` and `/en/` have home, approach and two project pages. Language links retain the corresponding route and, with JavaScript, the current section anchor. Case content is server-independent static HTML. Guest/member examples remain visible when JavaScript is disabled; enhanced controls compare them when JavaScript is available. Images link to their full local export and can open in a native dialog. Email actions open drafts in the visitor’s mail application; this site does not submit messages.

## Content and status

Ecopart is design/prototype work; the app has not been developed. Ehope is a concept. Interface figures are mockup content, not product outcomes. The portfolio’s design direction and evaluation are Katerina’s; Codex assists with implementation and checks. The pasted vacancy and the cancelled company-logo request are excluded.

The preview starts private and is marked `noindex`. Remove that metadata and update `site.origin` before an approved public launch at a different domain. The old portfolio domain is not modified by this project.

See `SOURCES.md` for design provenance. Project artwork and personal copy belong to their respective rights holders. Font license notices are bundled separately.
