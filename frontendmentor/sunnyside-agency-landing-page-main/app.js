const headerEl = document.querySelector(".header");
const arrowEl = document.querySelector(".hero-arrow");
const ctaButton = document.querySelector(".cta-button");

// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/

let last_known_scroll_position = 0;
let ticking = false;

function onScroll(scroll_pos) {
  // do something with the scroll position
  if (scroll_pos > 5) {
    headerEl.style.background = "#fff";
    headerEl.style.color = "#000";
    ctaButton.style.background = "#3DBEFF";
    ctaButton.style.color = "#fff";
  } else {
    headerEl.style.background = "transparent";
    headerEl.style.color = "#fff";
    ctaButton.style.background = "#fff";
    ctaButton.style.color = "#19536b";
  }
}

window.addEventListener("scroll", function (e) {
  last_known_scroll_position = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function () {
      onScroll(last_known_scroll_position);
      ticking = false;
    });
  }
  ticking = true;
});

arrowEl.addEventListener("click", () => {
  const element = document.querySelector("#feature");
  const elementPosition = element.getBoundingClientRect().top;
  const headerOffset = 92;
  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
});
