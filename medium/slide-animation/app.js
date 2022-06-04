const leftSection = document.querySelector(".c-left");
const rightSection = document.querySelector(".c-right");
const vsIcon = document.querySelector(".c-icon");
const content = document.querySelector(".content");

window.setTimeout(() => {
  leftSection.classList.add("show");
  rightSection.classList.add("show");
  vsIcon.classList.add("show");
}, 1000);

window.setTimeout(() => {
  leftSection.classList.remove("show");
  rightSection.classList.remove("show");
  vsIcon.classList.remove("show");
  content.textContent = "QESTION PAGE";
}, 3000);
