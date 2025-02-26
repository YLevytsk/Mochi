import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => {
  return {
    base: './',  // ✅ Фикс для Vercel и GitHub Pages
    define: {
      [command === 'serve' ? 'global' : '_global']: {},
    },
    root: '.',
    build: {
      sourcemap: true,
      emptyOutDir: true,
      outDir: 'dist',
      rollupOptions: {
        input: 'index.html',
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor';
            }
          },
          entryFileNames: 'main.js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
    plugins: [
      react({
        jsxImportSource: "react",  // ✅ Автоимпорт React
        babel: {
          presets: ['@babel/preset-react'], // ✅ Автоопределение JSX
        },
        esbuild: {
          jsx: "automatic", // ✅ React больше не нужен в каждом файле
        },
      }),
      command === 'serve' ? FullReload(['index.html']) : null,
      SortCss({ sort: 'mobile-first' }),
    ].filter(Boolean),
  };
});




