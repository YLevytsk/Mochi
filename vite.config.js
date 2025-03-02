import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  base: "/Mochi/", // ✅ Для GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets", // ✅ Ассеты должны идти в `dist/assets/`
    rollupOptions: {
      input: "main.jsx", // ✅ Укажи главный входной файл
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

    fs.readdirSync(".")
      .filter((file) => assetExtensions.some((ext) => file.endsWith(ext)))
      .forEach((file) => {
        fs.copyFileSync(file, path.join(assetDir, file));
      });
  },
});













