import { defineConfig } from 'astro/config';

// Utils and plugins
import remarkModifiedTime from './src/utils/remark-modified-time.mjs';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import icon from "astro-icon";
import pagefind from 'astro-pagefind';

// Astro Configuration
export default defineConfig({
  
  // Site Information
  site: 'https://inote.box',

  trailingSlash: 'always',
  
  prefetch: {
    prefetchAll: true
  },

  // Markdown Configuration
  markdown: {
    // Using custom Remark plugin to get modified time
    remarkPlugins: [remarkModifiedTime]
  },

  // Third-party Integrations
  integrations: [
    // Tailwind CSS for styling
    tailwind(),

    // Sitemap generator
    sitemap(),

    // Pagefind for search
    pagefind(),

    // Icon support
    icon({
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    // MDX support
    mdx()
  ]
});
