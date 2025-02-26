import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig({
  base: './', // ✅ Фикс путей для Vercel
  plugins: [
    react(),  // ✅ Поддержка React и JSX
    FullReload(['index.html']),
    SortCss({ sort: 'mobile-first' }),
  ],
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: 'dist',
    copyPublicDir: true,  // ✅ Гарантируем, что файлы из корня проекта попадут в dist/
    rollupOptions: {
      input: 'index.html',
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: '[name].js',  // ✅ Vite создаст main.js
        assetFileNames: 'assets/[name]-[hash][extname]',
      },
    },
  },
});




