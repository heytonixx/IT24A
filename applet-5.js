class WeatherApp{
}

class WeatherService extends WeatherApp {

    constructor() {
        super();
        this.apiKey = '';
    }
    async fetchWeather() {
        const city = this.cityInput.value;
        this.apiKey = this.APIKeyInput.value.trim(); 

        if (!this.apiKey) {
            alert('Please enter your API key.');
            return;
        }
        if (city) {
            const data = await this.getWeatherData(city);
            if (data) {
                this.displayWeather(data);
            } else {
                alert('City not found. Please try again.');
            }
        } else {
            alert('Please enter a city name.');
        }
    }

    async fetchWeatherByLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(