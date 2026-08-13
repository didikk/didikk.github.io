# Didik Ismawanto — Portfolio

Personal site for [Didik Ismawanto](https://github.com/didikk), a mobile developer working with React Native, Android, and Flutter.

Live site: [https://didikk.github.io](https://didikk.github.io)

## Stack

- [Astro](https://astro.build) 7
- [Tailwind CSS](https://tailwindcss.com) 4
- Node.js 22+

## Getting started

```sh
npm install
npm run dev
```

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Install dependencies                        |
| `npm run dev`      | Start the local server at `localhost:4321`  |
| `npm run build`    | Build the production site to `./dist/`      |
| `npm run preview`  | Preview the production build locally        |

## Content

Copy, projects, experience, and contact links live in `src/data/site.ts`. Page sections are Astro components in `src/components/`. Static files (CV, images, favicon) go in `public/`.

## Deploy

Pushes to `main` build and publish to GitHub Pages via `.github/workflows/deploy.yml`.
