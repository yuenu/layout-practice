const kvEl = document.querySelector(".kv");
const kvListEl = document.querySelector(".kvList");

const totalImageCount = 5;
const animationDuration = 10;
let activeIndex = 0;
let preActiveIndex = 0;

/** Scroll Event */
window.addEventListener("scroll", onScroll);
function onScroll() {
  if (window.scrollY > 0) kvEl.classList.add("scroll");
  else kvEl.classList.remove("scroll");
}

/**
 * Generate Image
 *
 * @param {number} n generate counts of image
 * */
function createImage(n) {
  let imageEl = "";
  for (let i = 1; i <= n; i++) {
    const style = `
    background-image: url(https://picsum.photos/1920/1200?random=${i}); 
    animation-duration: ${animationDuration}s;`;
    imageEl += `<li style="${style}"></li>`;
  }
  return imageEl;
}

kvListEl.innerHTML = createImage(totalImageCount);

function updateImage() {
  for (let i = 0; i < kvListEl.children.length; i++) {
    const item = kvListEl.children[i];
    if (activeIndex === i || preActiveIndex === i) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  }
}

updateImage();

setInterval(function () {
  preActiveIndex = activeIndex;
  activeIndex = (activeIndex + 1 + totalImageCount) % totalImageCount;

  updateImage();
}, (animationDuration * 1000) / 2);

const navigationStyle = [
  {
    id: 1,
    name: "Life on LINE",
    width: 94,
    left: 0,
  },
  {
    id: 2,
    name: "Life on LINE",
    width: 64,
    left: 174,
  },
  {
    id: 3,
    name: "Life on LINE",
    width: 64,
    left: 318,
  },
];
