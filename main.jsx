import ReactDOM from "react-dom/client";
import App from "./App";

// Функция для выравнивания всех кнопок по максимальной ширине
function adjustNavLinks() {
  const navLinks = document.querySelectorAll(".nav-link");

  let maxWidth = 295;

  if (navLinks.length === 0) return;

  navLinks.forEach((link) => {
    link.style.width = `${maxWidth}px`;

    link.addEventListener("mouseenter", () => {
      link.style.backgroundColor = "#E86868";
      link.style.transition = "background-color 0.3s ease";
    });

    link.addEventListener("mouseleave", () => {
      link.style.backgroundColor = "inherit";
    });
  });
}

// Следим за изменениями в `#root`
const observer = new MutationObserver(() => {
  adjustNavLinks();
});
observer.observe(document.getElementById("root"), { childList: true, subtree: true });

// Рендерим приложение в `#root`
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
}




 
  
  