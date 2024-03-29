import "./style.css";

const apiKey = "93486148db0f4cbb96b100525242903";
let query = "London";

async function getWeather() {
  const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=no`);
  const weatherData = await response.json();
  console.log(weatherData);
}
getWeather();
