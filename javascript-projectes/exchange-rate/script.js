const currencyEL_one = document.getElementById("currency-one");
const currencyEL_two = document.getElementById("currency-two");
const amountEl_one = document.getElementById("amount-one");
const amountEl_two = document.getElementById("amount-two");

const rateEl = document.getElementById("rate");
const swap = document.getElementById("swap");

// Fetch exchange rates and update the DOM
function calculate() {
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then((res) => res.json())
    .then((data) => {
      //  console.log(data);
      const rate = data.rates[currency_two] / data.rates[currency_one];
      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;
      amountEl_two.value = (amountEl_one.value * rate).toFixed(2);
    });
}

// Event Listeners
currencyEL_one.addEventListener("change", caclulate);
currencyEL_two.addEventListener("change", caclulate);
amountEl_one.addEventListener("input", caclulate);
amountEl_two.addEventListener("input", caclulate);

swap.addEventListener("click", () => {
  const temp = currencyEL_one.value;
  currencyEL_one.value = currencyEL_two.value;
  currencyEL_two.value = temp;
});
caclulate();
