import getApiKey from "./getApiKey.js";

const apikey = getApiKey();

export default async function getWeather(location) {
    try {
        const loader = document.querySelector(".loader");
        loader.style.visibility = 'visible';
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apikey}`, {mode: 'cors'});
        const weatherData = await response.json();
        loader.style.visibility = 'hidden';
        return weatherData;
      } catch(err) {
        alert(err);
      }
}
