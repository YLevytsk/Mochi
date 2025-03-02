import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  base: "/Mochi/", // ✅ ПРАВИЛЬНЫЙ путь для GitHub Pages
  plugins: [
    react(),
    FullReload(["index.html"]), // ✅ Перезагрузка при изменении index.html
  ],
  resolve: {
    alias: {},
    extensions: [".js", ".jsx"], // ✅ Поддержка JSX
  },
  esbuild: {
    jsx: "preserve", // ✅ Оставляет JSX без преобразований
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: "dist", // ✅ Сборка в `dist`
    rollupOptions: {
      input: "index.html", // ✅ Указываем `index.html` в корне
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
        entryFileNames: "index.js", // ✅ Убедись, что в `dist/` создается `index.js`
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});









