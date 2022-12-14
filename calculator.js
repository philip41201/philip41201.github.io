const principalBox = document.querySelector("#principal");
const interestBox = document.querySelector("#interest");
const timeBox = document.querySelector("#time");
const yearBox = document.querySelector("#year");
const balanceSpan = document.querySelector("#balance");
const profitSpan = document.querySelector("#profit");

principalBox.addEventListener("input", computeBalance);
interestBox.addEventListener("input", computeBalance);
timeBox.addEventListener("input", computeBalance);
yearBox.addEventListener("input", computeBalance);

function computeBalance() {
  const principal = Number(principalBox.value);
  const interest = Number(interestBox.value) / 100;
  const time = Number(timeBox.value);
  const year = Number(yearBox.value);
  const balance = principal * Math.pow(1 + interest / time, time * year);
  const profit = balance - principal;
  balanceSpan.textContent = balance.toFixed(2);
  profitSpan.textContent = profit.toFixed(2);
}
