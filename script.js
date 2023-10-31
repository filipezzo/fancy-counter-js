const plus = document.querySelector(".plus-svg");
const minus = document.querySelector(".minus-svg");
const reset = document.querySelector(".svg-rotate");
const value = document.querySelector("h1");
const h2 = document.querySelector("h2");
const MAX_VALUE = 5;
const INITIAL_VALUE = 0;
const PLUS_COLOR = "#0ea5e9";
const DISABLED_COLOR = "red";
let numberValue = +value.innerText;

const incrementValue = () => {
  if (numberValue < MAX_VALUE) {
    numberValue += 1;
    value.innerText = numberValue;

    if (numberValue >= MAX_VALUE) {
      h2.innerText = " Please buy the pro version";
      disableButtons();
    }
  }
};

const decrementValue = () => {
  if (numberValue > INITIAL_VALUE) {
    numberValue -= 1;
    value.innerText = numberValue;
  }
};

const resetValue = () => {
  numberValue = INITIAL_VALUE;
  value.innerText = numberValue;
  enableButtons();
  h2.innerHTML = " Fancy <br> Counter";
};

const disableButtons = () => {
  plus.setAttribute("disabled", true);
  minus.setAttribute("disabled", true);
  plus.style.color = DISABLED_COLOR;
};

const enableButtons = () => {
  plus.removeAttribute("disabled");
  minus.removeAttribute("disabled");
  plus.style.color = PLUS_COLOR;
};

plus.addEventListener("click", incrementValue);
minus.addEventListener("click", decrementValue);
reset.addEventListener("click", resetValue);
