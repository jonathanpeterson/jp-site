// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { unified } from '@astrojs/markdown-remark';
import { remarkFootnotes } from './src/utils/remarkFootnotes.ts';

export default defineConfig({
  site: 'https://jonathan-peterson.com',
  output: 'static',
  integrations: [
    mdx(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    processor: unified({
      remarkPlugins: [remarkFootnotes],
    }),
  },
});
