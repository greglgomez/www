// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { remarkWikilinks } from './src/lib/remark-wikilinks.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://greglgomez.com',
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
