const inputBox= document.querySelector('.input-box');
const searchBtn= document.getElementById('searchBtn');
const weatherImage= document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity= document.getElementById('humidity');
const windSpeed= document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

 async function checkWeather(city){
const api_key="8b4e85b1506c4d6f55ef2a0f78ab5a22";
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
const weather_data = await fetch (`${url}`).then (response => response.json());



if(weather_data.cod ===`404`){
    location_not_found.style.display = "flex";
    weatherbody.style.display = "none";
    console.log("error");
    return;
}


temperature.innerHTML=`${Math.round( weather_data.main.temp-273.15)}°C`;
description.innerHTML=`${weather_data.weather[0].description}`;
humidity.innerHTML=`${weather_data.main.humidity}%`;
wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;
switch(weather_data.weather[0].main){
    case 'Clouds':
        weatherImage.src = "cloud.png";
        break;
    case 'Clear':
        weatherImage.src = "clear.png";
        break;
    case 'Rain':
        weatherImage.src = "rain.png";
        break;
    case 'Mist':
        weatherImage.src = "mist.png";
        break;
    case 'Snow':
        weatherImage.src = "snow.png";
        break;

}}
searchBtn.addEventListener('click',()=>{
 checkWeather(inputBox.value);
});