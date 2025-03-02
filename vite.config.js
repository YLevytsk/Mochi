import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Mochi/", // ✅ GitHub Pages путь
  plugins: [react()],
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
      input: "main.jsx", // ✅ Меняем с `index.html` на `main.jsx`
      output: {
        entryFileNames: "index.js", // ✅ `index.js` появится в `dist/`
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});











