/* eslint-disable no-console */
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
    assetsDir: "assets", // ✅ Все файлы будут в `dist/assets/`
    rollupOptions: {
      input: "main.jsx", // ✅ Указываем главный входной файл
      output: {
        entryFileNames: "index.js", // ✅ Гарантированно создаем `index.js`
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});

// ✅ После сборки гарантированно копируем `css/` и `images/`
const foldersToCopy = ["css", "images"];
const distDir = path.resolve("dist");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

foldersToCopy.forEach((folder) => {
  const sourcePath = path.resolve(folder);
  const targetPath = path.join(distDir, folder);

  if (fs.existsSync(sourcePath)) {
    fs.mkdirSync(targetPath, { recursive: true });

    fs.readdirSync(sourcePath).forEach((file) => {
      fs.copyFileSync(path.join(sourcePath, file), path.join(targetPath, file));
      console.log(`📂 Copied ${file} to dist/${folder}/`);
    });
  }
});
