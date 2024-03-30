import { getWeather } from "./api";

function render() {
  const weatherForm = document.querySelector("#weather-form");
  const locationInput = document.querySelector("#location-input");
  weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const location = locationInput.value;

    try {
      const data = await getWeather(location);
      console.log(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  });
}

export { render };
