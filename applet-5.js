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
    