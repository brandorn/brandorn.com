import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = ({ image }: { image: () => z.ZodType }) =>
  z.object({
    title: z.string(),
    lede: z.string().optional(),
    year: z.number(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    introQuote: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    thumbnail: image().optional(),
    thumbnailAlt: z.string().optional(),
  });

const essay = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: postSchema,
});

const photoEssay = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photo-essays' }),
  schema: postSchema,
});

const affinity = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/affinities' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      url: z.string(),
      image: image(),
      order: z.number().optional(),
    }),
});

export const collections = { essay, photoEssay, affinity };
