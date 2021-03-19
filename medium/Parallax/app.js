window.addEventListener("scroll", (e) => {
  const target = document.querySelectorAll(".scroll");
  // console.log(target[0].dataset)
  // let scrolled = window.pageYOffset;
  // let rate = scrolled * -2;
  // target.style.transform = `translate3d(0px, ${rate}px, 0px)`;
  for (let i = 0; i < target.length; i++) {
    let pos = window.pageYOffset * target[i].dataset.rate;
    if (target[i].dataset.direction === 'vertical') {
      target[i].style.transform = `translate3d(0px, ${pos}px, 0px)`;
    }
    else {
      let posX = window.pageYOffset * target[i].dataset.ratex;
      let posY = window.pageYOffset * target[i].dataset.ratey;
      target[i].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
    }
  }
});
