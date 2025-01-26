import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import sitemapPlugin from 'vite-plugin-sitemap';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    sitemapPlugin({
      hostname:"https://yourwebsite.com",
      routes: [
        '/',
        '/about',
        '/contact',
      ],
    })
  ],
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  server: {
    open: true,
  },
});