// Відкриття меню
document.querySelector(".menu-btn").addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.add("is-open");
});

// Закриття меню
document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".mobile-menu").classList.remove("is-open");
});
