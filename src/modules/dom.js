import { getWeather } from "./api";

function render() {
  const weatherForm = document.querySelector("#weather-form");
  const locationInput = document.querySelector("#location-input");
  const locationName = document.querySelector(".location-name");
  const localTime = document.querySelector(".local-time");
  const temp = document.querySelector(".temp");
  const feelsLikeTemp = document.querySelector(".feels-like-temp");
  const humidity = document.querySelector(".humidity");
  const windSpeed = document.querySelector(".wind-speed");
  const windDirection = document.querySelector(".wind-direction");
  const condition = document.querySelector(".condition");
  const conditionImage = document.querySelector("#condition-img");

  weatherForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const location = locationInput.value;

    try {
      const data = await getWeather(location);
      locationName.textContent = `${data.location.name}, ${data.location.country}`;
      localTime.textContent = `Local Time: ${data.location.localtime}`;
      temp.textContent = `Temperature: ${data.current.temp_c} °C`;
      feelsLikeTemp.textContent = `Feels Like: ${data.current.feelslike_c} °C`;
      condition.textContent = `${data.current.condition.text}`;
      conditionImage.src = `https:${data.current.condition.icon}`;
      humidity.textContent = `Humidity: ${data.current.humidity}%`;
      windSpeed.textContent = `Wind Speed: ${data.current.wind_kph} kph`;
      windDirection.textContent = `Wind Direction: ${data.current.wind_dir}`;
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  });
}

export { render };
