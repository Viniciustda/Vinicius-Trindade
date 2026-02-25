// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://viniciustda.github.io/Vinicius-Trindade/',
  base: '/Vinicius-Trindade',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: {
    enabled: false
  },
  vite: {
    plugins: [tailwindcss()]
  }
});