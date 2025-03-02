// vite.config.js
import { defineConfig } from "file:///C:/Users/lupin/Documents/Mochi/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/lupin/Documents/Mochi/node_modules/@vitejs/plugin-react/dist/index.mjs";
import fs from "fs";
import path from "path";
var vite_config_default = defineConfig({
  base: "/Mochi/",
  // ✅ Правильный путь для GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: "assets",
    rollupOptions: {
      input: "index.html",
      // ✅ Указываем `index.html`, а не `main.jsx`
      output: {
        entryFileNames: "index.js",
        // ✅ `main.jsx` → `dist/index.js`
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]"
      }
    }
  },
  esbuild: {
    jsx: "automatic"
    // ✅ Автоматически преобразовывает JSX
  }
});
var distDir = path.resolve("dist");
var assetsDir = path.join(distDir, "assets");
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}
var foldersToCopy = ["css", "images", "components"];
foldersToCopy.forEach((folder) => {
  const sourcePath = path.resolve(folder);
  const targetPath = path.join(assetsDir, folder);
  if (fs.existsSync(sourcePath)) {
    fs.mkdirSync(targetPath, { recursive: true });
    fs.readdirSync(sourcePath).forEach((file) => {
      fs.copyFileSync(path.join(sourcePath, file), path.join(targetPath, file));
      console.log(`\u{1F4C2} Copied ${file} to dist/assets/${folder}/`);
    });
  }
});
var indexJsPath = path.join(distDir, "index.js");
if (!fs.existsSync(indexJsPath)) {
  console.error("\u274C \u041E\u0448\u0438\u0431\u043A\u0430: index.js \u043D\u0435 \u0431\u044B\u043B \u0441\u043E\u0437\u0434\u0430\u043D!");
  process.exit(1);
}
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxsdXBpblxcXFxEb2N1bWVudHNcXFxcTW9jaGlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGx1cGluXFxcXERvY3VtZW50c1xcXFxNb2NoaVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbHVwaW4vRG9jdW1lbnRzL01vY2hpL3ZpdGUuY29uZmlnLmpzXCI7LyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xyXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XHJcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcclxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYmFzZTogXCIvTW9jaGkvXCIsIC8vIFx1MjcwNSBcdTA0MUZcdTA0NDBcdTA0MzBcdTA0MzJcdTA0MzhcdTA0M0JcdTA0NENcdTA0M0RcdTA0NEJcdTA0MzkgXHUwNDNGXHUwNDQzXHUwNDQyXHUwNDRDIFx1MDQzNFx1MDQzQlx1MDQ0RiBHaXRIdWIgUGFnZXNcclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgYnVpbGQ6IHtcclxuICAgIG91dERpcjogXCJkaXN0XCIsXHJcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICAgIGFzc2V0c0RpcjogXCJhc3NldHNcIixcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgaW5wdXQ6IFwiaW5kZXguaHRtbFwiLCAvLyBcdTI3MDUgXHUwNDIzXHUwNDNBXHUwNDMwXHUwNDM3XHUwNDRCXHUwNDMyXHUwNDMwXHUwNDM1XHUwNDNDIGBpbmRleC5odG1sYCwgXHUwNDMwIFx1MDQzRFx1MDQzNSBgbWFpbi5qc3hgXHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGVudHJ5RmlsZU5hbWVzOiBcImluZGV4LmpzXCIsIC8vIFx1MjcwNSBgbWFpbi5qc3hgIFx1MjE5MiBgZGlzdC9pbmRleC5qc2BcclxuICAgICAgICBjaHVua0ZpbGVOYW1lczogXCJhc3NldHMvW25hbWVdLVtoYXNoXS5qc1wiLFxyXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiBcImFzc2V0cy9bbmFtZV0tW2hhc2hdW2V4dG5hbWVdXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXNidWlsZDoge1xyXG4gICAganN4OiBcImF1dG9tYXRpY1wiLCAvLyBcdTI3MDUgXHUwNDEwXHUwNDMyXHUwNDQyXHUwNDNFXHUwNDNDXHUwNDMwXHUwNDQyXHUwNDM4XHUwNDQ3XHUwNDM1XHUwNDQxXHUwNDNBXHUwNDM4IFx1MDQzRlx1MDQ0MFx1MDQzNVx1MDQzRVx1MDQzMVx1MDQ0MFx1MDQzMFx1MDQzN1x1MDQzRVx1MDQzMlx1MDQ0Qlx1MDQzMlx1MDQzMFx1MDQzNVx1MDQ0MiBKU1hcclxuICB9LFxyXG59KTtcclxuXHJcbi8vIFx1MjcwNSBcdTA0MTNcdTA0MzBcdTA0NDBcdTA0MzBcdTA0M0RcdTA0NDJcdTA0MzhcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzBcdTA0M0RcdTA0M0RcdTA0M0VcdTA0MzUgXHUwNDNBXHUwNDNFXHUwNDNGXHUwNDM4XHUwNDQwXHUwNDNFXHUwNDMyXHUwNDMwXHUwNDNEXHUwNDM4XHUwNDM1IGBjc3MvYCwgYGltYWdlcy9gLCBgY29tcG9uZW50cy9gIFx1MDQzMiBgZGlzdC9hc3NldHMvYFxyXG5jb25zdCBkaXN0RGlyID0gcGF0aC5yZXNvbHZlKFwiZGlzdFwiKTtcclxuY29uc3QgYXNzZXRzRGlyID0gcGF0aC5qb2luKGRpc3REaXIsIFwiYXNzZXRzXCIpO1xyXG5cclxuaWYgKCFmcy5leGlzdHNTeW5jKGFzc2V0c0RpcikpIHtcclxuICBmcy5ta2RpclN5bmMoYXNzZXRzRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcclxufVxyXG5cclxuY29uc3QgZm9sZGVyc1RvQ29weSA9IFtcImNzc1wiLCBcImltYWdlc1wiLCBcImNvbXBvbmVudHNcIl07XHJcblxyXG5mb2xkZXJzVG9Db3B5LmZvckVhY2goKGZvbGRlcikgPT4ge1xyXG4gIGNvbnN0IHNvdXJjZVBhdGggPSBwYXRoLnJlc29sdmUoZm9sZGVyKTtcclxuICBjb25zdCB0YXJnZXRQYXRoID0gcGF0aC5qb2luKGFzc2V0c0RpciwgZm9sZGVyKTtcclxuXHJcbiAgaWYgKGZzLmV4aXN0c1N5bmMoc291cmNlUGF0aCkpIHtcclxuICAgIGZzLm1rZGlyU3luYyh0YXJnZXRQYXRoLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcclxuXHJcbiAgICBmcy5yZWFkZGlyU3luYyhzb3VyY2VQYXRoKS5mb3JFYWNoKChmaWxlKSA9PiB7XHJcbiAgICAgIGZzLmNvcHlGaWxlU3luYyhwYXRoLmpvaW4oc291cmNlUGF0aCwgZmlsZSksIHBhdGguam9pbih0YXJnZXRQYXRoLCBmaWxlKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGBcdUQ4M0RcdURDQzIgQ29waWVkICR7ZmlsZX0gdG8gZGlzdC9hc3NldHMvJHtmb2xkZXJ9L2ApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIFx1MjcwNSBcdTA0MUZcdTA0NDBcdTA0M0VcdTA0MzJcdTA0MzVcdTA0NDBcdTA0NEZcdTA0MzVcdTA0M0MsIFx1MDQ0MVx1MDQzRVx1MDQzN1x1MDQzNFx1MDQzMFx1MDQzQlx1MDQ0MVx1MDQ0RiBcdTA0M0JcdTA0MzggYGluZGV4LmpzYFxyXG5jb25zdCBpbmRleEpzUGF0aCA9IHBhdGguam9pbihkaXN0RGlyLCBcImluZGV4LmpzXCIpO1xyXG5pZiAoIWZzLmV4aXN0c1N5bmMoaW5kZXhKc1BhdGgpKSB7XHJcbiAgY29uc29sZS5lcnJvcihcIlx1Mjc0QyBcdTA0MUVcdTA0NDhcdTA0MzhcdTA0MzFcdTA0M0FcdTA0MzA6IGluZGV4LmpzIFx1MDQzRFx1MDQzNSBcdTA0MzFcdTA0NEJcdTA0M0IgXHUwNDQxXHUwNDNFXHUwNDM3XHUwNDM0XHUwNDMwXHUwNDNEIVwiKTtcclxuICBwcm9jZXNzLmV4aXQoMSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFdBQVc7QUFDbEIsT0FBTyxRQUFRO0FBQ2YsT0FBTyxVQUFVO0FBRWpCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQTtBQUFBLEVBQ04sU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQTtBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCO0FBQUE7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxLQUFLO0FBQUE7QUFBQSxFQUNQO0FBQ0YsQ0FBQztBQUdELElBQU0sVUFBVSxLQUFLLFFBQVEsTUFBTTtBQUNuQyxJQUFNLFlBQVksS0FBSyxLQUFLLFNBQVMsUUFBUTtBQUU3QyxJQUFJLENBQUMsR0FBRyxXQUFXLFNBQVMsR0FBRztBQUM3QixLQUFHLFVBQVUsV0FBVyxFQUFFLFdBQVcsS0FBSyxDQUFDO0FBQzdDO0FBRUEsSUFBTSxnQkFBZ0IsQ0FBQyxPQUFPLFVBQVUsWUFBWTtBQUVwRCxjQUFjLFFBQVEsQ0FBQyxXQUFXO0FBQ2hDLFFBQU0sYUFBYSxLQUFLLFFBQVEsTUFBTTtBQUN0QyxRQUFNLGFBQWEsS0FBSyxLQUFLLFdBQVcsTUFBTTtBQUU5QyxNQUFJLEdBQUcsV0FBVyxVQUFVLEdBQUc7QUFDN0IsT0FBRyxVQUFVLFlBQVksRUFBRSxXQUFXLEtBQUssQ0FBQztBQUU1QyxPQUFHLFlBQVksVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUFTO0FBQzNDLFNBQUcsYUFBYSxLQUFLLEtBQUssWUFBWSxJQUFJLEdBQUcsS0FBSyxLQUFLLFlBQVksSUFBSSxDQUFDO0FBQ3hFLGNBQVEsSUFBSSxvQkFBYSxJQUFJLG1CQUFtQixNQUFNLEdBQUc7QUFBQSxJQUMzRCxDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7QUFHRCxJQUFNLGNBQWMsS0FBSyxLQUFLLFNBQVMsVUFBVTtBQUNqRCxJQUFJLENBQUMsR0FBRyxXQUFXLFdBQVcsR0FBRztBQUMvQixVQUFRLE1BQU0sNkhBQW1DO0FBQ2pELFVBQVEsS0FBSyxDQUFDO0FBQ2hCOyIsCiAgIm5hbWVzIjogW10KfQo=
