---
name: Astro site rewrite plan
overview: Set up a new Astro site in the existing brandorn/brandorn.com repo (replacing the Jekyll site after tagging a release), establish a design token workflow from Figma Variables, configure Vercel for deployment, and plan the DNS cutover from GitHub Pages to Vercel.
todos:
  - id: tag-release
    content: Tag the current Jekyll site as a release (v2.6) in the existing brandorn/brandorn.com repo
    status: completed
  - id: github
    content: Clone the repo into this directory and clear Jekyll files from main
    status: completed
  - id: scaffold
    content: Scaffold Astro project with minimal template, install Tailwind CSS v4 (not v3) and sass as dev dependencies
    status: completed
  - id: styles-cleanup
    content: "Update Untitled UI style files: rename Orderly references to brandorn.com, verify imports work with Astro + Tailwind v4"
    status: completed
  - id: structure
    content: "Set up project directory structure: src/layouts/ (with base layout importing globals.css and dark mode script), src/components/, src/pages/"
    status: completed
  - id: consolidate-components
    content: Review src/components/ and consolidate before pushing to master — absorb single-use components into layouts where it makes sense, dedupe overlapping pieces, and trim anything that's no longer used
    status: pending
  - id: vercel
    content: Import project into Vercel, verify auto-detected Astro build settings, confirm preview deploy works
    status: pending
  - id: dns
    content: Add custom domain in Vercel, update DNS records at iwantmyname, verify SSL and propagation
    status: pending
isProject: false
---

# Astro Site Rewrite Plan for [brandorn.com](http://brandorn.com)

## 1. Project scaffolding

Run `npm create astro@latest` targeting the current directory. Use the **minimal/empty** starter template (not a blog or portfolio template) so we have full control over structure.

The resulting project structure will look like:

```
brandorn/
  src/
    layouts/        # Base HTML layout(s)
    pages/          # File-based routing (.astro files)
    components/     # Reusable UI components
    styles/         # Untitled UI tokens + global styles (already in place)
  public/           # Static assets (favicon, images, fonts)
  astro.config.mjs
  package.json
  tsconfig.json
```

After scaffolding, install **Tailwind CSS v4** and **Sass**:

```
npm install tailwindcss @tailwindcss/vite@latest sass --save-dev
```

Tailwind v4 uses a Vite plugin instead of the `@astrojs/tailwind` integration (which targets v3). Wire it into `astro.config.mjs`:

```js
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
```

No `tailwind.config.mjs` needed -- Tailwind v4 uses the `@theme` block in CSS (which `theme.css` already provides) instead of a JS config file.

Key setup decisions:

- **Tailwind CSS v4** for utility styling. The existing `src/styles/` files use v4's `@theme` syntax, so v4 is required.
- **Sass** as a dev dependency for `custom.scss`.
- **No UI framework** to start -- Astro's `.astro` components are sufficient for a personal site. React/Svelte/etc. can be added later if needed for interactive islands.
- **TypeScript** enabled (Astro includes it by default, and it helps even for light usage).
- `src/styles/` already exists with the Untitled UI token files (see section 2).
- Astro's built-in scoped `<style>` blocks still work alongside Tailwind for any one-off component styles that don't map well to utilities.

---

## 2. Design tokens (Untitled UI style files)

The style files are already in place at `src/styles/`, pulled from another project that uses the Untitled UI design system. These use **Tailwind v4's `@theme` block** to define all tokens directly in CSS.

### File structure (already exists)

```
src/styles/
  globals.css      # Entry point: imports Tailwind, theme, typography, custom
  theme.css        # Untitled UI tokens (~1350 lines): colors, type, shadows, radii, dark mode
  typography.css   # Custom .prose class referencing theme tokens
  custom.scss      # Project-specific overrides (SCSS)
  README.md        # Documentation for the style setup
```

### Cleanup needed

- **Rename "Orderly" references** in `custom.scss` and `README.md` to "brandorn.com" (or just remove the project name).
- Verify that `globals.css` imports resolve correctly in the Astro build (the `@import "tailwindcss"` + `@import "./theme.css"` pattern should work with Tailwind v4's Vite plugin).

### How tokens integrate with Tailwind v4

In Tailwind v4, the `@theme` block in `theme.css` *is* the Tailwind config. No separate `tailwind.config.mjs` needed. All the custom properties defined there (e.g., `--color-brand-600`, `--text-lg`, `--shadow-md`) are automatically available as Tailwind utilities (e.g., `text-brand-600`, `text-lg`, `shadow-md`).

### Dark mode

Dark mode is handled via a `.dark-mode` class on `<html>`, already defined in `theme.css` with ~400 token overrides. In the base layout, a small inline script will apply `.dark-mode` based on `prefers-color-scheme`, with the option to add a manual toggle later.

### Per-page theming

For pages that need a custom color theme (e.g., photo essays), define a CSS scope in `custom.scss` that overrides the relevant tokens, then pass a theme class to the base layout via frontmatter.

### Future: trimming unused tokens

The theme file includes the full Untitled UI palette (many gray variants, every named hue). These can be trimmed later once you know which colors you're actually using.

---

## 3. GitHub + Vercel setup

### GitHub (existing repo: [brandorn/brandorn.com](https://github.com/brandorn/brandorn.com))

The repo already exists with the Jekyll site. The switchover strategy:

1. **Tag the Jekyll release**: Before touching anything, create a release tag on the current `main` so you can always get back to it.

```
   git tag -a v1.0.0 -m "Final Jekyll version"
   git push origin v1.0.0
   

```

1. **Clone into this working directory**: Clone the repo into `/Users/brandondorn/dev/brandorn` (or move the `.git` directory in).
2. **Clear and replace**: Remove the Jekyll files from the working tree, scaffold the Astro project in their place, commit, and push to `main`.
  - The tagged release preserves the full Jekyll history — nothing is lost.
  - GitHub Pages will stop serving once the Jekyll `_config.yml` is gone (or you can disable Pages in repo settings explicitly).

### Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account.
2. Click **"Add New Project"** and import the GitHub repo.
3. Vercel auto-detects Astro and configures the build settings (`astro build`, output dir `dist/`). No manual config needed.
4. Every push to `main` triggers a production deploy. PRs get preview deploys automatically.

### Vercel pricing

The **Hobby plan is free** -- no charges for a personal site like this. It includes generous limits (1M edge requests/mo, 6000 build minutes/mo, automatic HTTPS, global CDN). The only restriction is it must be non-commercial, which fits a personal portfolio.

### Optional: Vercel CLI

You can also install the Vercel CLI (`npm i -g vercel`) to run `vercel dev` locally or trigger deploys from the terminal, but this is entirely optional -- the GitHub integration handles everything.

---

## 4. DNS cutover from GitHub Pages to Vercel

### Current state (GitHub Pages)

Your DNS at iwantmyname likely has one of these configurations:

- An **A record** pointing to GitHub's IPs (`185.199.108-111.153`)
- A **CNAME record** pointing to `<username>.github.io`

### Add domain to Vercel

1. In your Vercel project dashboard, go to **Settings > Domains**.
2. Add `brandorn.com` (and `www.brandorn.com` if you want that too).
3. Vercel will show you the DNS records you need to set.

### Update DNS at iwantmyname

1. Log in to [iwantmyname.com](https://iwantmyname.com) and go to your domain's DNS settings.
2. **Remove** the existing A records (GitHub's IPs) or CNAME record (`*.github.io`).
3. **Add** the records Vercel specifies. Typically:
  - **A record**: `76.76.21.21` (Vercel's IP) for the apex domain (`brandorn.com`)
  - **CNAME record**: `cname.vercel-dns.com` for `www.brandorn.com`
4. Vercel automatically provisions an SSL certificate once DNS propagates.

### Minimizing downtime

- DNS propagation can take minutes to hours (iwantmyname is generally fast).
- **Strategy**: Deploy and verify your new site on Vercel's auto-generated `.vercel.app` URL first. Only update DNS once you're happy with the new site. During propagation, some users may briefly see the old GitHub Pages site -- that's fine.
- You can lower the TTL on your existing DNS records a day or two before the switch to speed up propagation.
- After confirming the cutover works, disable GitHub Pages in the repo settings (**Settings > Pages > Source > None**).

---

## Suggested order of operations

The work naturally flows in this sequence:

1. ~~**Tag the Jekyll release** (v2.6) in the existing repo~~ -- done
2. ~~**Clone the repo** into this working directory~~ -- done
3. ~~**Clear Jekyll files**~~ -- done
4. ~~**Scaffold Astro** project with minimal template~~ -- done
5. ~~**Install Tailwind v4 + Sass** and configure the Vite plugin in `astro.config.mjs`~~ -- done
6. ~~**Clean up Untitled UI style files** -- rename Orderly references, verify imports~~ -- done
7. ~~**Set up directory structure** (base layout importing `globals.css`, dark mode script, components dir)~~ -- done
8. **Build out pages** (content migration / new content)
9. **Review and consolidate `src/components/`** — many components are single-use scaffolding that grew alongside the pages. Before pushing, audit them and absorb whatever makes sense into layouts (e.g. header/footer pieces, post chrome) or fold one-off wrappers directly into their parent page. Keep `src/components/` reserved for things that are genuinely reused across pages.
10. **Push to main** and import into Vercel
11. **Verify** the site on the `.vercel.app` preview URL
12. **Update DNS** at iwantmyname to point to Vercel
13. **Disable GitHub Pages** in repo settings

Steps 1–7 are complete (matches frontmatter todos through `structure`). **Outstanding:** content and pages (step 8) and component consolidation (step 9); **pending** in frontmatter: `consolidate-components` (step 9), `vercel` (steps 10–11) and `dns` (steps 12–13 — run DNS cutover last, once the new site is ready).