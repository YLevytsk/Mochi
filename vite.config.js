import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  base: './', // ✅ Поддержка GitHub Pages
  plugins: [
    react(),
    FullReload(['public/index.html']), // ✅ Указан правильный путь
  ],
  resolve: {
    alias: {
      '@': '/src', // ✅ Упрощение путей
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'], // ✅ Поддержка JSX
  },
  esbuild: {
    jsx: 'automatic', // 🔥 Поддержка JSX без необходимости импортировать React
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: 'dist',
    rollupOptions: {
      input: 'public/index.html', // ✅ Главный HTML-файл
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





