// Получаем все ссылки меню
const navLinks = document.querySelectorAll('.nav-link');

// Добавляем обработчик событий для каждого элемента
navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = "#E86868";  // Фон при ховере
    link.style.transition = "background-color 0.3s ease";  // Плавный переход
  });
  
  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = "";  // Убираем фон при уходе мышки
  });
});
