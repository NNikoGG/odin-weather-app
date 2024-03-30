function buildUrl() {
  const apiKey = "93486148db0f4cbb96b100525242903";
  const url = "https://api.weatherapi.com/v1/current.json";
  let query = "London";
  return `${url}?key=${apiKey}&q=${query}`;
}

async function getWeather() {
  const url = buildUrl();
  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

export { getWeather };
