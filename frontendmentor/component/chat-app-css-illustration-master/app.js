// INIT - FETCH FAKE DATA
let fakeData;
let currentUser = "Samuel Green";
let isInputNewMessage = false;
(async function () {
  await fetch("./data.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      fakeData = data;
    });
})();

// DOM - GET ELEMENT
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
const searchTerm = document.querySelector(".illustration__contact-search");
const searchInput = document.querySelector(
  ".illustration__contact-search input"
);

// FUNCTION
// Return button event handle
returnBtn.addEventListener("click", function () {
  userInput.value = "";
  box.style.transform = "translateX(0)";

  if (isInputNewMessage) {
    const message = document.querySelectorAll(
      ".illustration__contact-message li"
    );
    const userName = currentUser.split(" ")[0].toLowerCase();
    const previousContact = Array.from(message).filter(function (contact) {
      return contact.dataset.provider === userName;
    });
    const messagePrevew = previousContact[0].querySelector(
      ".illustration__contact-message-description"
    );

    const lastMessage =
      fakeData.user[userName].messages[
        fakeData.user[userName].messages.length - 1
      ];
    messagePrevew.textContent = lastMessage.content;
  }

  isInputNewMessage = false;
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

  if (!searchTerm.contains(e.target)) {
    searchInput.value = "";
    searchInput.style.width = "2rem";
  }
});

// User input submit handle
userInput.addEventListener("change", (e) => {
  const element = document.createElement("div");
  element.classList.add("row", "sent");
  element.textContent = e.target.value;
  textBody.appendChild(element);

  // Add new message to fakeData
  let historyMessages =
    fakeData.user[currentUser.split(" ")[0].toLowerCase()].messages;
  historyMessages.push({
    type: "text",
    message: "sent",
    content: e.target.value,
  });

  e.target.value = "";
  textBody.scrollTop = textBody.scrollHeight;
  isInputNewMessage = true;
});

// Contact item click event handle
contactList.forEach((contacter) => {
  contacter.addEventListener("click", function () {
    box.style.transform = "translateX(-21.4rem)";

    const avatar = document.querySelector(".user__avatar img");
    avatar.src = fakeData.user[contacter.dataset.provider].avatar;
    const name = document.querySelector(".user__name");
    name.textContent = fakeData.user[contacter.dataset.provider].name;
    currentUser = name.textContent;

    const body = document.querySelector(".illustration__body");
    // Remove all message from body
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    let planCount = 0;

    // Retrieve history messages
    fakeData.user[contacter.dataset.provider].messages.forEach(function (msg) {
      const element = document.createElement("div");
      switch (msg.type) {
        case "text":
          element.classList.add("row");
          if (msg.message === "sent") element.classList.add("sent");
          element.textContent = msg.content;
          body.appendChild(element);
          break;

        case "media":
          element.classList.add("media", msg.message);
          msg.content.forEach(function (imageUrl) {
            const child = document.createElement("img");
            child.src = imageUrl;
            element.appendChild(child);
          });

          body.appendChild(element);
          break;
        case "offer":
          element.classList.add("row", "plan");

          const offer = document.createElement("div");
          offer.classList.add("offer");

          const input = document.createElement("input");
          input.type = "radio";
          input.id = `plan${++planCount}`;
          input.name = "plan";
          input.value = msg.content["pirce"];

          const label = document.createElement("label");
          label.htmlFor = input.id;

          const text = document.createElement("span");
          const price = document.createElement("span");
          text.classList.add("offer__text");
          price.classList.add("offer__price");
          text.textContent = msg.content.text;
          price.textContent = "$" + msg.content["pirce"];
          label.appendChild(text);
          label.appendChild(price);

          offer.appendChild(input);
          offer.appendChild(label);
          element.appendChild(offer);

          body.appendChild(element);
          break;
      }
    });

    // scroll to the bottom
    textBody.scrollTop = textBody.scrollHeight;
  });
});

// Search term click event handle
searchTerm.addEventListener("click", function () {
  searchInput.style.width = "90%";
});
