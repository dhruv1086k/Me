menu = document.getElementById("menu");
menu.onclick = function() {
    navbar = document.getElementsByClassName("navCenter")[0];
    menuIcon = document.getElementById("menu");
    navbar.classList.toggle("navActive");
    if (menuIcon.classList.contains("fa-bars")) {
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");
    } else {
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");
    }
}
