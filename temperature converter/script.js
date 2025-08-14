const celsiusEl = document.getElementById("celsius")
const fahrenheitEl = document.getElementById("fahrenheit")
const kelvinEl = document.getElementById("kelvin")

function temperatureCalculate(event){
    const inputValue = +event.target.value

    switch(event.target.name){
        case "celsius":
        kelvinEl.value = (inputValue + 273.32).toFixed(2);
        fahrenheitEl.value = (inputValue * 1.8 + 32).toFixed(2);
        break;
        case "fahrenheit":
        celsiusEl.value = ((inputValue - 32) / 1.8).toFixed(2);
      kelvinEl.value = ((inputValue - 32) / 1.8 + 273.32).toFixed(2);
        break;
        case "kelvin":
          celsiusEl.value = (inputValue - 273.32).toFixed(2);
      fahrenheitEl.value = ((inputValue - 273.32) * 1.8 + 32).toFixed(2);
        break;
        default:
            alert("Error!!")
    }
}