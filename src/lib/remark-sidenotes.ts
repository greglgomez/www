import { visit } from 'unist-util-visit';
import { toString } from 'mdast-util-to-string';
import type {
  Blockquote,
  Content,
  Paragraph,
  Root,
  Text,
  PhrasingContent,
} from 'mdast';
import type { Parent } from 'unist';

type CalloutType = 'sidenote' | 'stickynote';

const CALLOUT_REGEX = /^\[!([a-z0-9_-]+)\]\s*(.*)$/i;

function ensureClassName(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) return value as string[];
  if (typeof value === 'string') return value.split(/\s+/).filter(Boolean);
  return [];
}

function removeMarker(paragraph: Paragraph, marker: string) {
  const children: PhrasingContent[] = [];
  let remaining = marker.length;

  for (const child of paragraph.children) {
    if (remaining <= 0) {
      children.push(child);
      continue;
    }

    if (child.type !== 'text') {
      continue;
    }

    const value = child.value as string;

    if (remaining >= value.length) {
      remaining -= value.length;
      continue;
    }

    const updated = value.slice(remaining).trimStart();
    if (updated) {
      children.push({
        ...child,
        value: updated,
      } as Text);
    }
    remaining = 0;
  }

  paragraph.children = children;
}

function isWhitespace(node: Content | Text | PhrasingContent): boolean {
  return node.type === 'text' && typeof node.value === 'string' && /^\s*$/.test(node.value);
}

export function remarkSidenotes() {
  return (tree: Root) => {
    visit(tree, 'blockquote', (node: Blockquote, index, parent) => {
      if (!node.children.length) return;
      if (!parent) return;

      const firstChild = node.children[0];
      if (!firstChild || firstChild.type !== 'paragraph') return;

      const firstParagraph = firstChild as Paragraph;
      const paragraphText = toString(firstParagraph).trim();
      const match = CALLOUT_REGEX.exec(paragraphText);
      if (!match) return;

      const calloutType = match[1].toLowerCase() as CalloutType;
      if (calloutType !== 'sidenote' && calloutType !== 'stickynote') {
        return;
      }

      const marker = `[!${match[1]}]`;

      removeMarker(firstParagraph, marker);

      if (!toString(firstParagraph).trim()) {
        node.children.shift();
      }

      node.data ||= {};
      const rawProperties = (node.data.hProperties || {}) as Record<string, unknown>;
      const existingClassNames = ensureClassName(rawProperties.className ?? rawProperties.class);

      const classList = new Set([
        ...existingClassNames,
        calloutType === 'sidenote' ? 'sidenote' : 'stickynote',
      ]);

      node.data.hName = 'aside';
      node.data.hProperties = {
        className: Array.from(classList),
        'data-callout': calloutType,
      };

      const parentNode = parent as Parent & { children: Content[] };
      const siblings = parentNode.children;
      const currentIndex =
        typeof index === 'number' ? index : siblings.indexOf(node as unknown as Content);

      if (currentIndex < 0) {
        return;
      }

      const [sidenoteNode] = siblings.splice(currentIndex, 1);
      if (!sidenoteNode) {
        return;
      }

      let insertIndex = currentIndex;
      while (insertIndex < siblings.length && isWhitespace(siblings[insertIndex])) {
        insertIndex += 1;
      }

      if (insertIndex < siblings.length) {
        insertIndex += 1;
      }

      siblings.splice(insertIndex, 0, sidenoteNode);
    });
  };
}
