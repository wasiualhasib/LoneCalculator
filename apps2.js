function log(x) {
  return console.log(x);
}

function logd(x) {
  return console.dir(x);
}

// Monthly Payment
// Total Payment
// Total Interest

const form = document.querySelector("#loan-form");
const loanAmount = document.querySelector("#amount");
const interest = document.querySelector("#interest");
const years = document.querySelector("#years");
const selection = document.querySelector("#selection");
const monthlyPay = document.querySelector("#monthly-payment");
const totalPay = document.querySelector("#total-payment");
const totalInter = document.querySelector("#total-interest");
const loading = document.querySelector("#loading");
const results = document.querySelector("#results");

let isResult = false;
form.addEventListener("submit", calculateLone);

function calculateLone(e) {
  e.preventDefault();

  loading.style.display = "none";
  results.style.display = "none";
  let select;
  if (
    loanAmount.value != "" &&
    interest.value != "" &&
    years.value != "" &&
    selection.value != ""
  ) {
    isResult = true;
    loadingStatus(isResult);
    if (selection.value == 1) {
      const lone = parseFloat(loanAmount.value).toFixed(2);
      const interestPermonth = parseFloat(interest.value) / 100 / 12;
      const monthlyPayment =
        parseFloat(lone) / (12 * parseFloat(years.value)) +
        parseFloat(lone * interestPermonth);
      const totalPayment =
        parseFloat(lone) +
        parseFloat(lone * interestPermonth) * (12 * parseFloat(years.value));
      const totalInterest = parseFloat(
        lone * interestPermonth * years.value * 12
      );
      calculate(monthlyPayment, totalPayment, totalInterest);
    }
    if (selection.value == 2) {
      const lone = parseFloat(loanAmount.value).toFixed(2);

      const interestPermonth = parseFloat(interest.value) / 100 / 12;

      const monthlyPayment =
        parseFloat(lone / years.value) +
        parseFloat(lone * interestPermonth * years.value);
      const totalPayment =
        parseFloat(lone) +
        parseFloat(lone * interestPermonth) * parseFloat(years.value);

      const totalInterest =
        parseFloat(lone * interestPermonth) * parseFloat(years.value);
      calculate(monthlyPayment, totalPayment, totalInterest);
    }
  } else {
    isResult = false;
    showError(isResult);
  }

  function calculate(a, b, c) {
    monthlyPay.value = parseInt(a.toFixed(2));
    totalPay.value = parseInt(b.toFixed(2));
    totalInter.value = parseInt(c.toFixed(2));
  }

  function loadingStatus(status) {
    if (status) {
      loading.style.display = "block";
      results.style.display = "none";
      setTimeout(() => {
        loading.style.display = "none";
        results.style.display = "block";
      }, 1000);
    } else {
      loading.style.display = "block";
      setTimeout(() => {
        loading.style.display = "none";
      }, 1000);
    }
  }

  function showError(status) {
    const divError = document.createElement("div");
    divError.className = "alert alert-danger";
    divError.appendChild(document.createTextNode("Please check your form"));
    const card = document.querySelector(".card");
    const heading = document.querySelector(".heading");
    card.insertBefore(divError, heading);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 1000);
    loadingStatus(status);
  }
}
