import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    base: '/goit-js-hw-12/',  // Если проект развернут в подкаталоге
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: '.',  // Указываем, что корневая папка проекта - это корень репозитория
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync('./*.html'),  // Указываем HTML-файлы, которые находятся в корне
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: chunkInfo => {
            if (chunkInfo.name === 'commonHelpers') {
              return 'commonHelpers.js';
            }
            return '[name].js';
          },
          assetFileNames: assetInfo => {
            if (assetInfo.name && assetInfo.name.endsWith('.html')) {
              return '[name].[ext]';
            }
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
      outDir: './dist',  // Сборка в папку dist в корне проекта
      emptyOutDir: true,
    },
    plugins: [
      injectHTML(),
      FullReload(['./**/*.html']),  // Следим за всеми HTML файлами в проекте
      SortCss({
        sort: 'mobile-first',
      }),
    ],
  };
});
