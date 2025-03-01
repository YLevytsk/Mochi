import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  base: './', // ✅ Поддержка GitHub Pages и локального запуска
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
  esbuild: {
    loader: 'jsx', // ✅ Указываем, что Vite должен компилировать JSX
    include: /src\/.*\.jsx?$/, // ✅ Только файлы в `src`
    exclude: /node_modules/, // ❌ Исключаем `node_modules`
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
        entryFileNames: 'index.js', // ✅ `index.js` в корне `dist/`
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});

