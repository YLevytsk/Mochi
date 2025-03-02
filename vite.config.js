import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: './', // ✅ Поддержка GitHub Pages
  plugins: [
    react(),
    FullReload(['index.html']), // ✅ Перезагрузка при изменении index.html
  ],
  resolve: {
    alias: {}, // 🔥 УДАЛЯЕМ лишний alias, раз нет src
    extensions: ['.js', '.jsx'], // ✅ Поддержка JSX
  },
  esbuild: {
    jsx: 'automatic', // 🔥 Поддержка JSX без необходимости импортировать React
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html', // ✅ Указываем файл в корне проекта
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







