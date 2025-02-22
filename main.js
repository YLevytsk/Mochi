// Функция для выравнивания всех кнопок по максимальной ширине
window.addEventListener('load', function() {
    const navLinks = document.querySelectorAll('.nav-link'); // Получаем все элементы меню
  
    let maxWidth = 295;  // Максимальная ширина будет фиксированной для всех элементов (295px)
  
    // Устанавливаем одинаковую ширину для всех элементов
    navLinks.forEach(function(link) {
      link.style.width = `${maxWidth}px`;
    });
    
    // Добавляем обработчик событий для ховера
    navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.backgroundColor = "#E86868";  // Фон при ховере
        link.style.transition = "background-color 0.3s ease";  // Плавный переход
      });
  
      link.addEventListener('mouseleave', () => {
        link.style.backgroundColor = "";  // Убираем фон при уходе мышки
      });
    });
  });
 const hello = "Hello World"
console.log(hello)
 
  
  