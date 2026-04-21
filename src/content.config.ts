import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const writingCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    banner: z.string().optional(),
    slug: z.string().optional(),
  }),
});

const djCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/dj' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
  }),
});

const pagesCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date().optional(),
    banner: z.string().optional(),
  }),
});

export const collections = {
  writing: writingCollection,
  dj: djCollection,
  pages: pagesCollection,
};
