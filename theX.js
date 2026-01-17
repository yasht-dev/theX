console.log("hey");
const hamburger = document.querySelector(".hamburger");
const hamburgerX = document.querySelector(".hamburgerx")
const nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click" ,() => {
    nav.classList.add("mobile-nav-active");
}); 

hamburgerX.addEventListener("click" ,() => {
    nav.classList.remove("mobile-nav-active");
}); 