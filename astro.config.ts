import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://gabortar.eu',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
