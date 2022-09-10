const nav = document.querySelector("nav");
const meowSound = new Audio("./assets/meow-cat.mp3");
const button = document.querySelector(".open-menu");

const changeSize = () => {
  nav.classList.toggle("active");
  nav.style.transition = ".7s";
  meowSound.play();

  const buttonExpanded = button.getAttribute("aria-expanded", "aria-label");

  const buttonLabel = button.getAttribute("aria-label");
  button.setAttribute("aria-expanded", "true");
  button.setAttribute("aria-label", "open");

  if (buttonExpanded === "true" && buttonLabel === "open") {
    button.setAttribute("aria-expanded", "false");
    button.setAttribute("aria-label", "fechado");
  }
};

button.addEventListener("click", changeSize);
