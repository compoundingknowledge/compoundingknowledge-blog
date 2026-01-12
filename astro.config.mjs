import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  output: 'server', // Keeps Vercel happy

  adapter: vercel({
    webAnalytics: { enabled: true },
    imageService: true,
  }),

  integrations: [
    react(),
    keystatic()
    // Note: tailwind() integration is REMOVED here
  ],

  vite: {
    plugins: [
      tailwindcss() // Tailwind 4 lives here now
    ]
  }
});