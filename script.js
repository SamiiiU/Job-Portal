let icon = document.querySelector(".menu")

let menus = document.querySelector(".nav-menu")

menus.classList.add("nav-menu");

icon.addEventListener("click" , function() {
        menus.classList.toggle('visible');

});