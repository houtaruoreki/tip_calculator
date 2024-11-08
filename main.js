const bill = document.querySelector(".bill-input");
const tip = document.querySelector(".custom-perc");
const percent = document.querySelectorAll(".perc");
const people = document.querySelector(".numof-input");
const tipAmount = document.querySelector(".tipam");
const total = document.querySelector(".tot");
const reset = document.querySelector(".button");
const redline1 = document.querySelector(".redline1");
const redline2 = document.querySelector(".redline2");

let billValue = 0;
bill.addEventListener("input", () => {
  billValue = parseFloat(bill.value);

 
  if (isNaN(billValue) || billValue <= 0) {
    billValue = 0;
    redline1.style.display = "block";
    bill.style.border = "2px solid red";
    bill.style.borderRadius = "5px";
  } else {
    redline1.style.display = "none";
    bill.style.border = "none";
  }

  calculate();
});

let tipPerc = 0;
tip.addEventListener("input", () => {
  tipPerc = parseFloat(tip.value);

  if (isNaN(tipPerc) || tipPerc < 0) {
    tipPerc = 0;
  }

  calculate();
});

let numOfp = 0;
people.addEventListener("input", () => {
  numOfp = parseInt(people.value);

  if (isNaN(numOfp) || numOfp <= 0) {
    numOfp = 0;
    redline2.style.display = "block";
    people.style.border = "2px solid red";
  } else {
    redline2.style.display = "none";
    people.style.border = "none";
  }

  calculate();
});

for (let i = 0; i < percent.length; i++) {
  percent[i].addEventListener("click", () => {
    for (let j = 0; j < percent.length; j++) {
      percent[j].classList.remove("perc-color");
    }
    tipPerc = parseInt(percent[i].textContent.replace('%', ''));  // Remove % symbol
    percent[i].classList.add("perc-color");
    calculate();
  });
}

reset.addEventListener("click", () => {
  for (let j = 0; j < percent.length; j++) {
    percent[j].classList.remove("perc-color");
  }
  bill.value = "";
  billValue = 0;
  tip.value = "";
  tipPerc = 0;
  people.value = "";
  numOfp = 0;
  tipAmount.textContent = "$0.00";
  total.textContent = "$0.00";

  // Re-enable error messages if needed
  redline1.style.display = "none";
  redline2.style.display = "none";
});

function calculate() {
  if (billValue > 0 && tipPerc > 0 && numOfp > 0) {
    let tipAmo = ((billValue / 100) * tipPerc) / numOfp;
    let total2 = (billValue + tipAmo) / numOfp;
  
    tipAmount.textContent = "$" + tipAmo.toFixed(2);
    total.textContent = "$" + total2.toFixed(2);
  } else {
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
  }
}
