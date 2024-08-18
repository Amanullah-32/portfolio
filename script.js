const menuIcon = document.querySelector("#menu");
const navbar = document.querySelector(".navbar");


menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}