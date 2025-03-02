import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  base: './', // ✅ Поддержка GitHub Pages
  plugins: [
    react(),
    FullReload(['index.html']),
    SortCss({ sort: 'mobile-first' }),
  ],
  esbuild: {
    jsx: 'automatic', // ✅ Включает поддержку JSX без необходимости импортировать React
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // ✅ Главный HTML-файл
      external: ['react-native'], // 🔥 Исключаем `react-native` из сборки!
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: 'index.js', // ✅ `index.js` будет в `dist/`
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});


