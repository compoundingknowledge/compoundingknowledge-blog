import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Use 'server' to ensure all Keystatic API routes are handled on-demand
  output: 'server',

  // Standard Vercel adapter for Astro 5
  adapter: vercel(),

  integrations: [
    tailwind(),
    react(),
    keystatic()
  ],
});