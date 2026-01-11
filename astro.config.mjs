import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // output: 'static' is default in Astro 5 and behaves like hybrid did in 4
  adapter: vercel(),
  integrations: [
    react(),
    keystatic()
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});