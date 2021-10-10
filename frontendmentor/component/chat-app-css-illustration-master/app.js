// Variable
const returnBtn = document.querySelector("span.illustration__back");
const moreBtn = document.querySelector("span.illustration__more");
const moreList = document.querySelector(".more");
const userInput = document.querySelector(".illustration__footer input");
const submitTextBtn = document.querySelector(".illustration__footer button");
const textBody = document.querySelector(".illustration__body");
const box = document.querySelector(".illustration__box");
const contactList = document.querySelectorAll(
  ".illustration__contact-message li"
);

// Return button event handle
returnBtn.addEventListener("click", function () {
  box.style.transform = "translateX(0)";
});

// More button event handle
moreBtn.addEventListener("click", function (e) {
  if (moreList && !moreList.contains(e.target)) {
    moreList.classList.toggle("active");
  }
});

window.addEventListener("click", function (e) {
  if (!moreBtn.contains(e.target)) {
    moreList.classList.remove("active");
  }
});

// User input submit handle
userInput.addEventListener("change", (e) => {
  const element = document.createElement("div");
  element.classList.add("row");
  element.classList.add("sent");
  element.textContent = e.target.value;
  textBody.appendChild(element);
  e.target.value = "";
  textBody.scrollTop = textBody.scrollHeight;
});

// Contact list click event handle
contactList.forEach((contacter) => {
  contacter.addEventListener("click", function (e) {
    box.style.transform = "translateX(-21.4rem)";
  });
});
