const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=metric&appid=b3003de00ba18b46fc5872351128eb47'
async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            currentTemp.textContent = `${data.main.temp} °C`;
            captionDesc.textContent = data.weather[0].description;
            weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            weatherIcon.alt = data.weather[0].description;
            console.log(data);
        } else{
            throw new Error(await response.text())
        }
    } catch (error){
        console.log(error);
    }
}
apiFetch();