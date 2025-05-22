import React, { useState } from 'react';

const SeedCalculator = () => {
    // Crop data with seed rate (kg/ha), water requirement (mm/season), and suggestions
    const cropData = {
        wheat: {
            seedRate: 100,
            waterRequirement: 450,
            suggestions: [
                "Sow in well-drained loamy soil",
                "Maintain soil pH between 6.0-7.5",
                "Apply nitrogen fertilizer in split doses"
            ]
        },
        rice: {
            seedRate: 40,
            waterRequirement: 900,
            suggestions: [
                "Requires standing water in fields",
                "Transplant seedlings after 25-30 days",
                "Maintain 2-5 cm water depth during growth"
            ]
        },
        corn: {
            seedRate: 20,
            waterRequirement: 600,
            suggestions: [
                "Plant in blocks for better pollination",
                "Requires deep, fertile soil",
                "Provide support for tall varieties"
            ]
        },
        soybean: {
            seedRate: 70,
            waterRequirement: 500,
            suggestions: [
                "Inoculate seeds with rhizobium bacteria",
                "Avoid waterlogging",
                "Harvest when 95% pods turn brown"
            ]
        },
        cotton: {
            seedRate: 15,
            waterRequirement: 700,
            suggestions: [
                "Requires long frost-free period",
                "Needs well-drained soil",
                "Control boll weevil and other pests"
            ]
        }
    };

    const [landArea, setLandArea] = useState('');
    const [selectedCrop, setSelectedCrop] = useState('wheat');
    const [results, setResults] = useState(null);

    const calculateRequirements = () => {
        if (!landArea || isNaN(landArea) || landArea <= 0) {
            alert('Please enter a valid land area');
            return;
        }

        const crop = cropData[selectedCrop];
        const seedRequired = (crop.seedRate * landArea / 10000).toFixed(2); // Convert from kg/ha to kg for entered area
        const waterRequired = (crop.waterRequirement * landArea / 10000).toFixed(2); // Convert from mm to cubic meters

        setResults({
            seedRequired,
            waterRequired,
            suggestions: crop.suggestions
        });
    };

    return (
        <div className="seed-calculator" style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <h2 style={{ color: '#2c3e50', textAlign: 'center' }}>Agricultural Seed Calculator</h2>

            <div style={{
                backgroundColor: '#f9f9f9',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                        Land Area (square meters):
                    </label>
                    <input
                        type="number"
                        value={landArea}
                        onChange={(e) => setLandArea(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ddd',
                            borderRadius: '4px'
                        }}
                        placeholder="Enter land area"
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                        Select Crop:
                    </label>
                    <select
                        value={selectedCrop}
                        onChange={(e) => setSelectedCrop(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            border: '1px solid #ddd',
                            borderRadius: '4px',
                            backgroundColor: 'white'
                        }}
                    >
                        <option value="wheat">Wheat</option>
                        <option value="rice">Rice</option>
                        <option value="corn">Corn</option>
                        <option value="soybean">Soybean</option>
                        <option value="cotton">Cotton</option>
                    </select>
                </div>

                <button
                    onClick={calculateRequirements}
                    style={{
                        backgroundColor: '#27ae60',
                        color: 'white',
                        border: 'none',
                        padding: '10px 15px',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        width: '100%',
                        fontSize: '16px'
                    }}
                >
                    Calculate Requirements
                </button>
            </div>

            {results && (
                <div style={{
                    marginTop: '20px',
                    backgroundColor: '#e8f4f8',
                    padding: '20px',
                    borderRadius: '8px'
                }}>
                    <h3 style={{ color: '#2980b9', marginTop: '0' }}>Results for {selectedCrop.charAt(0).toUpperCase() + selectedCrop.slice(1)}</h3>
                    <p><strong>Seed Required:</strong> {results.seedRequired} kg</p>
                    <p><strong>Water Required:</strong> {results.waterRequired} cubic meters per season</p>

                    <div style={{ marginTop: '15px' }}>
                        <h4 style={{ color: '#16a085', marginBottom: '10px' }}>Cultivation Suggestions:</h4>
                        <ul style={{ paddingLeft: '20px' }}>
                            {results.suggestions.map((suggestion, index) => (
                                <li key={index} style={{ marginBottom: '5px' }}>{suggestion}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            <div style={{ marginTop: '20px', fontSize: '14px', color: '#7f8c8d' }}>
                <p>Note: These calculations are estimates. Actual requirements may vary based on soil conditions, climate, and specific crop varieties.</p>
            </div>
        </div>
    );
};

export default SeedCalculator;