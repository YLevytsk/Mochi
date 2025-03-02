/* eslint-disable no-console */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  base: "/Mochi/", // ✅ GitHub Pages требует указания имени репозитория
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ Все файлы собираются сюда
    emptyOutDir: true,
    assetsDir: "assets", // ✅ Все ассеты будут в `dist/assets/`
    rollupOptions: {
      input: "index.html", // ✅ Главный файл - `index.html`
      output: {
        entryFileNames: "index.js", // ✅ Теперь `index.js` создается в `dist/`
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  esbuild: {
    jsx: "automatic", // ✅ Автоматически преобразовывает JSX
  },
});

// ✅ Гарантированно создаем `dist/assets/`
const distDir = path.resolve("dist");
const assetsDir = path.join(distDir, "assets");

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// ✅ Копируем `css/`, `images/`, `components/`, `js/`
const foldersToCopy = ["css", "images", "components", "js"];

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

