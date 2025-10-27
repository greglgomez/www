import { getCollection } from 'astro:content';

export interface CollectionCounts {
  notes: number;
  projects: number;
  essays: number;
  resources: number;
}

/**
 * Get the count of published (non-draft) items in each collection
 */
export async function getCollectionCounts(): Promise<CollectionCounts> {
  const [notes, projects, essays, resources] =
    await Promise.all([
      getCollection('notes'),
      getCollection('projects'),
      getCollection('essays'),
      getCollection('resources'),
    ]);

  return {
    notes: notes.filter((item) => !item.data.draft).length,
    projects: projects.filter((item) => !item.data.draft).length,
    essays: essays.filter((item) => !item.data.draft).length,
    resources: resources.filter((item) => !item.data.draft).length,
  };
}
