/* eslint-disable no-unused-vars */ // ✅ Отключаем правило ESLint
import React from "react";
/* eslint-enable no-unused-vars */ // ✅ Включаем правило обратно

import ReactDOM from "react-dom/client";
import App from "./App";

// Функция для выравнивания всех кнопок по максимальной ширине
function adjustNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link");

  let maxWidth = 295;

  navLinks.forEach((link) => {
    link.style.width = `${maxWidth}px`;
  });

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.backgroundColor = "#E86868";
      link.style.transition = "background-color 0.3s ease";
    });

    link.addEventListener("mouseleave", () => {
      link.style.backgroundColor = "";
    });
  });
}

// Выравниваем ссылки после загрузки страницы
window.addEventListener("load", adjustNavLinks);

// Рендерим приложение в `#root`
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} 




 
  
  