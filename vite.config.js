import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'public', // Sets the source directory to public
  build: {
    outDir: '../dist', // Builds into a dist folder in the root
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'public/index.html'),
        programs: resolve(__dirname, 'public/programs.html'),
        faculties: resolve(__dirname, 'public/faculties.html'),
        institutions: resolve(__dirname, 'public/institutions.html'),
        tests: resolve(__dirname, 'public/tests.html'),
        contact: resolve(__dirname, 'public/contact.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true
  }
});