// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { remarkWikilinks } from './src/lib/remark-wikilinks.ts';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.greglgomez.com',
  integrations: [mdx(), tailwind({ applyBaseStyles: false })],
  markdown: {
    remarkPlugins: [remarkWikilinks],
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
