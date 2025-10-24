import { visit } from 'unist-util-visit';
import type { Root, Link, Text } from 'mdast';

/**
 * Remark plugin to transform [[wikilinks]] into proper links
 * Supports both [[slug]] and [[slug|Display Text]] formats
 */
export function remarkWikilinks() {
  return (tree: Root) => {
    visit(tree, 'text', (node, index, parent) => {
      if (typeof node.value !== 'string' || !parent || index === null) {
        return;
      }

      const wikiLinkRegex = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
      const matches = [...node.value.matchAll(wikiLinkRegex)];

      if (matches.length === 0) {
        return;
      }

      const newNodes: (Text | Link)[] = [];
      let lastIndex = 0;

      for (const match of matches) {
        const fullMatch = match[0];
        const slug = match[1].trim();
        const displayText = match[2] ? match[2].trim() : slug;
        const matchIndex = match.index!;

        // Add text before the wikilink
        if (matchIndex > lastIndex) {
          newNodes.push({
            type: 'text',
            value: node.value.slice(lastIndex, matchIndex),
          });
        }

        // Create the link node
        // We'll resolve the actual URL by searching for content with this slug
        // For now, we create a link with the slug as the URL
        newNodes.push({
          type: 'link',
          url: `/search/${encodeURIComponent(slug)}`,
          title: null,
          children: [
            {
              type: 'text',
              value: displayText,
            },
          ],
          data: {
            hProperties: {
              className: ['wikilink'],
              'data-slug': slug,
            },
          },
        } as Link);

        lastIndex = matchIndex + fullMatch.length;
      }

      // Add remaining text
      if (lastIndex < node.value.length) {
        newNodes.push({
          type: 'text',
          value: node.value.slice(lastIndex),
        });
      }

      // Replace the text node with the new nodes
      parent.children.splice(index, 1, ...newNodes);
    });
  };
}
