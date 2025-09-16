import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  root: 'js',
  plugins: [preact()],
  build: {
    outDir: '../assets/js/',
    emptyOutDir: true,
    assetsDir: 'dist',
    rollupOptions: {
      input: 'js/contact-form.jsx'
    },
  }
});
