const total = document.querySelector("#total");
const tipAmount = document.querySelector("#tipAmount");
const tipBtns = document.querySelectorAll(".tip-btn");

// Error message display element
const numberOfPeopleEl = document.querySelector(".number-of-people");
const resetBtn = document.querySelector(".reset-btn");

setModel("bill");
setModel("people");
setModel("tip");
setModel("customTip");

window["tip"] = "100";

function setModel(name) {
  const model = document.querySelector('[v-model="' + name + '"]');

  Object.defineProperty(window, name, {
    get: function () {
      return model.value;
    },
    set: function (value) {
      model.value = value;
    },
  });

  model.addEventListener("input", function () {
    window[name] = this.value;
    let billNum = Number(window["bill"]);
    let peopleNum = Number(window["people"]);
    let tip = Number(window["tip"]);
    let customTip = Number(window["customTip"]);

    if (customTip > 0) {
      tip = customTip;
      tipBtns.forEach(function (tipBtn) {
        tipBtn.classList.remove("active");
      });
    }

    if (billNum > 0 && peopleNum > 0 && tip >= 100) {
      total.textContent =
        "$" + (((billNum / peopleNum) * tip) / 100).toFixed(2);
      numberOfPeopleEl.classList.remove("error");
    } else if (billNum > 0 && peopleNum > 0 && tip < 100) {
      tipAmount.textContent =
        "$" + (((billNum / peopleNum) * tip) / 100).toFixed(2);
      total.textContent =
        "$" +
        (billNum / peopleNum + ((billNum / peopleNum) * tip) / 100).toFixed(2);
      numberOfPeopleEl.classList.remove("error");
    } else if (billNum > 0 && peopleNum === 0) {
      numberOfPeopleEl.classList.add("error");
    } else {
      total.textContent = "$0.00";
    }
  });

  resetBtn.addEventListener("click", function () {
    window["bill"] = "0";
    window["people"] = "0";
    window["tip"] = "100";
    window["customTip"] = ''

    total.textContent = "$0.00";
    tipAmount.textContent = "$0.00";
    numberOfPeopleEl.classList.remove("error");

    tipBtns.forEach(function (tipBtn) {
      tipBtn.classList.remove("active");
    });
  });
}

tipBtns.forEach(function (tip) {
  tip.addEventListener("click", function () {
    window["tip"] = tip.value;
    let billNum = Number(window["bill"]);
    let peopleNum = Number(window["people"]);

    window["customTip"] = ''

    if (billNum > 0 && peopleNum > 0) {
      tipAmount.textContent =
        "$" + (((billNum / peopleNum) * tip.value) / 100).toFixed(2);
      total.textContent =
        "$" +
        (
          billNum / peopleNum +
          ((billNum / peopleNum) * tip.value) / 100
        ).toFixed(2);
    }
    //  tipBtn UI control
    tip.classList.add("active");
    tipBtns.forEach(function (tipBtn) {
      if (tipBtn !== tip) tipBtn.classList.remove("active");
    });
  });
});