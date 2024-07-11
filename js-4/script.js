function fetchWeather() {
    const city = document.getElementById('cityName').value;
    const apiKey = '2d20e5065244b8133992603c3aac5480'; // Remplacez par votre clé API d'OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=fr&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Fetch error:', error);
            document.getElementById('weatherInfo').textContent = 'Erreur lors de la récupération des données météo.';
        });
}

function registerInterest() {
    console.log("L'utilisateur a exprimé un intérêt pour les mises à jour météorologiques.");
}

function displayWeather(data) {
    const weatherInfo = `À ${data.name}, il fait actuellement ${data.main.temp}°C avec ${data.weather[0].description}.`;
    document.getElementById('weatherInfo').textContent = weatherInfo;
}