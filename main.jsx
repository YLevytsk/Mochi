/* eslint-disable no-unused-vars */
import React from "react"; // ✅ React нужен для рендеринга
import ReactDOM from "react-dom/client";
import App from "./App";
import Navigation from "./Navigation"; // ✅ Подключаем Navigation

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>
      <Navigation /> {/* ✅ Теперь навигация работает */}
      <App />
    </>
  );
}





 
  
  