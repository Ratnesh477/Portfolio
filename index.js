let navIcon = document.getElementById("nav-icon")
let hamburgerIcon = document.getElementById("hamburger-icon")
let xIcon = document.getElementById("x-icon")
let navLink = document.getElementById("nav-link")

navIcon.addEventListener("click", () => {
    hamburgerIcon.classList.toggle("hide")
    xIcon.classList.toggle("hide")
    navLink.classList.toggle("hide")
})