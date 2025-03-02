/* eslint-disable no-console */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  base: "/Mochi/", // ✅ Для GitHub Pages (Название репозитория)
  plugins: [react()],
  build: {
    outDir: "dist", // ✅ Финальная папка сборки
    emptyOutDir: true, // ✅ Очищает `dist/` перед новой сборкой
    assetsDir: "assets", // ✅ Ассеты идут в `dist/assets/`
    rollupOptions: {
      input: "index.html", // ✅ Сборка начинается с `index.html`
      output: {
        entryFileNames: "index.js", // ✅ main.jsx → dist/index.js
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  esbuild: {
    jsx: "automatic", // ✅ Автоматически преобразует JSX в JS
  },
});

// ✅ Гарантированно создаем `dist/` и `dist/assets/`
const distDir = path.resolve("dist");
const assetsDir = path.join(distDir, "assets");

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// ✅ Копируем `index.html` в `dist/`
const htmlFile = "index.html";
if (fs.existsSync(htmlFile)) {
  fs.copyFileSync(htmlFile, path.join(distDir, htmlFile));
  console.log(`📂 Copied ${htmlFile} to dist/`);
}

// ✅ Копируем `css/`, `images/`, и файлы из `components/`, если они есть
const foldersToCopy = ["css", "images", "components"];

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


