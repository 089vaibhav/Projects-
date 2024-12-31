const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.getElementById("icon");
const weather = document.getElementById("weather");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const additional = document.getElementById("additional");

btn.addEventListener("click", () => {
    let city = input.value.trim();
    if (city) {
        getWeather(city);
    } else {
        weather.textContent = "Please enter a city name.";
        icon.innerHTML = "";
        temperature.textContent = "";
        description.textContent = "";
        additional.textContent = "";
    }
});

function getWeather(city) {
    // Clear previous results
    weather.textContent = "Loading...";
    icon.innerHTML = "";
    temperature.textContent = "";
    description.textContent = "";
    additional.textContent = "";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d3bd65629fc52cf45e34b77ccb9807ad`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            const iconCode = data.weather[0].icon;
            const tempCelsius = (data.main.temp - 273.15).toFixed(2);
            const windSpeed = data.wind.speed;
            const humidity = data.main.humidity;

            // Update UI with weather data
            icon.innerHTML = `<img src="http://openweathermap.org/img/w/${iconCode}.png" alt="Weather Icon">`;
            weather.textContent = data.weather[0].main;
            temperature.textContent = `${tempCelsius} °C`;
            description.textContent = data.weather[0].description;
            additional.innerHTML = `Wind Speed: ${windSpeed} m/s<br>Humidity: ${humidity}%`;
        })
        .catch(error => {
            weather.textContent = "City not found. Please try again.";
            console.error("Error fetching weather data:", error);
        });
}
