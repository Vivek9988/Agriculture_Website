import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const IrrigationManagement = () => {
    const [irrigationZones, setIrrigationZones] = useState([
        { id: 1, name: 'North Field', status: 'Active', moisture: 68, schedule: '6:00 AM - 7:30 AM' },
        { id: 2, name: 'South Orchard', status: 'Idle', moisture: 42, schedule: '8:00 AM - 9:00 AM' },
        { id: 3, name: 'East Greenhouse', status: 'Maintenance', moisture: 75, schedule: '10:00 AM - 10:30 AM' },
        { id: 4, name: 'West Garden', status: 'Active', moisture: 58, schedule: '4:00 PM - 5:00 PM' },
    ]);

    const [systemStatus, setSystemStatus] = useState({
        waterUsage: '1,250 gallons',
        efficiency: '82%',
        lastUpdated: 'Today, 10:45 AM',
        nextCycle: 'Tomorrow, 6:00 AM'
    });

    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [recommendation, setRecommendation] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const apiKey = '3f3d21e2c5d302ec17cdde03a53652ec'; // ⚠️ Consider storing in environment variable
                const location = 'Chicago';
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
                );

                if (!response.ok) throw new Error('Weather data not available');

                const data = await response.json();
                setWeatherData(data);

                if (data.weather[0].main.toLowerCase().includes('rain') || data.weather[0].main.toLowerCase().includes('snow')) {
                    setRecommendation('Delay irrigation - Precipitation expected');
                } else if (data.main.humidity > 80) {
                    setRecommendation('Reduce irrigation - High humidity detected');
                } else if (data.main.temp < 5) {
                    setRecommendation('Suspend irrigation - Freezing temperatures');
                } else {
                    setRecommendation('Proceed with scheduled irrigation');
                }

                setLoading(false);
            } catch (error) {
                console.error('Error fetching weather:', error);
                setRecommendation('Weather data unavailable - Using default schedule');
                setLoading(false);
            }
        };

        fetchWeather();
    }, []);

    const handleStatusChange = (zoneId, newStatus) => {
        setIrrigationZones(prevZones =>
            prevZones.map(zone =>
                zone.id === zoneId ? { ...zone, status: newStatus } : zone
            )
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Header */}
            <div className="bg-green-900 text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl font-serif font-bold mb-4">Irrigation Management System</h1>
                    <p className="text-green-100 max-w-3xl">
                        Monitor and control your farm's irrigation system with precision.
                    </p>
                </div>
            </div>

            {/* Main */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">

                {!loading && (
                    <div className={`mb-8 p-4 rounded-lg ${recommendation.includes('Delay') || recommendation.includes('Suspend')
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-green-100 text-green-800'
                        }`}>
                        <div className="flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <h3 className="font-bold">Weather Advisory</h3>
                                <p>{recommendation}</p>
                                {weatherData && (
                                    <p className="text-sm mt-1">
                                        Current: {weatherData.weather[0].description}, {weatherData.main.temp}°C, Humidity: {weatherData.main.humidity}%
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {Object.entries(systemStatus).map(([key, value]) => (
                        <div key={key} className="bg-white rounded-lg shadow-md p-6 border border-green-100">
                            <h3 className="text-sm font-medium text-green-600 uppercase tracking-wider">
                                {key.split(/(?=[A-Z])/).join(' ')}
                            </h3>
                            <p className="mt-2 text-2xl font-semibold text-green-800">{value}</p>
                        </div>
                    ))}
                </div>

                {/* Zones Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden mb-12">
                    <div className="px-6 py-4 border-b border-green-100 flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-green-800">Irrigation Zones</h2>
                        <NavLink
                            to="/irrigation/schedule"
                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                        >
                            Edit Schedule
                        </NavLink>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-green-100">
                            <thead className="bg-green-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">Zone</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">Soil Moisture</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">Schedule</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-green-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-green-100">
                                {irrigationZones.map((zone) => (
                                    <tr key={zone.id}>
                                        <td className="px-6 py-4">{zone.name}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${zone.status === 'Active'
                                                ? 'bg-green-100 text-green-800'
                                                : zone.status === 'Idle'
                                                    ? 'bg-blue-100 text-blue-800'
                                                    : 'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {zone.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center">
                                                <div className="w-24 bg-gray-200 rounded-full h-2.5">
                                                    <div
                                                        className={`h-2.5 rounded-full ${zone.moisture > 70 ? 'bg-blue-600' :
                                                            zone.moisture > 40 ? 'bg-green-600' : 'bg-red-600'
                                                            }`}
                                                        style={{ width: `${zone.moisture}%` }}
                                                    ></div>
                                                </div>
                                                <span className="ml-2 text-gray-600">{zone.moisture}%</span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">{zone.schedule}</td>
                                        <td className="px-6 py-4 text-sm font-medium">
                                            <button
                                                onClick={() =>
                                                    handleStatusChange(zone.id, zone.status === 'Active' ? 'Idle' : 'Active')}
                                                className={`mr-2 ${zone.status === 'Active'
                                                    ? 'text-red-600 hover:text-red-900'
                                                    : 'text-green-600 hover:text-green-900'
                                                    }`}
                                            >
                                                {zone.status === 'Active' ? 'Stop' : 'Start'}
                                            </button>
                                            <button className="text-blue-600 hover:text-blue-900">Details</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Tips */}
                <div className="bg-green-800 text-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-green-700">
                        <h2 className="text-xl font-semibold">Water Conservation Tips</h2>
                    </div>
                    <div className="px-6 py-4">
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Water early in the morning to reduce evaporation</li>
                            <li>Use drip irrigation for targeted watering</li>
                            <li>Regularly check for leaks in your irrigation system</li>
                            <li>Adjust watering based on seasonal needs</li>
                            <li>Group plants with similar water requirements together</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IrrigationManagement;
