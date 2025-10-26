import { getCollection } from 'astro:content';

export interface CollectionCounts {
  notes: number;
  projects: number;
  journals: number;
  photography: number;
  collections: number;
}

/**
 * Get the count of published (non-draft) items in each collection
 */
export async function getCollectionCounts(): Promise<CollectionCounts> {
  const [notes, projects, journals, photography, collections] =
    await Promise.all([
      getCollection('notes'),
      getCollection('projects'),
      getCollection('journals'),
      getCollection('photography'),
      getCollection('collections'),
    ]);

  return {
    notes: notes.filter((item) => !item.data.draft).length,
    projects: projects.filter((item) => !item.data.draft).length,
    journals: journals.filter((item) => !item.data.draft).length,
    photography: photography.filter((item) => !item.data.draft).length,
    collections: collections.filter((item) => !item.data.draft).length,
  };
}
