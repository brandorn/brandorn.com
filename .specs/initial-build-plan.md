# Initial build plan
2026-04-25

## Goal
Build the initial UI for brandorn.com based on the notes below, using the Figma MCP to reference the linked Figma frames.

## Considerations
1. This is my first time using the Figma MCP for something like this, so please clearly show me the steps you're taking, what you're inferring from the frames I've linked, and where I may need to resolve discrepancies or missing detail.
2. Please use semantic, modern HTML elements as much as possible. Also, I've done my best to name UI elements and frames according to the classes I'd like to use on the frontend (e.g. `body.post.essay` for the `post essay` Figma frame). Again, this is my first time trying this, so I'm not sure how closely what I've defined in Figma will match what you build, especially since I'm relatively new to Astro templates.
3. The built UI should use the same tokens as used in the designs. I'm using untitledui.com as the basis for the for design tokens, which we've already added to the repo here. Please reference these as best you can and note any discrepancies for me to resolve. I've taken time to ensure that what's in Figma matches what's in our repo, but there may be some minor discrepancies.
4. The site should be fully responsive. The site I've designed components as best I can to show how they behave at different viewport widths, but this is difficult to fully replicate within Figma. So please ask for clarification about design behavior if needed.
5. Some Figma components (like `index-container`) use a new Figma feature called "slots" that was recently released, which allows you to swap components within a "slot" frame in a component. If you need more detail, this article explains how it works: https://help.figma.com/hc/en-us/articles/38231200344599-Use-slots-to-build-flexible-components-in-Figma.
6. There are other frames in this Figma file that aren't yet ready for build (e.g. `photo-essay`), so please only reference the frames I've linked here for now. 
7. Feel free to generate filler content for the posts for now; I'll go in and update them once the site build is complete enough.

## Figma frames
1. Components: https://www.figma.com/design/gEMCFKGWznQo3fqmNoZTfw/brandorn.com--2025-?node-id=14677-1283&t=541JDn9Znr9teWIT-11
2. Home (desktop): https://www.figma.com/design/gEMCFKGWznQo3fqmNoZTfw/brandorn.com--2025-?node-id=14482-7279&t=541JDn9Znr9teWIT-11
3. Home (mobile): https://www.figma.com/design/gEMCFKGWznQo3fqmNoZTfw/brandorn.com--2025-?node-id=14671-381&t=541JDn9Znr9teWIT-11
4. Post (essay, desktop): https://www.figma.com/design/gEMCFKGWznQo3fqmNoZTfw/brandorn.com--2025-?node-id=14497-631&t=541JDn9Znr9teWIT-11

## Design / content notes
### General
To start, I believe there will be 3 kinds of Astro content collections: "essay," which will be standard essays, "photo essays," which will be pages with unique layouts and color schemes (more on those in a future build), and "affinities," which will populate the footer links (details on the footer below).

### Home header
The home header transitions to a simple carousel at mobile widths, as represented in this component: https://www.figma.com/design/gEMCFKGWznQo3fqmNoZTfw/brandorn.com--2025-?node-id=14677-1282&t=541JDn9Znr9teWIT-11

Basically, beneath a certain viewport width, I'd like visitors to be able to toggle between the `header carousel` views. I'm not sure how best to build this! So please make your best attempt based on the visual design, ignoring the frame structure as needed. I'd also like a nice, snappy fade in transition when toggling between the frames.

### Footer
Let's ignore the footer for now; it's a little complicated, so I'd like to walk you through the intended functionality.