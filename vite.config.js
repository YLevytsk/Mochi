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
    emptyOutDir: true,  // ✅ Очищаем `dist/` перед каждой сборкой
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: 'index.html',  // ✅ Указываем явно index.html
        mainJS: 'main.jsx',  // ✅ Принудительно включаем main.jsx в сборку
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: '[name].js',  // ✅ Теперь `main.jsx` → `main.js`
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});
