import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  base: './', // ✅ Фикс путей для GitHub Pages
  plugins: [
    react(),
    FullReload(['index.html']),
    SortCss({ sort: 'mobile-first' }),
  ],
  resolve: {
    alias: {
      '@': '/src', // ✅ Упрощение путей
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // ✅ Vite понимает `.jsx`
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // ✅ Главный HTML-файл
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: 'index.js', // ✅ Теперь `index.js` будет в `dist/`
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
