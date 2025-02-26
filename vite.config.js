import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    base: './',  // ✅ Исправлено для Vercel и GitHub Pages
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: '.',  // ✅ Корень проекта
    build: {
      sourcemap: true,
      emptyOutDir: true,  // ✅ Очищаем dist перед каждой сборкой
      outDir: './dist',  // ✅ Сборка в dist/
      rollupOptions: {
        input: 'index.html',  // ✅ Используем index.html
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'main.js',  // ✅ Фикс пути к main.js
          assetFileNames: 'assets/[name]-[hash][extname]',  // ✅ Фикс пути для CSS и JS
        },
      },
    },
    plugins: [
      react(),
      command === 'serve' ? FullReload(['./index.html']) : null,  // ✅ Только в dev-режиме
      SortCss({
        sort: 'mobile-first',
      }),
    ].filter(Boolean), // ✅ Убираем null-значения из массива
  };
});


