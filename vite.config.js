/* eslint-disable no-console */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

export default defineConfig({
  base: "/Mochi/", // ✅ GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: "index.html", // ✅ Теперь `index.html` будет включен в сборку
      output: {
        entryFileNames: "index.js", // ✅ main.jsx → dist/index.js
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
  esbuild: {
    jsx: "automatic", // ✅ JSX → JavaScript
  },
});

// ✅ Гарантированное копирование `css/`, `images/`, `components/`, `index.html`
const distDir = path.resolve("dist");
const foldersToCopy = ["css", "images", "components"];
const filesToCopy = ["index.html"]; // ✅ Добавляем index.html

if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// ✅ Копируем папки
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

// ✅ Копируем файлы (включая index.html)
filesToCopy.forEach((file) => {
  const sourcePath = path.resolve(file);
  const targetPath = path.join(distDir, file);

  if (fs.existsSync(sourcePath)) {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`📄 Copied ${file} to dist/`);
  }
});



