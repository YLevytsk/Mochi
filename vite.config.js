import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Mochi/", // ✅ Устанавливаем base для GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ Директория сборки
    assetsDir: "assets", // ✅ Все ассеты будут в dist/assets
    rollupOptions: {
      input: "index.html",
      output: {
        entryFileNames: "index.js", // ✅ Всегда создаём index.js вместо index.jsx
      },
    },
  },
  esbuild: {
    jsx: "automatic", // ✅ Говорим Vite обрабатывать JSX даже в .js файлах
  },
});












