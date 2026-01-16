
const BASE_URL = "https://api.frankfurter.dev/v1/latest";


const supportedCurrencies = [
  "USD", "EUR", "INR", "GBP", "JPY", "AUD", "CAD", "CHF",
  "CNY", "HKD", "NZD", "SEK", "NOK", "DKK", "SGD",
  "KRW", "THB", "IDR", "MYR", "PHP", "ZAR", "MXN",
  "BRL", "RUB", "TRY", "ILS", "PLN", "CZK", "HUF"
];

const amountInput = document.querySelector("input");
const outputDiv = document.querySelector(".outputDiv");
const convertBtn = document.querySelector(".buttonDiv button");

const fromSelect = document.querySelector(".from select");
const toSelect = document.querySelector(".to select");
const allSelects = document.querySelectorAll(".innerDiv select");


allSelects.forEach((select) => {
  supportedCurrencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.innerText = currency;

    if (select.name === "from" && currency === "USD") option.selected = true;
    if (select.name === "to" && currency === "INR") option.selected = true;

    select.append(option);
  });

  select.addEventListener("change", (e) => {
    updateFlag(e.target);
    updateExchangeRate();
  });
});


const updateFlag = (element) => {
  const currencyCode = element.value;
  const countryCode = countryList[currencyCode];

  const img = element.parentElement.querySelector("img");
  if (countryCode) {
    img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
  }
};


const updateExchangeRate = async () => {
  let amount = amountInput.value;

  if (amount === "" || amount <= 0) {
    amount = 1;
    amountInput.value = 1;
  }

  const fromCurrency = fromSelect.value;
  const toCurrency = toSelect.value;

  const url = `${BASE_URL}?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;

  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("API Error");

    const data = await response.json();
    const convertedAmount = data.rates[toCurrency].toFixed(2);

    outputDiv.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  } catch (error) {
    console.error(error);
    outputDiv.innerText = " Conversion not available";
  }
};

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateFlag(fromSelect);
  updateFlag(toSelect);
  updateExchangeRate();
});
