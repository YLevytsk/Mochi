import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Mochi/", // ✅ GitHub Pages путь
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ Указываем папку для сборки
    rollupOptions: {
      input: "index.html", // ✅ Указываем главный файл
    },
  },
  esbuild: {
    jsx: "automatic", // ✅ Позволяет использовать JSX в файле index.js
  },
});










