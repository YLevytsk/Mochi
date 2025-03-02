import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Mochi/", // ✅ Путь для GitHub Pages
  plugins: [react()], // ❌ Убрали FullReload (он не нужен на проде!)
  resolve: {
    alias: {},
    extensions: [".js", ".jsx"], // ✅ Поддержка JSX
  },
  esbuild: {
    jsx: "automatic", // ✅ Позволяет JSX работать без `import React`
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
      output: {
        entryFileNames: "index.js", // ✅ Убедимся, что создаётся `index.js`
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});










