import getWeather from "./getWeather.js";
import showWeather from "./displayManager.js";
import "./styles.css";


let weatherData = await getWeather("Tokyo");

class Weather{
    constructor(resolvedAddress, description, temp, feelslike, humidity, 
        windgust, windspeed, pressure, uvindex, conditions, icon){
        this.resolvedAddress = resolvedAddress;
        this.description = description;
        this.temp = temp;
        this.feelslike = feelslike;
        this.humidity = humidity;
        this.windgust = windgust;
        this.windspeed = windspeed;
        this.pressure = pressure;
        this.uvindex = uvindex;
        this.conditions = conditions;
        this.icon = icon;
    }
}

let currentWeather;

export function showCurrentWeather(){
    currentWeather = new Weather(
        weatherData.resolvedAddress,
        weatherData.description,
        weatherData.currentConditions.temp,
        weatherData.currentConditions.feelslike,
        weatherData.currentConditions.humidity,
        weatherData.currentConditions.windgust,
        weatherData.currentConditions.windspeed,
        weatherData.currentConditions.pressure,
        weatherData.currentConditions.uvindex,
        weatherData.currentConditions.conditions,
        weatherData.currentConditions.icon
    );
    showWeather(currentWeather);
}

const searchButton = document.querySelector(".search-button");
const searchField = document.querySelector(".search-field");

function searchLocation() {
    getWeather('"' + searchField.value.trim() + '"')
        .then((data) => {
            weatherData = data;
            searchField.value = '';
            showCurrentWeather();
        })
        .catch((error) => {
            console.error("Error fetching weather data:", error);
        });
}

searchButton.addEventListener("click", searchLocation);

showCurrentWeather()