import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  root: 'src',
  plugins: [preact()],
  build: {
    outDir: '../assets/js/',
    emptyOutDir: true,
    assetsDir: 'dist',
    rollupOptions: {
      input: 'src/contact-form.jsx'
    },
  }
});
