import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://elizabethcay.dev',
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },
});
