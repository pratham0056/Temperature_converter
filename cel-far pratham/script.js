function convertToCelsius() {
  var celsiusInput = parseFloat(document.getElementById("celsius").value);
  if (!isNaN(celsiusInput)) {
    var fahrenheit = (celsiusInput * 9/5) + 32;
    document.getElementById("result").innerText = `${celsiusInput}°C is ${fahrenheit.toFixed(2)}°F`;
  } else {
    document.getElementById("result").innerText = "Please enter a valid temperature in Celsius.";
  }
}
