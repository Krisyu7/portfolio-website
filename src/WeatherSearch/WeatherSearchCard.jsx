import React, { useState } from 'react';

// Weather Utils
const apiKey = import.meta.env.VITE_WEATHER_API_KEY;

function getWeatherEmoji(weatherId) {
    switch (true) {
        case (weatherId >= 200 && weatherId < 300):
            return "⛈️";
        case (weatherId >= 300 && weatherId < 400):
            return "🌦️";
        case (weatherId >= 500 && weatherId < 600):
            return "🌧️";
        case (weatherId >= 600 && weatherId < 700):
            return "❄️";
        case (weatherId >= 700 && weatherId < 800):
            return "🌫️";
        case (weatherId === 800):
            return "☀️";
        case (weatherId >= 801 && weatherId < 810):
            return "☁️";
        default:
            return "❓";
    }
}

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);

    if (!response.ok) {
        throw new Error("Could not fetch Weather Data");
    }

    return await response.json();
}

// Main Weather Card Component
const WeatherSearchCard = () => {
    const [city, setCity] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!city.trim()) return;

        setLoading(true);
        setError(null);

        getWeatherData(city)
            .then(data => {
                setWeatherData(data);
            })
            .catch(error => {
                setError("城市未找到，请检查城市名称");
                setWeatherData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    🌤️ Weather Search
                </h3>
            </div>

            {/* Search Form */}
            <div className="p-6">
                <div className="mb-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter city name..."
                            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            disabled={loading}
                            onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
                        />
                        <button
                            onClick={handleSubmit}
                            disabled={loading || !city.trim()}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {loading ? (
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                                "Search"
                            )}
                        </button>
                    </div>
                </div>

                {/* Weather Display */}
                {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                        <p className="text-red-600 text-sm">❌ {error}</p>
                    </div>
                )}

                {weatherData && !loading && (
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
                        <div className="text-center">
                            <h4 className="text-2xl font-bold text-gray-800 mb-2">
                                {weatherData.name}
                            </h4>

                            <div className="text-6xl mb-4">
                                {getWeatherEmoji(weatherData.weather[0].id)}
                            </div>

                            <div className="text-4xl font-bold text-blue-600 mb-2">
                                {Math.round(weatherData.main.temp - 273.15)}°C
                            </div>

                            <p className="text-lg text-gray-600 capitalize mb-4">
                                {weatherData.weather[0].description}
                            </p>

                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div className="bg-white rounded-lg p-3">
                                    <p className="text-gray-500">Humidity</p>
                                    <p className="font-semibold text-lg">{weatherData.main.humidity}%</p>
                                </div>
                                <div className="bg-white rounded-lg p-3">
                                    <p className="text-gray-500">Feels like</p>
                                    <p className="font-semibold text-lg">
                                        {Math.round(weatherData.main.feels_like - 273.15)}°C
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {!weatherData && !error && !loading && (
                    <div className="text-center py-8 text-gray-500">
                        <div className="text-4xl mb-2">🌍</div>
                        <p>Enter a city name to get weather information</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherSearchCard;