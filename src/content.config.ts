import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const essay = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essay' }),
  schema: z.object({
    title: z.string(),
    lede: z.string().optional(),
    year: z.number(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    photoEssay: z.boolean().default(false),
    introQuote: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essay };
