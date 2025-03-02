import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  base: "/Mochi/", // ✅ GitHub Pages
  plugins: [
    react(),
    FullReload(["index.html"]), // ✅ Перезагрузка при изменении index.html
    {
      name: "fix-html-script",
      transformIndexHtml(html) {
        return html.replaceAll('src="./index.jsx"', 'src="./index.js"'); // ✅ Принудительно заменяем ВСЕ ссылки
      },
    },
  ],
  resolve: {
    alias: {},
    extensions: [".js", ".jsx"], // ✅ Поддержка JSX
  },
  esbuild: {
    jsx: "automatic", // ✅ Vite теперь компилирует JSX → JavaScript
  },
  build: {
    sourcemap: true,
    emptyOutDir: true,
    outDir: "dist",
    rollupOptions: {
      input: "index.html",
      output: {
        entryFileNames: "index.js", // ✅ Всегда создаём `index.js`
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});










