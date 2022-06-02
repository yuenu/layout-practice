const matchingSection = document.querySelector(".matching");
const resultSection = document.querySelector(".result");

window.setTimeout(() => {
  matchingSection.style.display = "none";
  resultSection.classList.add("show");
}, 4000);
