import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  base: "/Mochi/", // ✅ Путь для GitHub Pages
  plugins: [
    react(),
    FullReload(["index.html"]), // ✅ Автоматическая перезагрузка
  ],
  resolve: {
    alias: {},
    extensions: [".js", ".jsx"], // ✅ Поддержка JSX
  },
  esbuild: {
    jsx: "automatic", // ✅ Теперь Vite компилирует JSX → JavaScript
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: "dist", // ✅ Все файлы попадут в `dist`
    rollupOptions: {
      input: "index.html", // ✅ Главный входной файл
      output: {
        entryFileNames: "index.js", // ✅ Убедимся, что Vite создаёт `index.js`
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});









