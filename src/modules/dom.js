import { getWeather } from "./api";
import clearOrSunny from "../img/clear-or-sunny.jpg";
import partlyCloudy from "../img/partly-cloudy.jpg";
import mist from "../img/mist.jpg";
import cloudy from "../img/cloudy.jpg";
import overcast from "../img/overcast.jpg";
import patchyRain from "../img/patchy-rain.jpg";
import patchySnow from "../img/patchy-snow.jpg";
import patchySleet from "../img/patchy-sleet.jpg";
import thunderstorm from "../img/thunderstorm.jpg";
import blowingSnow from "../img/blowing-snow.jpg";
import blizzard from "../img/blizzard.jpg";

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
      displayBackground(data.current.condition.code);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  });
}

function displayBackground(conditionCode) {
  const mainContainer = document.querySelector(".main-container");
  let backgroundUrl;
  switch (conditionCode) {
    case 1000: // Clear or sunny
      backgroundUrl = `url(${clearOrSunny})`;
      break;
    case 1003: // Partly cloudy
      backgroundUrl = `url(${partlyCloudy})`;
      break;
    case 1006: // Cloudy
      backgroundUrl = `url(${cloudy})`;
      break;
    case 1009: // Overcast
      backgroundUrl = `url(${overcast})`;
      break;
    case 1030: // Mist
      backgroundUrl = `url(${mist})`;
      break;
    case 1063: // Patchy rain
      backgroundUrl = `url(${patchyRain})`;
      break;
    case 1066: // Patchy snow
      backgroundUrl = `url(${patchySnow})`;
      break;
    case 1072: // Patchy sleet
      backgroundUrl = `url(${patchySleet})`;
      break;
    case 1087: // Thundery outbreaks
      backgroundUrl = `url(${thunderstorm})`;
      break;
    case 1114: // Blowing snow
      backgroundUrl = `url(${blowingSnow})`;
      break;
    case 1117: // Blizzard
      backgroundUrl = `url(${blizzard})`;
      break;
    default:
      backgroundUrl = `url(${clearOrSunny})`;
  }
  mainContainer.style.backgroundImage = backgroundUrl;
}

export { render };
