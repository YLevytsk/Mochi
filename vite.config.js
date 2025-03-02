import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Mochi/",
  plugins: [react()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
    },
  },
  esbuild: {
    loader: "jsx", // ✅ Говорим Vite, что index.js содержит JSX
    include: /.*\.js$/, // ✅ Говорим Vite, что даже файлы .js могут содержать JSX
  },
});











