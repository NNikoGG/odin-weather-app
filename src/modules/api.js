function buildUrl(query) {
  const apiKey = "93486148db0f4cbb96b100525242903";
  const url = "https://api.weatherapi.com/v1/current.json";
  return `${url}?key=${apiKey}&q=${query}`;
}

async function getWeather(location) {
  const url = buildUrl(location);
  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}

export { getWeather };
