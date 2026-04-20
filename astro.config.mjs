// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import { remarkFootnotes } from './src/utils/remarkFootnotes.ts';

const isDev = process.env.NODE_ENV !== 'production';

// Keystatic only runs in dev — it requires SSR which isn't available in the static build
const devIntegrations = [];
if (isDev) {
  const { default: keystatic } = await import('@keystatic/astro');
  devIntegrations.push(keystatic());
}

export default defineConfig({
  site: 'https://jonathan-peterson.com',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    mdx(),
    react(),
    ...devIntegrations,
  ],
  markdown: {
    remarkPlugins: [remarkFootnotes],
  },
});
