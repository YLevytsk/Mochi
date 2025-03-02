import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Mochi/", // ✅ Для GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: "main.jsx", // 🔥 Указываем `main.jsx` как точку входа
      output: {
        entryFileNames: "index.js", // ✅ В dist/ создастся index.js
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});













