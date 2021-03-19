// Movement Anaimation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

//Moving Animation Event
card.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animation In

container.addEventListener("mouseenter", () => {
  card.style.transition = "none";
  //Popout
  sneaker.style.width = "20rem";
  title.style.transform = `translateZ(150px)`;
  sneaker.style.transform = "translateZ(200px) rotateZ(-45deg)";
  description.style.transform = "translateZ(100px)";
  sizes.style.transform = "translateZ(150px)";
  purchase.style.transform = "translateZ(100px)";
});

//Animation Out
container.addEventListener("mouseleave", () => {
  card.style.transition = `all 0.5s ease`;
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
  sneaker.style.width = "15rem";
  title.style.transform = `translateZ(0px)`;
  sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
  description.style.transform = "translateZ(0px)";
  sizes.style.transform = "translateZ(0px)";
  purchase.style.transform = "translateZ(0px)";
});
