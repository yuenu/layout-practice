const changeButton = document.querySelector(".plan-button");
const selectPlan = document.querySelector(".select-plan");
const currentPlan = document.querySelector(".current-plan");
const containerEl = document.querySelector("#container");
const paymentButton = document.querySelector(".payment");
const screenEl = document.getElementById("screen");
const backButton = document.querySelector(".process-header img");

const plans = [
  {
    id: "week",
    name: "Weekly Plan",
    price: "1.99",
    active: false,
  },
  {
    id: "month",
    name: "Monthly Plan",
    price: "4.99",
    active: false,
  },
  {
    id: "year",
    name: "Annual Plan",
    price: "59.99",
    active: true,
  },
];

window.addEventListener("click", (e) => {
  if (
    e.target !== changeButton &&
    e.target.classList.length > 0 &&
    !selectPlan.querySelector("." + e.target.classList)
  ) {
    selectPlan.style.opacity = "0";
    selectPlan.style.visibility = "hidden";
  }
});

changeButton.addEventListener("click", onChangePlan);

function onChangePlan() {
  selectPlan.innerHTML = onAddOptionSelect();
  selectPlan.style.opacity = "1";
  selectPlan.style.visibility = "visible";
  onSelectClick();
}

function onAddOptionSelect() {
  let data = "";
  plans.forEach((plan) => {
    data += `
      <div class="plan-option ${plan.active ? "active" : ""}">
        <div class="plan-main">
          <img
            class="plan-icon"
            src="./images/icon-music-1.svg"
            alt="music"
          />
          <div class="plan-current">
            <h5 class="plan-name">${plan.name}</h5>
            <p class="plan-price">$${plan.price}/${plan.id}</p>
          </div>
        </div>
        <button class="plan-button" data-plan=${plan.id}>
          ${plan.active ? "active" : "select"}
        </button>
      </div>
      `;
  });
  return data;
}

function onSelectClick() {
  const buttons = document.querySelectorAll(".plan-button");
  plans.forEach((p) => (p.active = false));
  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      updatedCurrentPlan(e.target.dataset.plan);
      selectPlan.style.opacity = "0";
      selectPlan.style.visibility = "hidden";
    });
  });
}

function updatedCurrentPlan(selectPlen) {
  const plan = plans.filter((plan) => plan.id === selectPlen)[0];

  plan.active = true;

  currentPlan.innerHTML = `
  <div class="plan-main">
    <img
      class="plan-icon"
      src="./images/icon-music.svg"
      alt="music"
    />
    <div class="plan-current">
      <h5 class="plan-name">${plan.name}</h5>
      <p class="plan-price">$${plan.price}/year</p>
    </div>
  </div>

  <button class="plan-button" data-plan=${plan.id}>Change</button>
  `;

  currentPlan
    .querySelector(".plan-button")
    .addEventListener("click", onChangePlan);
}

paymentButton.addEventListener("click", () => {
  paymentButton.innerHTML = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
  paymentButton.disabled = true;
  setTimeout(() => {
    screenEl.style.transform = "translateX(-360px)";
    paymentButton.innerHTML = "Proceed to Payment";
    paymentButton.disabled = false;
  }, 1000);
});

backButton.addEventListener("click", () => {
  screenEl.style.transform = "translateX(0px)";
});
