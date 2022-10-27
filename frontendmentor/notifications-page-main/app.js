import { messages1, messages2, messages3 } from "./constant.js";

// Variable
const unreadCountEl = document.querySelector("#unread-count");
const markedBtn = document.querySelector("#marked-read");

// Constant
const delayTime = 2000;
let unreadCount = 3;

function setUnreadCount(count) {
  unreadCount = count;
  unreadCountEl.textContent = count;
}

function handleUnreadEvent(evt) {
  if (evt.currentTarget.classList.contains("card-unread")) {
    evt.currentTarget.classList.remove("card-unread");
    setUnreadCount(unreadCount - 1);
  }
  evt.currentTarget.removeEventListener("click", handleUnreadEvent);
}

function appendMessage(message) {
  const cardEle = document.createElement("article");
  cardEle.classList.add("card", "card-unread");
  cardEle.innerHTML = message;
  cardEle.addEventListener("click", handleUnreadEvent);
  setUnreadCount(unreadCount + 1);

  document
    .querySelector(".content")
    .insertAdjacentElement("afterbegin", cardEle);
}

document.querySelectorAll(".card-unread").forEach((cardEle) => {
  cardEle.addEventListener("click", handleUnreadEvent);
});

markedBtn.addEventListener("click", () => {
  document.querySelectorAll(".card-unread").forEach((cardEle) => {
    cardEle.classList.remove("card-unread");
    setUnreadCount(0);
  });
});

[messages1, messages2, messages3].forEach((msg, index) => {
  setTimeout(() => {
    appendMessage(msg);
  }, delayTime * (index + 1));
});
