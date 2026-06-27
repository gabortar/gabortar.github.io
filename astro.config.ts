import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gabortar.eu',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://gabortar.eu/projects/',
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          hu: 'hu',
        },
      },
    }),
  ],
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
