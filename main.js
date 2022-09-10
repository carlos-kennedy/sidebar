const nav = document.querySelector("nav");
const label = document.querySelector("label");
const meowSound = new Audio("./assets/meow-cat.mp3");
const button = document.querySelector(".open-menu");

const changeSize = () => {
  nav.classList.toggle("active");
  meowSound.play();
  nav.style.transition = "1s";
};

button.addEventListener("click", changeSize);
label.addEventListener("click", changeSize);
