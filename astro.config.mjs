import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkModifiedTime from './src/utils/remark-modified-time.mjs';
import sitemap from '@astrojs/sitemap';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://visvrs.vercel.app',
  markdown: {
    remarkPlugins: [remarkModifiedTime]
  },
  integrations: [tailwind(), sitemap(), mdx()]
});