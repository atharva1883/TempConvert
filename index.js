const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  loading();
  convertToCelsius();
});

function convertToCelsius() {
  let inputValue = degree.value;
  setTimeout(function () {
    if (tempType.value === "fahrenheit") {
      const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
      celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;c`;
    } else if (tempType.value === "Kelvin") {
      const KelvinToCelsius = inputValue - 273.15;
      celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;c`;
    }
  }, 1200);
}

function loading() {
  convertBtn.innerHTML = "<span><i class='fa fa-spinner fa-spin'></i></span>";

  setTimeout(function () {
    convertBtn.innerHTML = "CONVERT";
  }, 1000);
}
