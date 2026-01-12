import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server',

  adapter: vercel({
    webAnalytics: { enabled: true },
    // WICHTIG: Das hilft Vercel, die korrekten Header zu setzen
    imageService: true,
  }),

  integrations: [
    tailwind(),
    react(),
    keystatic()
  ],

  // Sicherheits-Feature: Zwingt Astro, die Seite als "Site" zu verstehen
  site: 'https://compoundingknowledge-blog.vercel.app',
});