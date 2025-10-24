import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  created: z.date(),
  updated: z.date(),
  growth: z.enum(['seedling', 'budding', 'evergreen']),
  topics: z.array(z.string()),
  featured: z.boolean().default(false),
  draft: z.boolean().default(false),
});

const notesCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.literal('note'),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.literal('project'),
    category: z.enum(['dev', '3d-printing', 'product']),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .optional(),
  }),
});

const journalsCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.literal('journal'),
    project: z.string(),
    entry: z.number().optional(),
  }),
});

const photographyCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.literal('photo-essay'),
    category: z.enum(['travel', 'astro', 'general']),
    coverImage: z.string().optional(),
    location: z.string().optional(),
  }),
});

const collectionsCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.literal('collection'),
  }),
});

export const collections = {
  notes: notesCollection,
  projects: projectsCollection,
  journals: journalsCollection,
  photography: photographyCollection,
  collections: collectionsCollection,
};
