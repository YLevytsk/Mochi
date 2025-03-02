/* eslint-disable no-console */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  base: "/Mochi/", // ✅ Правильный путь для GitHub Pages
  plugins: [react()],
  publicDir: ".", // ✅ Используем корневую директорию как public
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets", // ✅ Все ассеты в `dist/assets/`
    rollupOptions: {
      input: "index.html", // ✅ Входной HTML-файл
      output: {
        entryFileNames: "index.js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  buildEnd() {
    const assetExtensions = [".css", ".jpg", ".png", ".svg", ".webp"];
    const assetDir = "dist/assets";

    if (!fs.existsSync(assetDir)) {
      fs.mkdirSync(assetDir, { recursive: true });
    }

    const sourceFiles = fs.readdirSync(".");
    sourceFiles.forEach((file) => {
      if (assetExtensions.some((ext) => file.endsWith(ext))) {
        fs.copyFileSync(file, path.join(assetDir, file));
        console.log(`📂 Copied ${file} to dist/assets/`);
      }
    });
  },
});













