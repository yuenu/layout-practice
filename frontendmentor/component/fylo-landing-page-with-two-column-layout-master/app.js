const featureInputEl = document.querySelector(".feature__cta-input");
const featureCtaBtn = document.querySelector(".feature__cta-button");

const signinInputEl = document.querySelector(".signin__cta-input");
const signinCtaBtn = document.querySelector(".signin__cta-button");

featureCtaBtn.addEventListener(
  "click",
  () => handleEmail(featureInputEl),
  false
);
signinCtaBtn.addEventListener("click", () => handleEmail(signinInputEl), false);

function handleEmail(inputEl) {
  const input = inputEl.children[0];
  const message = inputEl.children[1];

  if (input.value.length === 0 || !emailValidate(input.value)) {
    message.textContent = "Please check your email is valid";
    input.classList.add("error");
    message.classList.remove("success");
    message.classList.add("error");
    message.style.visibility = "visible";
  } else {
    input.value = "";
    input.classList.remove("error");
    message.classList.remove("error");
    message.classList.add("success");
    message.textContent = "Your email was well received.";
    message.style.visibility = "visible";
    setTimeout(() => {
      message.style.visibility = "hidden";
      message.classList.remove("success");
    }, 5000);
  }
}

function emailValidate(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
