# Gabor Tar Portfolio

A static personal portfolio built with Astro, TypeScript, and Tailwind CSS. It has no backend, CMS, database, or runtime JavaScript dependency.

## Structure

```text
src/
  components/     Shared layout, navigation, headings, and cards
  data/           Editable project, service, and writing content
  pages/          Astro routes: home, projects, blog, about, and 404
  styles/         Tailwind theme and global styles
public/           Static assets
.github/workflows Deployment workflow for GitHub Pages
```

The easiest place to update projects, services, and writing placeholders is `src/data/content.ts`. General page copy lives in the corresponding file under `src/pages/`.

## Local development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev
```

Astro prints the local URL, normally `http://localhost:4321`.

## Check and build

```sh
npm run check  # production compilation check
npm run build
npm run preview
```

The static production output is generated in `dist/`.

## Deploy to GitHub Pages

1. Push the repository to GitHub with `main` as the production branch.
2. In the repository, open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. Push to `main` or run the **Deploy to GitHub Pages** workflow manually.

The included workflow builds the site and deploys the generated static files. `astro.config.ts` is configured for `https://gabortar.eu`. For a project repository instead of a user site, update `site` and add `base: '/repository-name'` in that file.

Before publishing, replace the placeholder GitHub and LinkedIn URLs in `src/components/Footer.astro` and `src/pages/index.astro`.
