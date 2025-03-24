const menu = document.querySelector(".mobile-menu");
const openBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const menuLinks = document.querySelectorAll(".menu-list-link"); 

openBtn.addEventListener("click", function () {
    menu.classList.add("is-open");
});

closeBtn.addEventListener("click", function () {
    closeMenu();
});

menuLinks.forEach(link => {
    link.addEventListener("click", function () {
        closeMenu();
    });
});

function closeMenu() {
    setTimeout(() => {
        menu.classList.remove("is-open"); 
    }, 400); 
}
