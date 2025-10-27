import { defineCollection, z } from 'astro:content';

// Minimal schema - let wikilinks handle the connections
const baseSchema = z.object({
  title: z.string(),
  created: z.date(),
  updated: z.date(),
  growth: z.enum(['seedling', 'budding', 'evergreen']),
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
  }),
});

const essaysCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.literal('essay'),
  }),
});

const resourcesCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    type: z.literal('resource'),
  }),
});

export const collections = {
  notes: notesCollection,
  projects: projectsCollection,
  essays: essaysCollection,
  resources: resourcesCollection,
};
