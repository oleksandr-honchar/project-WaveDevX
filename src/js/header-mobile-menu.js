const menu = document.querySelector(".mobile-menu");
const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuLinks = document.querySelectorAll(".menu-list-link"); // Отримуємо всі посилання в меню

// Відкриття меню
openBtn.addEventListener("click", function () {
    menu.classList.add("is-open");
    menu.style.opacity = "1"; 
    menu.style.transform = "translateX(0)"; 
    menu.style.pointerEvents = "auto"; 
});

// Закриття меню при натисканні на кнопку "Закрити"
closeBtn.addEventListener("click", function () {
    closeMenu();
});

// Закриття меню при натисканні на будь-який пункт меню
menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        closeMenu();
    });
});

// Функція для закриття меню з анімацією
function closeMenu() {
    menu.style.opacity = "0"; // Починає зменшувати прозорість
    menu.style.transform = "translateX(100%)"; // Переміщає меню вправо

    setTimeout(() => {
        menu.classList.remove("is-open"); // Видаляє клас після завершення анімації
        menu.style.pointerEvents = "none"; // Забороняє взаємодію після закриття
    }, 400); // Час затримки має збігатися з transition у CSS
}
