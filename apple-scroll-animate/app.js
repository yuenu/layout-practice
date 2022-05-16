const app = document.querySelector("#app");
const section2 = document.querySelector("#section2");
const section3 = document.querySelector("#section3");

app.addEventListener("scroll", function () {
  if (app.scrollTop < window.innerHeight) {
    section2.style.setProperty("--scale", "3");
  } else if (app.scrollTop > window.innerHeight * 2) {
    section2.style.setProperty("--scale", "1");
  } else {
    let count =
      3 - 2 * ((app.scrollTop - window.innerHeight) / window.innerHeight);
    section2.style.setProperty("--scale", count);
    console.log("scroll", count);
    console.log("screenY", app.scrollTop, "innerHeight", window.innerHeight);
  }

  // class contorl
  let sectionScale = section2.style.getPropertyValue("--scale");
  if (sectionScale > 1) {
    section2.classList.add("sticky");
    section3.classList.add("static");
  } else {
    section2.classList.remove("sticky");
    section3.classList.remove("static");
  }
});
