const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.63&appid=e8938da0183925506c9a222c83d3f0c5&units=imperial';

async function apiFetch(){
    try{
    const response = await fetch(url);
    if(response.ok){
    const data = response.json();
    console.log(data);
    displayResults(data);
    } else{
        throw Error(await response.text());
    }
} catch (error){
    console.log(error);
}
}
async function displayResults(weatherData){
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
}

apiFetch();