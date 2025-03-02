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
    assetsDir: "assets",
    rollupOptions: {
      input: "index.html", // ✅ Главный HTML-файл (Vite найдёт `main.jsx`)
      output: {
        entryFileNames: "index.js", // ✅ `main.jsx` → `dist/index.js`
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  esbuild: {
    jsx: "automatic", // ✅ Автоматическое преобразование JSX
  },
});

// ✅ Гарантированно копируем `css/`, `images/`, `components/`
const distDir = path.resolve("dist");
const assetsDir = path.join(distDir, "assets");

if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

const foldersToCopy = ["css", "images", "components"];

foldersToCopy.forEach((folder) => {
  const sourcePath = path.resolve(folder);
  const targetPath = path.join(assetsDir, folder);

  if (fs.existsSync(sourcePath)) {
    fs.mkdirSync(targetPath, { recursive: true });

    fs.readdirSync(sourcePath).forEach((file) => {
      fs.copyFileSync(path.join(sourcePath, file), path.join(targetPath, file));
      console.log(`📂 Copied ${file} to dist/assets/${folder}/`);
    });
  }
});

// ✅ Гарантированно копируем `index.html`
const indexHtmlPath = path.resolve("index.html");
const targetIndexHtmlPath = path.join(distDir, "index.html");

if (fs.existsSync(indexHtmlPath)) {
  fs.copyFileSync(indexHtmlPath, targetIndexHtmlPath);
  console.log(`📂 Copied index.html to dist/`);
}

// ✅ Проверяем, что `index.js` создался
const indexJsPath = path.join(distDir, "index.js");
if (!fs.existsSync(indexJsPath)) {
  console.error("❌ Ошибка: `index.js` не был создан! Проверяй `main.jsx`.");
  process.exit(1);
}




