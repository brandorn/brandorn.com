---
category: writing
layout: essay

title: Collaborative Information Architecture at Scale
description: Notes on doing IA with way more content than you can handle.

img_folder: collaborative-ia
thumb: collaborative-ia-thumb.jpg
hero: collaborative-ia-hero.jpg
hero_caption: Activity in the Mission Operations Control Room in the Mission Control Center, Building 30, on the first day of the Apollo 10 lunar orbit mission. <a href="https://spaceflight.nasa.gov/gallery/images/apollo/apollo10/html/s69-34039.html">NASA archive</a>

source_preposition: the
source_name: Viget blog
source_link: https://www.viget.com/articles/collaborative-information-architecture-at-scale/

---

<p>At least half of the work of design is not design, because design isn’t just "making things"—it’s making things <i>with other people</i>, many of whom usually aren’t designers. This is true any time you’re working with others from a domain outside of your own. Communicating ideas, marshaling stakeholder consensus, soliciting and incorporating feedback, and redefining problems that weren’t fully known at the start are all the non-design work of design, what we might generally call "facilitation."</p>

<p>Facilitation involves helping people make decisions in an unfamiliar context, which means it is a kind of translation. Translation is hard. It requires us to explain our work in plain language to help others give meaningful input. This is challenging when designing visual things, like application interfaces or editorial websites. But it is even harder when dealing with conceptual things, like information taxonomies and navigation structures. And when having to facilitate decision-making across multiple groups of stakeholders? It’s enough to make anyone want to go rogue and avoid seeking input entirely, or, more commonly, only gesture at meaningful facilitation without actually involving others in the process. But this is the real work, and it’s how the best work is done.</p>

<p>Here I describe an approach for defining new information architectures for large organizational websites managed by many stakeholder groups. There is nothing novel about this process, there is no trick to it, and it doesn't guarantee a successful IA. But it has helped me get a handle on projects that deal with content at a scale that tests the limits of comprehension—when working on websites with thousands of pages, for example. Not all of what I describe may be relevant to the work you do, but hopefully you will find elements to bring into your projects.</p>

<p>My thinking on the topic has been influenced by <a href="http://worrydream.com/">Bret Victor’s</a> essays about tools for understanding, particularly his essay “<a href="http://worrydream.com/LadderOfAbstraction/">Up and Down the Ladder of Abstraction</a>.” He begins with a question we’ve all experienced when working with more information than we can take in at once: “How can we design systems when we don't fully know what we're dealing with?” Victor goes on to talk about how we make sense of complex data sets, and why information tools should allow us to easily move between abstract representations of discrete data—the categories we use to make sense of things—and the discrete data themselves. You’d be hard-pressed to find better thinking on information architecture.</p>

<figure class="almost-body-width">
	<img src="/img/writing/collaborative-ia/collaborative-ia-victor.png" alt="">
	<figcaption>If you resolve to do one IA-related thing in 2020, consider reading this and other essays by Victor. They never fail to edify.</figcaption>
</figure>

There are four general phases to the approach I’ll outline:

<ol>
	<li><b>Auditing</b>. Begin by immersing yourself in existing content and encourage stakeholders to adopt a critical, audience-minded perspective of their content.</li>
	<li><b>Diagramming</b>. Work with stakeholders to develop new conceptual categories that better serve audiences and organizational direction.</li>
	<li><b>Elaborating</b>. Think through content in detail and test new categories against specific instances and edge cases.</li>
	<li><b>Producing</b>. Prepare content teams for production using a shared database of new sitemap pages and editorial considerations that you’ve developed incrementally.</li>
</ol>

<p>The goal of all this is to facilitate a comprehensive assessment and redefinition of a dense website without losing the momentum and perspective needed to refocus it on the needs of its visitors. Though I don’t talk about audience research or testing or content strategy here, those are necessary influencing factors on this kind of work.</p>

<h2>Auditing: Starting at Ground Level</h2>

<p>When starting an IA redesign, my first goal is to familiarize myself with the shape of the existing content: How much is there? How long are the pages? What’s on the pages? How is content distributed across the site architecture? Do some sections dwarf others? Who is the content intended for? Is it up to date? The quickest way to do this is by casually looking through the website itself. Spend some quality time getting to know content types and URL structures. At this point I’m not reading closely but rather scanning pages to get a general sense of what we’re working with.</p>

<p>After informally browsing the website, I then work to document it as comprehensively as possible. Chances are you won’t find every page by navigating a site manually, especially on large sites, so a web crawl is necessary for documenting all available pages. If the website is relatively small (< 350 pages), free tools like Rob Hammond’s <a href="https://robhammond.co/tools/seo-crawler">SEO Crawler</a> are sufficient; otherwise, you’ll need to use Google Analytics or a robust web crawler for a full audit. After exporting to CSV, isolate page names from the URL in a separate column for readability (Brian Jackson’s <a href="https://woorkup.com/export-list-urls-google-analytics-seo-audit/">short tutorial</a> is helpful). Additional analytics like page views, bounce rates, and exit/entry rates can provide helpful context for assessing content.</p>

<p>I'll then import the entire table into an Airtable base to prepare for a more focused assessment. I’ll call the base “Sitemap,” and this table, “Existing Sitemap.” My table usually looks something like this (you can view this base and make a copy <a href="https://airtable.com/invite/l?inviteId=invfI9MBnW5quvZvu&inviteToken=86ca207a001a3ac3d4ca7e722b597ff4bdf70367a51907f4c87eb5c289afd228">here</a>, if you're interested):</p>

