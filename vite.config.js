import { defineConfig } from 'vite';

import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    base: '/',  // ✅ Убираем /Mochi/, чтобы пути были правильные
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: '.',  // ✅ Указываем, что корневая папка проекта - это корень репозитория
    build: {
      sourcemap: true,
      emptyOutDir: true,  // ✅ Очищаем dist перед каждой сборкой
      outDir: './dist',  // ✅ Сборка в папку dist в корне проекта
      rollupOptions: {
        input: 'index.html',  // ✅ Используем index.html как главный входной файл
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: '[name].js',
          assetFileNames: 'assets/[name]-[hash][extname]',  // ✅ CSS и JS теперь в dist/assets/
        },
      },
    },
    plugins: [
      injectHTML(),
      FullReload(['./index.html']),  // ✅ Следим только за главным HTML
      SortCss({
        sort: 'mobile-first',
      }),
    ],
  };
});

