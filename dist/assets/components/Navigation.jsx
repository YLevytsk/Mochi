import { useEffect } from "react";

function adjustNavLinks() {
  console.log("✅ Navigation script executed!"); // ✅ Проверяем, выполняется ли код

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
    event.target.style.backgroundColor = "";
  }
}

// Подключаем обработчик при монтировании компонента
function Navigation() {
  useEffect(() => {
    adjustNavLinks(); // ✅ Код теперь выполняется при загрузке
  }, []);

  return <div>✅ Navigation Loaded</div>; // ✅ Теперь React-компонент видимый!
}

export default Navigation;


