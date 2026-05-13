import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ro', 'hu'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [mdx()],
});
