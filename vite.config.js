import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // sitemap eklentisi kaldırıldı
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    open: true,
  },
});
