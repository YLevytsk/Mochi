import { useEffect } from "react";

// Функция для работы с навигацией
function adjustNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link");

  if (navLinks.length === 0) return;

  let maxWidth = 295;

  navLinks.forEach((link) => {
    link.style.width = `${maxWidth}px`;

    link.addEventListener("mouseenter", handleMouseEnter);
    link.addEventListener("mouseleave", handleMouseLeave);
  });

  function handleMouseEnter(event) {
    event.target.style.backgroundColor = "#E86868";
    event.target.style.transition = "background-color 0.3s ease";
  }

  function handleMouseLeave(event) {
    event.target.style.backgroundColor = ""; // Вернёт фон в исходное состояние
  }
}

// Подключаем обработчик при монтировании компонента
function Navigation() {
  useEffect(() => {
    adjustNavLinks(); // ✅ Вызываем при загрузке страницы
  }, []);

  return null; // ✅ Ничего не рендерит, только выполняет код
}

export default Navigation;
