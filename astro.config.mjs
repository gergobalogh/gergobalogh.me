import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ro', 'hu'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [mdx()],
});
