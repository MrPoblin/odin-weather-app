import getApiKey from "./getApiKey.js";

const apikey = getApiKey();

export default async function getWeather(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apikey}`, {mode: 'cors'});
        const weatherData = response.json();
        return weatherData;
      } catch(err) {
        alert(err);
      }
}
