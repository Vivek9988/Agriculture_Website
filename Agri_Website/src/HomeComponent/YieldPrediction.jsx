import React, { useState } from 'react';

const Soil = () => {
    const [formData, setFormData] = useState({
        cropType: '',
        landSize: '',
        soilQuality: 'medium',
    });

    const [prediction, setPrediction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [historicalData, setHistoricalData] = useState([]);
    const [insights, setInsights] = useState([]);

    const cropOptions = [
        'Wheat', 'Rice', 'Corn', 'Soybeans', 'Potatoes', 'Tomatoes', 'Cotton', 'Sugarcane'
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    // Mock prediction function to replace API call
    const mockPredictYield = (data) => {
        // Simple mock calculation based on inputs
        const baseYields = {
            wheat: 3500,
            rice: 4500,
            corn: 9000,
            soybeans: 2700,
            potatoes: 20000,
            tomatoes: 50000,
            cotton: 800,
            sugarcane: 70000
        };

        const qualityMultipliers = {
            poor: 0.7,
            medium: 1.0,
            good: 1.3
        };

        const crop = data.cropType.toLowerCase();
        const baseYield = baseYields[crop] || 3000;
        const multiplier = qualityMultipliers[data.soilQuality] || 1.0;
        const landSize = parseFloat(data.landSize) || 1;

        return {
            yieldValue: baseYield * multiplier * landSize,
            soilQualityComparison: {
                poor: baseYield * 0.7 * landSize,
                medium: baseYield * 1.0 * landSize,
                good: baseYield * 1.3 * landSize
            }
        };
    };

    // Mock historical data generator
    const generateHistoricalData = () => {
        const years = [];
        const currentYear = new Date().getFullYear();
        for (let i = 4; i >= 0; i--) {
            years.push({
                year: currentYear - i,
                yield: Math.floor(Math.random() * 5000) + 3000
            });
        }
        return years;
    };

    // Mock insights generator
    const generateInsights = (data) => {
        const insights = [
            `For ${data.cropType}, optimal planting time is spring.`,
            `Consider adding ${data.soilQuality === 'poor' ? 'more' : 'some'} fertilizer.`,
            `Irrigation every ${data.soilQuality === 'good' ? '5' : '3'} days recommended.`,
            `Monitor for common pests in ${data.cropType} crops.`
        ];
        return insights;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Validate inputs
            if (!formData.cropType || !formData.landSize || !formData.soilQuality) {
                throw new Error('Please fill all required fields');
            }

            if (isNaN(formData.landSize) || formData.landSize <= 0) {
                throw new Error('Land size must be a positive number');
            }

            // Mock API call
            const predictionResult = mockPredictYield(formData);
            const historical = generateHistoricalData();
            const generatedInsights = generateInsights(formData);

            setPrediction(predictionResult);
            setHistoricalData(historical);
            setInsights(generatedInsights);

        } catch (err) {
            setError(err.message || 'Failed to get prediction. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const getYieldUnit = (yield_value) => {
        return yield_value >= 1000 ? 'tons' : 'kg';
    };

    const formatYield = (yield_value) => {
        if (yield_value >= 1000) {
            return (yield_value / 1000).toFixed(2);
        }
        return yield_value.toFixed(2);
    };

    // Simple chart component using divs
    const SimpleBarChart = ({ data, width = '100%', height = 300 }) => {
        const maxValue = Math.max(...data.map(item => item.yield));

        return (
            <div style={{ width, height, border: '1px solid #ddd', padding: '10px' }}>
                <div style={{ display: 'flex', height: '90%', alignItems: 'flex-end' }}>
                    {data.map((item, index) => (
                        <div key={index} style={{
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            margin: '0 5px'
                        }}>
                            <div style={{
                                height: `${(item.yield / maxValue) * 100}%`,
                                width: '60%',
                                backgroundColor: '#10B981',
                                borderRadius: '4px 4px 0 0'
                            }} />
                            <div style={{ marginTop: '5px' }}>{item.quality}</div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>Yield by Soil Quality</div>
            </div>
        );
    };

    // Simple line chart component using divs
    const SimpleLineChart = ({ data, width = '100%', height = 300 }) => {
        const maxValue = Math.max(...data.map(item => item.yield));
        const minYear = Math.min(...data.map(item => item.year));
        const yearRange = Math.max(...data.map(item => item.year)) - minYear;

        return (
            <div style={{ width, height, border: '1px solid #ddd', padding: '10px', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: '30px', left: '40px', right: '20px', top: '20px' }}>
                    {data.map((item, index) => {
                        const xPos = `${((item.year - minYear) / yearRange) * 100}%`;
                        const yPos = `${100 - (item.yield / maxValue) * 100}%`;

                        return (
                            <React.Fragment key={index}>
                                <div style={{
                                    position: 'absolute',
                                    left: xPos,
                                    top: yPos,
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: '#10B981',
                                    borderRadius: '50%',
                                    transform: 'translate(-4px, -4px)'
                                }} />
                                {index > 0 && (
                                    <div style={{
                                        position: 'absolute',
                                        left: `${((data[index - 1].year - minYear) / yearRange) * 100}%`,
                                        top: `${100 - (data[index - 1].yield / maxValue) * 100}%`,
                                        width: `${((item.year - data[index - 1].year) / yearRange) * 100}%`,
                                        height: '2px',
                                        backgroundColor: '#10B981',
                                        transform: 'translateY(-1px)'
                                    }} />
                                )}
                            </React.Fragment>
                        );
                    })}
                </div>
                <div style={{ position: 'absolute', bottom: '10px', left: '0', right: '0', display: 'flex', justifyContent: 'space-between' }}>
                    {data.map(item => (
                        <div key={item.year} style={{ flex: 1, textAlign: 'center' }}>{item.year}</div>
                    ))}
                </div>
                <div style={{ position: 'absolute', top: '10px', left: '10px' }}>Yield Trends</div>
            </div>
        );
    };

    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#047857', marginBottom: '20px' }}>Crop Yield Prediction</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                {/* Input Form */}
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Input Details</h2>

                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Crop Type *</label>
                            <select
                                name="cropType"
                                value={formData.cropType}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
                                required
                            >
                                <option value="">Select Crop</option>
                                {cropOptions.map(crop => (
                                    <option key={crop} value={crop.toLowerCase()}>{crop}</option>
                                ))}
                            </select>
                        </div>

                        <div style={{ marginBottom: '16px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Land Size (hectares) *</label>
                            <input
                                type="number"
                                name="landSize"
                                value={formData.landSize}
                                onChange={handleChange}
                                placeholder="Enter land size in hectares"
                                style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }}
                                required
                                min="0.1"
                                step="0.1"
                            />
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontWeight: '500' }}>Soil Quality *</label>
                            <div style={{ display: 'flex', gap: '16px' }}>
                                <label style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        type="radio"
                                        name="soilQuality"
                                        value="poor"
                                        checked={formData.soilQuality === 'poor'}
                                        onChange={handleChange}
                                        style={{ marginRight: '8px' }}
                                    />
                                    Poor
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        type="radio"
                                        name="soilQuality"
                                        value="medium"
                                        checked={formData.soilQuality === 'medium'}
                                        onChange={handleChange}
                                        style={{ marginRight: '8px' }}
                                    />
                                    Medium
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center' }}>
                                    <input
                                        type="radio"
                                        name="soilQuality"
                                        value="good"
                                        checked={formData.soilQuality === 'good'}
                                        onChange={handleChange}
                                        style={{ marginRight: '8px' }}
                                    />
                                    Good
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            style={{
                                width: '100%',
                                backgroundColor: '#059669',
                                color: 'white',
                                padding: '10px',
                                borderRadius: '4px',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                            disabled={loading}
                        >
                            {loading ? 'Calculating...' : 'Predict Yield'}
                        </button>

                        {error && (
                            <div style={{
                                marginTop: '16px',
                                padding: '12px',
                                backgroundColor: '#fee2e2',
                                color: '#b91c1c',
                                borderRadius: '4px',
                                display: 'flex',
                                alignItems: 'center'
                            }}>
                                <span style={{ marginRight: '8px' }}>⚠️</span>
                                {error}
                            </div>
                        )}
                    </form>
                </div>

                {/* Prediction Results */}
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Predicted Yield</h2>

                    {prediction ? (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '48px', fontWeight: 'bold', color: '#059669', marginBottom: '8px' }}>
                                {formatYield(prediction.yieldValue)}
                            </div>
                            <div style={{ fontSize: '20px', color: '#4b5563', marginBottom: '24px' }}>
                                {getYieldUnit(prediction.yieldValue)}
                            </div>

                            <div style={{ marginTop: '16px', backgroundColor: '#f3f4f6', padding: '16px', borderRadius: '4px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>Crop Type:</span>
                                    <span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{formData.cropType}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span>Land Size:</span>
                                    <span style={{ fontWeight: '600' }}>{formData.landSize} hectares</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span>Soil Quality:</span>
                                    <span style={{ fontWeight: '600', textTransform: 'capitalize' }}>{formData.soilQuality}</span>
                                </div>
                            </div>

                            <div style={{ marginTop: '24px', fontSize: '14px', color: '#6b7280' }}>
                                Based on your input parameters and historical data
                            </div>
                        </div>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '256px', color: '#6b7280' }}>
                            <p>Enter details and click "Predict Yield" to see results</p>
                        </div>
                    )}
                </div>

                {/* Insights Section */}
                <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px' }}>Insights & Recommendations</h2>

                    {insights.length > 0 ? (
                        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                            {insights.map((insight, index) => (
                                <li key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '12px' }}>
                                    <span style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#d1fae5',
                                        color: '#065f46',
                                        borderRadius: '50%',
                                        height: '24px',
                                        width: '24px',
                                        marginRight: '8px',
                                        flexShrink: '0'
                                    }}>
                                        {index + 1}
                                    </span>
                                    <span>{insight}</span>
                                </li>
                            ))}
                        </ul>
                    ) : prediction ? (
                        <p style={{ color: '#6b7280' }}>Loading insights...</p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '256px', color: '#6b7280' }}>
                            <p>Insights will appear after prediction</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Data Visualization Section */}
            {prediction && (
                <div style={{ marginTop: '48px' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px' }}>Historical Data & Trends</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '20px' }}>
                        {/* Line Chart */}
                        <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Yield Trends</h3>
                            <SimpleLineChart data={historicalData} />
                        </div>

                        {/* Bar Chart */}
                        <div style={{ backgroundColor: 'white', padding: '16px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                            <h3 style={{ fontSize: '16px', fontWeight: '500', marginBottom: '16px' }}>Yield by Soil Quality</h3>
                            <SimpleBarChart data={[
                                { quality: 'Poor', yield: prediction.soilQualityComparison?.poor || 0 },
                                { quality: 'Medium', yield: prediction.soilQualityComparison?.medium || 0 },
                                { quality: 'Good', yield: prediction.soilQualityComparison?.good || 0 }
                            ]} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Soil;