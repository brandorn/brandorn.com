# AGENTS.md

## Project overview
<!-- 
  1-3 sentences: What is this? Who is it for? What's the core purpose?
  Example: "Personal portfolio site for [name]. Showcases design work and writing."
-->

## Tech stack
- Astro (static site)
- Tailwind CSS v4 (via Vite plugin, no tailwind.config.js)
- Sass for custom overrides
- Deployed on Vercel

## Project structure
- src/pages/*       file-based routing
- src/components/*  reusable .astro components
- src/layouts/*     base HTML layouts
- src/styles/*      design tokens and global styles (Untitled UI system)
- public/*          static assets (images, fonts, favicon)

## Design system / styling
- Use Tailwind utilities mapped to tokens in src/styles/theme.css
- Prefer token-based classes (text-brand-600) over raw values (text-[#7C3AED])
- Dark mode via .dark-mode class on <html>, defined in theme.css
- Custom component styles go in src/styles/custom.scss

## Code style & conventions
- Semantic HTML over div soup
- Minimize client-side JS; use Astro's zero-JS-by-default approach
- Don't use inline styles; use Tailwind utilities or scoped <style> blocks