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
                async (position) => {
                    const { latitude, longitude } = position.coords;
                    const data = await this.getWeatherDataByCoordinates(latitude, longitude);
                    if (data) {
                        this.displayWeather(data);
                        this.cityInput.value = '';
                    } else {
                        alert('Unable to retrieve weather data for your location.');
                    }
                },
                () => {
                    alert('Unable to retrieve your location. Please allow location access.');
                }
            );
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }
    async getWeatherData(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
        return null;
    }
    async getWeatherDataByCoordinates(latitude, longitude) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${this.apiKey}&units=metric`);
            if (response.ok) {
                return await response.json();
            }
        } catch (error) {
            console.error('Error fetching weather data by coordinates:', error);
        }
        return null;
    }

}
const weatherApp = new WeatherService();