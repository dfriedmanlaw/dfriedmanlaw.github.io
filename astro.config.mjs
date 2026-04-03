import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://davidfriedmanlaw.com',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
  output: 'static',
  build: {
    format: 'directory',
  },
});
