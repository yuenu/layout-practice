const returnBtn = document.querySelector("span.illustration__back");
const moreBtn = document.querySelector("span.illustration__more");
const moreList = document.querySelector('.more')
const userInput = document.querySelector(".illustration__footer input");
const submitTextBtn = document.querySelector(".illustration__footer button");
const textBody = document.querySelector(".illustration__body");

returnBtn.addEventListener("click", () => {
  console.log("return");
});

moreBtn.addEventListener("click", () => {
  moreList.classList.toggle('active')
});

userInput.addEventListener("change", (e) => {
  const element = document.createElement('div')
  element.classList.add('row')
  element.classList.add('sent')
  element.textContent = e.target.value
  textBody.appendChild(element)
  e.target.value = ''
  textBody.scrollTop = textBody.scrollHeight
});
