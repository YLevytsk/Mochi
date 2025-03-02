import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./components/Navigation"; // ✅ Файл должен существовать!

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Navigation />
    </React.StrictMode>
  );
}

export default rootElement; // ✅ Добавляем экспорт, чтобы Vite корректно собрал!


