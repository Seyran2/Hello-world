const apiKey = "c340e60a63223b07d1e432e860b3d95f";
const defaultCity = "vanadzor";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${defaultCity}&appid=${apiKey}&units=metric`;

async function checkWeather() {
  const countryInput = document.getElementById("writeCountry").value;
  const city = countryInput ? countryInput : defaultCity;
  const apiUrlWithCity = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(apiUrlWithCity);
  const data = await response.json();

  document.getElementById("City").innerHTML = data.name;
  document.getElementById("Temperature").innerHTML = data.main.temp;
  document.getElementById("Weather").innerHTML = data.weather[0].description;
}

checkWeather();
