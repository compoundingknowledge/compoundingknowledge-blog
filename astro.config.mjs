import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Use server mode for better Keystatic dashboard handling in Astro 5
  adapter: vercel(),
  integrations: [
    react(),
    keystatic()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});