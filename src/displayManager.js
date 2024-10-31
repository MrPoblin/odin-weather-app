import {showCurrentWeather} from "./index.js";

let isCelsius = false;

let tempButtons = document.querySelectorAll(".temperature");
tempButtons = Array.from(tempButtons);
tempButtons.forEach(element => {
    element.addEventListener("click", ()=>{
        isCelsius = !isCelsius;
        showCurrentWeather();
    })
});

export default function showWeather(weatherData){
    const temp = document.querySelector(".temp");
    if(isCelsius){
        temp.textContent = toCelsius(weatherData.temp) + "°C";
    }
    else{
        temp.textContent = weatherData.temp + "°F";
    }
    
    const address = document.querySelector(".address");
    address.textContent = weatherData.resolvedAddress;

    const description = document.querySelector(".description");
    description.textContent = weatherData.description;

    const icon = document.querySelector(".icon");
    icon.setAttribute("src", `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/SVG/2nd%20Set%20-%20Monochrome/${weatherData.icon}.svg`);

    const conditions = document.querySelector(".conditions");
    conditions.textContent = weatherData.conditions;

    const feelslike = document.querySelector(".feelslike");
    if(isCelsius){
        feelslike.textContent = toCelsius(weatherData.feelslike) + "°C";
    }
    else{
        feelslike.textContent = weatherData.feelslike + "°F";
    }
    

    const humidity = document.querySelector(".humidity");
    humidity.textContent = weatherData.humidity + "%";

    const windspeed = document.querySelector(".windspeed");
    windspeed.textContent = weatherData.windspeed + "mph";

    const windgust = document.querySelector(".windgust");
    windgust.textContent = weatherData.windgust + "mph";

    const pressure = document.querySelector(".pressure");
    pressure.textContent = weatherData.pressure + "hPa";

    const uvindex = document.querySelector(".uvindex");
    uvindex.textContent = weatherData.uvindex;
}

function toCelsius(farenheit){
    return ((Math.round(((parseFloat(farenheit) - 32) * 5 / 9) * 10))/10)
}