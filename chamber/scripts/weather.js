const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=6.740203149646105&lon=3.4212539923678262&units=metric&appid=90202f2b053d827eb6c3936c00cb6401`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=6.740203149646105&lon=3.4212539923678262&units=metric&appid=90202f2b053d827eb6c3936c00cb6401`

async function getCurrentWeather() {
    try {
        const response = await fetch(currentWeatherUrl);
        if(!response.ok){
            throw new Error("Weather data could not be retrieved");
        }
        const data = await response.json();
        console.log(data);
        document.querySelector("#current-temp").textContent = `${data.main.temp}℃`;
        document.querySelector("#weather-description").textContent = data.weather[0].description;
    } catch (error) {
        console.error("Unable to load current weather:", error);
    }
}
getCurrentWeather();


async function getForecast() {
    try {
        const response = await fetch(forecastUrl);
        if(!response.ok){
            throw new Error("Forecast data could not be retrieved");
        }
        const data = await response.json();
        const forecastContainer = document.querySelector("#forecast-container");
        const dailyForecast = data.list.filter(item =>
            item.dt_txt.includes("12:00:00")
        ).slice(0, 3);
        dailyForecast.forEach(day => {
            const card = document.createElement("div");
            card.classList.add("forecast-card");

            const date = document.createElement("h4");
            date.textContent = new Date(day.dt_txt).toLocaleDateString();

            const temperature = document.createElement("p");
            temperature.textContent = `${day.main.temp}℃`;

            const description = document.createElement("p");
            description.textContent = day.weather[0].description;

            card.append(date, temperature, description);
            forecastContainer.appendChild(card);
        });
        console.log(data);
    } catch (error) {
        console.error("Unable to load forecast:", error);
    }
} 

const menuButton = document.querySelector('#menu-button');
const navMenu = document.querySelector('#nav-menu');
if(menuButton && navMenu) {
    menuButton.addEventListener('click', () => {
        navMenu.classList.toggle('open');
        const isOpen = navMenu.classList.contains('open');
        menuButton.textContent = isOpen ? '✕' : '☰';
        menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
        menuButton.setAttribute('aria-expanded', isOpen);
    })
}

getForecast();