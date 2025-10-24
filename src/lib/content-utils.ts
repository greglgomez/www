import { getCollection, type CollectionEntry } from 'astro:content';

type ContentEntry =
  | CollectionEntry<'notes'>
  | CollectionEntry<'projects'>
  | CollectionEntry<'journals'>
  | CollectionEntry<'photography'>
  | CollectionEntry<'collections'>;

/**
 * Get all content entries from all collections
 */
export async function getAllContent(): Promise<ContentEntry[]> {
  const [notes, projects, journals, photography, collections] =
    await Promise.all([
      getCollection('notes'),
      getCollection('projects'),
      getCollection('journals'),
      getCollection('photography'),
      getCollection('collections'),
    ]);

  return [...notes, ...projects, ...journals, ...photography, ...collections];
}

/**
 * Find content by slug across all collections
 */
export async function findContentBySlug(
  slug: string
): Promise<ContentEntry | null> {
  const allContent = await getAllContent();

  // Try exact match first
  const exactMatch = allContent.find((entry) => entry.slug === slug);
  if (exactMatch) return exactMatch;

  // Try case-insensitive match
  const caseInsensitiveMatch = allContent.find(
    (entry) => entry.slug.toLowerCase() === slug.toLowerCase()
  );
  if (caseInsensitiveMatch) return caseInsensitiveMatch;

  // Try matching against title
  const titleMatch = allContent.find(
    (entry) =>
      entry.data.title.toLowerCase().replace(/\s+/g, '-') ===
      slug.toLowerCase()
  );

  return titleMatch || null;
}

/**
 * Get all backlinks for a given slug
 * Returns entries that contain wikilinks pointing to the given slug
 */
export async function getBacklinks(slug: string): Promise<ContentEntry[]> {
  const allContent = await getAllContent();
  const backlinks: ContentEntry[] = [];

  for (const entry of allContent) {
    // Render the content to get the raw markdown
    const { body } = entry;

    // Check if this entry contains a wikilink to our slug
    const wikilinkRegex = /\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g;
    const matches = [...body.matchAll(wikilinkRegex)];

    for (const match of matches) {
      const linkedSlug = match[1].trim();

      // Check if this wikilink points to our slug
      if (
        linkedSlug === slug ||
        linkedSlug.toLowerCase() === slug.toLowerCase() ||
        linkedSlug.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
      ) {
        backlinks.push(entry);
        break; // No need to check other links in this entry
      }
    }
  }

  return backlinks;
}

/**
 * Get content URL for a given entry
 */
export function getContentUrl(entry: ContentEntry): string {
  return `/${entry.collection}/${entry.slug}`;
}

/**
 * Resolve a wikilink slug to a URL
 */
export async function resolveWikilink(slug: string): Promise<string> {
  const entry = await findContentBySlug(slug);

  if (entry) {
    return getContentUrl(entry);
  }

  // If not found, return a search URL
  return `/search?q=${encodeURIComponent(slug)}`;
}
