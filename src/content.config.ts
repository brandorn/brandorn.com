import { defineCollection, z, type SchemaContext } from 'astro:content';
import { glob } from 'astro/loaders';

const postSchema = ({ image }: SchemaContext) =>
  z.object({
    title: z.string(),
    lede: z.string().optional(),
    publishDate: z.coerce.date(),
    featured: z.boolean().default(false),
    introQuote: z.string().optional(),
    introQuoteAttribution: z.string().optional(),
    acknowledgements: z.array(z.string()).optional(),
    cover: image().optional(),
    coverAlt: z.string().optional(),
    coverCaption: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    thumbnail: image().optional(),
    thumbnailAlt: z.string().optional(),
    externalUrl: z.string().optional(),
  });

const essay = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: postSchema,
});

const photoEssay = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photo-essays' }),
  schema: postSchema,
});

export const collections = { essay, photoEssay };
