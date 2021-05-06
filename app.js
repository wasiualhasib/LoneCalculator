function log(x) {
  return console.log(x);
}

function logd(x) {
  return console.dir(x);
}

const form = document.querySelector("#loan-form");
const amount = document.querySelector("#amount");
const interest = document.querySelector("#interest");
const year = document.querySelector("#years");
const monthlyPaymnet = document.querySelector("#monthly-payment");
const totalPayment = document.querySelector("#total-payment");
const totalInterest = document.querySelector("#total-interest");
let getResult = document.querySelector("#results");
log(getResult);
let getImage = document.querySelector("#loading");
let isResult = false;
form.addEventListener("submit", calculateLone);

function calculateLone(e) {
  e.preventDefault();

  loneAmount = parseFloat(amount.value).toFixed(2);
  calculateInterest = parseFloat(interest.value) / 100 / 12;
  calculatePayment = parseFloat(years.value) * 12;
  const x = Math.pow(1 + calculateInterest, calculatePayment);
  const monthly = (loneAmount * x * calculateInterest) / (x - 1);

  if (isFinite(monthly)) {
    isResult = true;
    monthlyPaymnet.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayment).toFixed(2);
    totalInterest.value = (monthly * calculatePayment - loneAmount).toFixed(2);
    getStatus(isResult);
  } else {
    showError("Please check your numbers", isResult);
  }
}

function getStatus(status) {
  if (status) {
    getResult.style.display = "none";
    getImage.style.display = "block";
    setTimeout(() => {
      getImage.style.display = "none";
      getResult.style.display = "block";
    }, 2000);
  } else {
    getImage.style.display = "block";
    setTimeout(() => {
      getImage.style.display = "none";
    }, 2000);
  }
}

function showError(error, status) {
  getResult.style.display = "none";
  getImage.style.display = "block";
  const errorDiv = document.createElement("div");
  errorDiv.className = "alert alert-danger";
  errorDiv.appendChild(document.createTextNode(error));
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");
  card.insertBefore(errorDiv, heading);
  getStatus(status);
  setTimeout(() => {
    document.querySelector(".alert").remove();
  }, 2000);
}
