import { interactive, isNumeric } from "./utils.js";

// Variable
const ccnum = document.querySelector(".card-front-line1");
const ccnumInputEl = document.querySelector("#ccnum");
// CCV
const ccv = document.querySelector(".card-back-secret-code");
const ccvInputEl = document.querySelector("#cvv");

// Date - month
const expiredMonth = document.querySelector(".card-front-date-month");
const expMonthInputEl = document.querySelector("#expmonth");

// Date - year
const expiredYear = document.querySelector(".card-front-date-year");
const expYearInputEl = document.querySelector("#expyear");

// Name
const cName = document.querySelector(".card-front-name");
const cNameInputEl = document.querySelector("#cname");

// Submit
const submitBtn = document.querySelector("#confirm-button");

/*** Varianle ***/
let creditValidate = {
  name: false,
  number: false,
  expire_date_m: false,
  expire_date_d: false,
  ccv: false,
};

/*** Event ***/
ccvInputEl.addEventListener("input", interactive.bind(null, 3, ccv));
cNameInputEl.addEventListener("input", interactive.bind(null, 20, cName));
expMonthInputEl.addEventListener(
  "input",
  interactive.bind(null, 2, expiredMonth)
);
expYearInputEl.addEventListener(
  "input",
  interactive.bind(null, 2, expiredYear)
);

// Credit Card Number Event
ccnumInputEl.addEventListener("input", (evt) => {
  // ref: https://stackoverflow.com/questions/36568425/javascript-credit-card-field-add-space-every-four-chars-backspace-not-workin
  const output = evt.target.value
    .replace(/\W/gi, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();
  ccnumInputEl.value = output;
  ccnum.textContent = output;
});

document.querySelectorAll("input").forEach((el) => {
  el.addEventListener("focus", (evt) => {
    evt.target.parentNode.classList.add("active");
  });

  el.addEventListener("focusout", (evt) => {
    evt.target.parentNode.classList.remove("active");
  });
});

/**
 * Validation
 */
function cNameValidation() {
  if (cNameInputEl.value.length === 0) {
    creditValidate.name = false;
    cNameInputEl.parentNode.nextElementSibling.style.display = "block";
    cNameInputEl.parentNode.classList.add("error");
  } else {
    creditValidate.name = true;
    cNameInputEl.parentNode.nextElementSibling.style.display = "none";
    cNameInputEl.parentNode.classList.remove("error");
  }
}

function ccnumValiation() {
  if (ccnumInputEl.value.length === 0) {
    creditValidate.number = false;
    ccnumInputEl.parentNode.nextElementSibling.textContent = "Can't be blank";
    ccnumInputEl.parentNode.nextElementSibling.style.display = "block";
    ccnumInputEl.parentNode.classList.add("error");
  } else if (!isNumeric(ccnumInputEl.value.split(" ").join(""))) {
    creditValidate.number = false;
    ccnumInputEl.parentNode.nextElementSibling.textContent =
      "Wrong format, numbers only";
    ccnumInputEl.parentNode.nextElementSibling.style.display = "block";
    ccnumInputEl.parentNode.classList.add("error");
  } else if (ccnumInputEl.value.length < 19) {
    creditValidate.number = false;
    ccnumInputEl.parentNode.nextElementSibling.textContent =
      "Wrong input length";
    ccnumInputEl.parentNode.nextElementSibling.style.display = "block";
    ccnumInputEl.parentNode.classList.add("error");
  } else {
    creditValidate.number = true;
    ccnumInputEl.parentNode.nextElementSibling.style.display = "none";
    ccnumInputEl.parentNode.classList.remove("error");
  }
}

function ccvValidation() {
  if (ccvInputEl.value.length === 0) {
    creditValidate.ccv = false;
    ccvInputEl.parentNode.nextElementSibling.textContent = "Can't be blank";
    ccvInputEl.parentNode.nextElementSibling.style.display = "block";
    ccvInputEl.parentNode.classList.add("error");
  } else if (!isNumeric(ccvInputEl.value.split(" ").join(""))) {
    creditValidate.ccv = false;
    ccvInputEl.parentNode.nextElementSibling.textContent =
      "Wrong format, numbers only";
    ccvInputEl.parentNode.nextElementSibling.style.display = "block";
    ccvInputEl.parentNode.classList.add("error");
  } else {
    creditValidate.ccv = true;
    ccvInputEl.parentNode.nextElementSibling.style.display = "none";
    ccvInputEl.parentNode.classList.remove("error");
  }
}

function expiredDateValiation() {
  if (expMonthInputEl.value.length === 0 && expYearInputEl.value.length === 0) {
    creditValidate.expire_date_m = false;
    creditValidate.expire_date_d = false;
    document.querySelector(".item-secret-date .error-message").textContent =
      "Can't be blank";
    document.querySelector(".item-secret-date .error-message").style.display =
      "block";
    expMonthInputEl.parentNode.classList.add("error");
    expYearInputEl.parentNode.classList.add("error");
  } else if (
    expMonthInputEl.value.length === 0 &&
    expYearInputEl.value.length !== 0
  ) {
    creditValidate.expire_date_m = false;
    document.querySelector(".item-secret-date .error-message").textContent =
      "Can't be blank";
    document.querySelector(".item-secret-date .error-message").style.display =
      "block";
    expMonthInputEl.parentNode.classList.add("error");
    expYearInputEl.parentNode.classList.remove("error");
  } else if (
    expYearInputEl.value.length === 0 &&
    expMonthInputEl.value.length !== 0
  ) {
    creditValidate.expire_date_d = false;
    document.querySelector(".item-secret-date .error-message").textContent =
      "Can't be blank";
    document.querySelector(".item-secret-date .error-message").style.display =
      "block";
    expYearInputEl.parentNode.classList.add("error");
    expMonthInputEl.parentNode.classList.remove("error");
  } else {
    creditValidate.expire_date_m = true;
    creditValidate.expire_date_d = true;
    document.querySelector(".item-secret-date .error-message").style.display =
      "none";
    expYearInputEl.parentNode.classList.remove("error");
    expMonthInputEl.parentNode.classList.remove("error");
  }
}

ccvInputEl.addEventListener("blur", ccvValidation);
ccnumInputEl.addEventListener("blur", ccnumValiation);
cNameInputEl.addEventListener("blur", cNameValidation);
expMonthInputEl.addEventListener("blur", expiredDateValiation);
expYearInputEl.addEventListener("blur", expiredDateValiation);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cNameValidation();
  ccnumValiation();
  ccvValidation();
  expiredDateValiation();

  let isAllValidationOk = true;
  Object.values(creditValidate).forEach((validate) => {
    if (!validate) isAllValidationOk = false;
  });

  if (isAllValidationOk) {
    console.log("go pass");
    document.querySelector(".container").style.display = "none";
    document.querySelector(".complete-container").style.display = "flex";
  }
});
