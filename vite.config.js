import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  base: './', // ✅ Фикс путей для Vercel и GitHub Pages
  plugins: [
    react(),  // ✅ Поддержка React и JSX
    FullReload(['index.html']),
    SortCss({ sort: 'mobile-first' }),
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: 'dist',
    copyPublicDir: true,
    rollupOptions: {
      input: 'index.html',  // ✅ Используем `index.html` как точку входа
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: 'index.js',  // ✅ Vite создаст `index.js`
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
