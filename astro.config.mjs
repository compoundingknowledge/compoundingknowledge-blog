import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  // 'server' mode ensures SSR works for the CMS
  output: 'server',

  // We use the specific serverless import to ensure Vercel knows it's a function, not a Node server
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),

  integrations: [
    // Use the official integration, not the Vite plugin
    tailwind(),
    react(),
    keystatic()
  ],
});