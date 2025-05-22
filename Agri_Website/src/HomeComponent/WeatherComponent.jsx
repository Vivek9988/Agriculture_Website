import React, { useEffect, useState } from 'react';

const WeatherComponent = () => {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const city = 'Delhi';

    const fetchWeather = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f3d21e2c5d302ec17cdde03a53652ec&units=metric`
            );
            const data = await res.json();
            if (data.cod !== 200) throw new Error(data.message || "Weather data not found");
            setWeather(data);
        } catch (err) {
            console.error('Error fetching weather:', err);
            setError(err.message);
        }
        setLoading(false);
    };

    useEffect(() => {
        fetchWeather();
        const interval = setInterval(fetchWeather, 600000);
        return () => clearInterval(interval);
    }, []);

    // Agricultural recommendations based on weather
    const getAgricultureTips = () => {
        if (!weather) return [];

        const tips = [];
        const temp = weather.main.temp;
        const humidity = weather.main.humidity;
        const condition = weather.weather[0].main.toLowerCase();

        // Temperature-based tips
        if (temp < 10) tips.push("❄️ Protect crops from frost.");
        if (temp > 35) tips.push("🔥 High temperatures: Increase irrigation.");
        if (temp >= 15 && temp <= 25) tips.push("🌱 Ideal conditions for most crops.");

        // Humidity-based tips
        if (humidity > 80) tips.push("💧 High humidity: Watch for fungal diseases.");
        if (humidity < 30) tips.push("🏜️ Low humidity: Water crops more frequently.");

        // Weather condition tips
        if (condition.includes("rain")) tips.push("☔ Rain expected: Delay fertilizer application.");
        if (condition.includes("clear")) tips.push("☀️ Sunny day: Good for harvesting.");

        return tips.length > 0 ? tips : ["🌾 No significant weather alerts for crops."];
    };

    if (loading) return (
        <div className="p-6 text-center">
            <div className="animate-pulse">⏳ Loading weather data...</div>
        </div>
    );

    if (error) return (
        <div className="p-4 bg-red-50 rounded-lg text-red-600 text-center">
            ⚠️ Error: {error} <button onClick={fetchWeather} className="ml-2 underline">Retry</button>
        </div>
    );

    if (!weather) return (
        <div className="p-4 bg-yellow-50 rounded-lg text-yellow-700 text-center">
            🌱 No weather data. Check connection.
        </div>
    );

    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 max-w-md mx-auto">
            {/* Weather Header */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 text-white">
                <h2 className="text-xl font-bold">🌤️ {weather.name} Weather</h2>
                <p className="text-sm opacity-90">{new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
            </div>

            {/* Current Weather */}
            <div className="p-5 grid grid-cols-2 gap-4">
                <div className="flex items-center">
                    <span className="text-5xl mr-3">🌡️</span>
                    <div>
                        <p className="text-2xl font-bold">{weather.main.temp}°C</p>
                        <p className="text-gray-600 capitalize">{weather.weather[0].description}</p>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>💧 Humidity:</span>
                        <span>{weather.main.humidity}%</span>
                    </div>
                    <div className="flex justify-between">
                        <span>🌬️ Wind:</span>
                        <span>{weather.wind.speed} m/s</span>
                    </div>
                    <div className="flex justify-between">
                        <span>🌅 Pressure:</span>
                        <span>{weather.main.pressure} hPa</span>
                    </div>
                </div>
            </div>

            {/* Agricultural Data */}
            <div className="bg-green-50 p-4 border-t border-green-100">
                <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                    <span className="mr-2">🌱</span> Farming Advisory
                </h3>
                <ul className="space-y-2 text-sm">
                    {getAgricultureTips().map((tip, i) => (
                        <li key={i} className="flex items-start">
                            <span className="mr-2">•</span> {tip}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Refresh Button */}
            <div className="p-3 bg-gray-50 text-center">
                <button
                    onClick={fetchWeather}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                    🔄 Refresh Data
                </button>
            </div>
        </div>
    );
};

export default WeatherComponent;