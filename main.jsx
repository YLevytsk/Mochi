import React, { useEffect } from "react";
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

// Главный компонент
function Main() {
  useEffect(() => {
    adjustNavLinks();
  }, []);

  return <App />;
}

// Рендерим приложение в `#root`
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Main />);
} else {
  console.error("Элемент #root не найден в DOM!");
}


 
  
  