import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  root: 'js',
  plugins: [preact()],
  build: {
    outDir: '../assets/js/dist',
    emptyOutDir: true,
    rollupOptions: {
      input: 'js/contact-form.jsx',
      output: {
        entryFileNames: '[name].js',
      }
    },
  }
});
