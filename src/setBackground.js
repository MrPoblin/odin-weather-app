import { getPixabayApiKey } from "./getApiKey.js";

export default function setBackground(weather, location){
    const left = document.querySelector(".left");
    const right = document.querySelector(".outer-right");
    const credits = document.querySelector(".credits");
    const promise = getBackground(weather, location);
    promise.then(results => {
        const url = `url("${results.hits[1].largeImageURL}")`;
        left.style.backgroundImage = url;
        right.style.backgroundImage = url;
        credits.textContent = `Photo by ${results.hits[1].user} on pixabay.com`;
    });
    
}

async function getBackground(weather, location){
    const apikey = getPixabayApiKey();
    const response = await fetch(`https://pixabay.com/api/?key=${apikey}&q=${location}+${weather}+weather&image_type=photo&orientation=horizontal`, {mode: 'cors'});
    const photoData = await response.json();
    return photoData;
}