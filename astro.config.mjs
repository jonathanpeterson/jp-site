// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { remarkFootnotes } from './src/utils/remarkFootnotes.ts';

export default defineConfig({
  site: 'https://jonathan-peterson.com',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    react(),
  ],
  markdown: {
    remarkPlugins: [remarkFootnotes],
  },
});
