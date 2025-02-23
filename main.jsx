import React from "react";  // React теперь используется
import ReactDOM from "react-dom/client";
import App from "./App";

// Функция для выравнивания всех кнопок по максимальной ширине
function adjustNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link"); // Получаем все элементы меню

  let maxWidth = 295; // Фиксированная ширина для всех элементов

  // Устанавливаем одинаковую ширину для всех элементов
  navLinks.forEach((link) => {
    link.style.width = `${maxWidth}px`;
  });

  // Добавляем обработчик событий для ховера
  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.backgroundColor = "#E86868"; // Фон при ховере
      link.style.transition = "background-color 0.3s ease"; // Плавный переход
    });

    link.addEventListener("mouseleave", () => {
      link.style.backgroundColor = ""; // Убираем фон при уходе мышки
    });
  });
}

// Используем React и useEffect для вызова adjustNavLinks
function Main() {
  React.useEffect(() => {
    adjustNavLinks();
  }, []);

  return <App />;
}

// Подключаем React Developer Tools в режиме разработки
if (process.env.NODE_ENV === "development") {
  import("react-devtools");
}

// Рендерим приложение в `#root`
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);


 
  
  