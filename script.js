const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const closeButton = document.querySelector(".close");
const body = document.querySelector(".body");

menu.addEventListener("click", () => {
  nav.classList.add("nav--active");
  menu.classList.add("menu--hidden");
  closeButton.classList.add("close--active");
  body.classList.add("body--no-scroll");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("nav--active");
  menu.classList.remove("menu--hidden");
  closeButton.classList.remove("close--active");
  body.classList.remove("body--no-scroll");
});
