import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Makes built assets work when the site is hosted from a GitHub Pages repo subpath.
  base: './',
});
