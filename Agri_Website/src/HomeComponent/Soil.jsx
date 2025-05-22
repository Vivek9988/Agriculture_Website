import React, { useState, useEffect } from 'react';
import { FiDroplet, FiSun, FiThermometer, FiInfo, FiCalendar, FiClock, FiAward } from 'react-icons/fi';

const Soil = () => {
  // Expanded crop database with more details
  const cropData = {
    wheat: {
      name: 'Wheat',
      image: 'https://static1.squarespace.com/static/63c44dd4d40ca263a45cc4e3/63c44e9883a42257856480a1/63c9c92e3c330b4b6ba3c85d/1676334856489/unsplash-image-y4xZxzN754M.jpg?format=1500w',
      irrigation: {
        frequency: 'Every 7-10 days during growing season',
        method: 'Flood or sprinkler irrigation',
        criticalStages: 'Crown root initiation (20-25 DAS), Flowering (50-60 DAS), Grain filling (70-90 DAS)',
        waterRequirement: '450-650 mm per season',
        schedule: [
          'Initial stage (0-20 days): Light irrigation',
          'Vegetative stage (20-50 days): Moderate irrigation',
          'Reproductive stage (50-90 days): Heavy irrigation',
          'Ripening stage (90-110 days): Reduce irrigation'
        ]
      },
      soil: {
        type: 'Loamy or clay loam',
        pH: '6.0-7.5 (optimal 6.5)',
        depth: 'Minimum 60 cm (24 inches)',
        drainage: 'Well-drained (1-2 inches per hour infiltration rate)',
        nutrients: {
          nitrogen: '120-150 kg/ha',
          phosphorus: '60-80 kg/ha',
          potassium: '40-60 kg/ha',
          organicMatter: 'Minimum 2%'
        },
        preparation: 'Deep plowing followed by 2-3 harrowings for fine tilth'
      },
      climate: {
        temperature: '15-22°C (optimal growing range)',
        rainfall: '500-800 mm annually',
        season: 'Rabi (winter) season crop'
      },
      tips: [
        'Avoid waterlogging during early stages (can reduce yield by 20-30%)',
        'Reduce irrigation 2-3 weeks before harvest to promote grain hardening',
        'Monitor soil moisture at 15-30 cm depth using tensiometers',
        'Apply 50% of nitrogen at sowing and remaining in two splits',
        'Use green manuring crops like Sesbania before wheat cultivation'
      ],
      varieties: [
        'HD 2967 (High yielding, disease resistant)',
        'PBW 550 (Drought tolerant)',
        'DBW 17 (Suitable for late sowing)'
      ]
    },
    rice: {
      name: 'Rice',
      image: 'https://images.pexels.com/photos/247599/pexels-photo-247599.jpeg',
      irrigation: {
        frequency: 'Continuous flooding (2-5 cm water depth)',
        method: 'Ponding/flood irrigation (Alternate wetting-drying in water scarce areas)',
        criticalStages: 'Tillering (25-40 DAS), Panicle initiation (50-60 DAS), Flowering (70-80 DAS)',
        waterRequirement: '1200-1500 mm per season (3,000-5,000 liters/kg rice produced)',
        schedule: [
          'Nursery stage: Maintain 2-3 cm water depth',
          'Main field (0-15 DAT): Saturated soil condition',
          'Vegetative stage (15-45 DAT): 2-5 cm standing water',
          'Reproductive stage (45-90 DAT): 5-7 cm standing water',
          'Maturity stage (90-120 DAT): Gradual water withdrawal'
        ]
      },
      soil: {
        type: 'Clay or clay loam (minimum 30% clay content)',
        pH: '5.0-6.5 (tolerates acidic soils better than other cereals)',
        depth: 'Minimum 20 cm standing water capacity',
        drainage: 'Poorly drained (water retention capacity >8 hours)',
        nutrients: {
          nitrogen: '100-150 kg/ha (split into 3-4 applications)',
          phosphorus: '50-60 kg/ha (applied as basal dose)',
          potassium: '60-80 kg/ha',
          zinc: '25 kg ZnSO4/ha in zinc-deficient soils'
        },
        preparation: 'Puddling (3-4 operations at 5-7 day intervals) to create impermeable layer'
      },
      climate: {
        temperature: '20-35°C (optimal 25-30°C during growing season)',
        rainfall: '1500-3000 mm annually (or equivalent irrigation)',
        season: 'Kharif (monsoon) season crop in most regions'
      },
      tips: [
        'Maintain consistent water level (±2 cm fluctuation) during critical stages',
        'Drain fields briefly at mid-season for root aeration (reduces methane emissions)',
        'Use intermittent irrigation (2-3 day drying periods) in water-scarce areas',
        'Apply silicon (100-150 kg/ha) to strengthen stems and reduce lodging',
        'Practice System of Rice Intensification (SRI) for water conservation'
      ],
      varieties: [
        'Pusa Basmati 1121 (Aromatic, long grain)',
        'Swarna (High yielding, flood tolerant)',
        'DRR 44 (Drought resistant)'
      ]
    },
    // Additional crops can be added in the same format
  };

  const [selectedCrop, setSelectedCrop] = useState('');
  const [showDetails, setShowDetails] = useState(false);
  const [activeTab, setActiveTab] = useState('irrigation');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCropChange = (e) => {
    setSelectedCrop(e.target.value);
    setShowDetails(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCrop) {
      setShowDetails(true);
      window.scrollTo({ top: 600, behavior: 'smooth' });
    }
  };

  const filteredCrops = Object.keys(cropData).filter(crop => 
    cropData[crop].name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-green-800 mb-2">Advanced Crop Management System</h1>
        <p className="text-xl text-center text-gray-600 mb-8">Comprehensive irrigation and soil requirements for optimal crop production</p>
        
        {/* Search and Selection Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-green-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="search" className="block text-lg font-medium text-gray-700 mb-2">
                Search Crops
              </label>
              <input
                type="text"
                id="search"
                placeholder="Type crop name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
              />
              {searchTerm && (
                <div className="mt-2 space-y-1 max-h-60 overflow-y-auto">
                  {filteredCrops.map(crop => (
                    <button
                      key={crop}
                      onClick={() => {
                        setSelectedCrop(crop);
                        setSearchTerm('');
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-green-50 rounded-md text-lg"
                    >
                      {cropData[crop].name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="crop" className="block text-lg font-medium text-gray-700 mb-2">
                  Or Select from List
                </label>
                <select
                  id="crop"
                  value={selectedCrop}
                  onChange={handleCropChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                  required
                >
                  <option value="">-- Select a crop --</option>
                  {Object.keys(cropData).map((crop) => (
                    <option key={crop} value={crop}>
                      {cropData[crop].name}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  className="w-full mt-4 bg-green-600 text-white py-3 px-4 rounded-lg hover:bg-green-700 transition-colors text-lg font-medium shadow-md"
                >
                  Get Detailed Recommendations
                </button>
              </form>
            </div>
          </div>
        </div>

        {showDetails && selectedCrop && cropData[selectedCrop] && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300 transform hover:shadow-xl">
            {/* Header with Image */}
            <div className="relative">
              <img 
                src={cropData[selectedCrop].image} 
                alt={cropData[selectedCrop].name} 
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent"></div>
              <h2 className="absolute bottom-6 left-6 text-3xl font-bold text-white">
                {cropData[selectedCrop].name} Detailed Guide
              </h2>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-gray-200">
              <nav className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab('irrigation')}
                  className={`px-6 py-4 text-lg font-medium flex items-center ${activeTab === 'irrigation' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <FiDroplet className="mr-2" />
                  Irrigation
                </button>
                <button
                  onClick={() => setActiveTab('soil')}
                  className={`px-6 py-4 text-lg font-medium flex items-center ${activeTab === 'soil' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <FiSun className="mr-2" />
                  Soil Requirements
                </button>
                <button
                  onClick={() => setActiveTab('climate')}
                  className={`px-6 py-4 text-lg font-medium flex items-center ${activeTab === 'climate' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <FiThermometer className="mr-2" />
                  Climate
                </button>
                <button
                  onClick={() => setActiveTab('tips')}
                  className={`px-6 py-4 text-lg font-medium flex items-center ${activeTab === 'tips' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <FiAward className="mr-2" />
                  Expert Tips
                </button>
              </nav>
            </div>

            {/* Tab Content */}
            <div className="p-8">
              {/* Irrigation Tab */}
              {activeTab === 'irrigation' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Irrigation Management</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-green-700 mb-3 flex items-center">
                        <FiDroplet className="mr-2" />
                        Basic Requirements
                      </h4>
                      <ul className="space-y-3 text-lg">
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span><strong>Frequency:</strong> {cropData[selectedCrop].irrigation.frequency}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span><strong>Method:</strong> {cropData[selectedCrop].irrigation.method}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-600 mr-2">•</span>
                          <span><strong>Water Requirement:</strong> {cropData[selectedCrop].irrigation.waterRequirement}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-blue-700 mb-3 flex items-center">
                        <FiCalendar className="mr-2" />
                        Growth Stage Schedule
                      </h4>
                      <ul className="space-y-3 text-lg">
                        {cropData[selectedCrop].irrigation.schedule.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-600 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6 mt-4">
                    <h4 className="text-xl font-semibold text-amber-700 mb-3 flex items-center">
                      <FiInfo className="mr-2" />
                      Critical Irrigation Stages
                    </h4>
                    <p className="text-lg">{cropData[selectedCrop].irrigation.criticalStages}</p>
                    <p className="mt-3 text-gray-700">
                      DAS = Days After Sowing, DAT = Days After Transplanting
                    </p>
                  </div>
                </div>
              )}

              {/* Soil Tab */}
              {activeTab === 'soil' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Soil Requirements</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-amber-50 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-amber-700 mb-3">Physical Properties</h4>
                      <ul className="space-y-3 text-lg">
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          <span><strong>Type:</strong> {cropData[selectedCrop].soil.type}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          <span><strong>pH Range:</strong> {cropData[selectedCrop].soil.pH}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          <span><strong>Depth:</strong> {cropData[selectedCrop].soil.depth}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-amber-600 mr-2">•</span>
                          <span><strong>Drainage:</strong> {cropData[selectedCrop].soil.drainage}</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-purple-700 mb-3">Nutrient Requirements</h4>
                      <ul className="space-y-3 text-lg">
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span><strong>Nitrogen (N):</strong> {cropData[selectedCrop].soil.nutrients.nitrogen}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span><strong>Phosphorus (P):</strong> {cropData[selectedCrop].soil.nutrients.phosphorus}</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span><strong>Potassium (K):</strong> {cropData[selectedCrop].soil.nutrients.potassium}</span>
                        </li>
                        {cropData[selectedCrop].soil.nutrients.zinc && (
                          <li className="flex items-start">
                            <span className="text-purple-600 mr-2">•</span>
                            <span><strong>Zinc:</strong> {cropData[selectedCrop].soil.nutrients.zinc}</span>
                          </li>
                        )}
                        <li className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          <span><strong>Organic Matter:</strong> {cropData[selectedCrop].soil.nutrients.organicMatter}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 mt-4">
                    <h4 className="text-xl font-semibold text-green-700 mb-3">Soil Preparation</h4>
                    <p className="text-lg">{cropData[selectedCrop].soil.preparation}</p>
                  </div>
                </div>
              )}

              {/* Climate Tab */}
              {activeTab === 'climate' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Climate Requirements</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-blue-700 mb-3">Temperature</h4>
                      <p className="text-4xl font-bold text-blue-800 mb-2">
                        {cropData[selectedCrop].climate.temperature}
                      </p>
                      <p className="text-lg">Optimal growing temperature range</p>
                    </div>

                    <div className="bg-teal-50 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-teal-700 mb-3">Rainfall</h4>
                      <p className="text-4xl font-bold text-teal-800 mb-2">
                        {cropData[selectedCrop].climate.rainfall}
                      </p>
                      <p className="text-lg">Annual requirement (or equivalent irrigation)</p>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-lg p-6 mt-4">
                    <h4 className="text-xl font-semibold text-amber-700 mb-3">Growing Season</h4>
                    <p className="text-2xl font-medium text-amber-800">
                      {cropData[selectedCrop].climate.season}
                    </p>
                    <p className="mt-3 text-lg text-gray-700">
                      Best planting time varies by region - consult local agricultural extension for exact dates
                    </p>
                  </div>
                </div>
              )}

              {/* Tips Tab */}
              {activeTab === 'tips' && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Expert Recommendations</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xl font-semibold text-green-700 mb-3">Best Practices</h4>
                      <ul className="space-y-4">
                        {cropData[selectedCrop].tips.map((tip, index) => (
                          <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                            <span className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                              {index + 1}
                            </span>
                            <span className="text-lg">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-purple-700 mb-3">Recommended Varieties</h4>
                      <ul className="space-y-3">
                        {cropData[selectedCrop].varieties.map((variety, index) => (
                          <li key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                            <span className="bg-purple-100 text-purple-800 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                              <FiAward className="inline" />
                            </span>
                            <span className="text-lg">{variety}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Additional Resources Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-green-800 mb-6">Additional Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FiClock className="text-blue-600 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-blue-800 mb-2">Irrigation Calculator</h4>
              <p className="text-gray-700">Calculate exact water requirements based on your field size and soil type</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FiSun className="text-green-600 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-green-800 mb-2">Soil Testing</h4>
              <p className="text-gray-700">Find certified soil testing laboratories near your location</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-6 text-center">
              <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FiInfo className="text-amber-600 text-2xl" />
              </div>
              <h4 className="text-xl font-semibold text-amber-800 mb-2">Expert Consultation</h4>
              <p className="text-gray-700">Connect with agricultural experts for personalized advice</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Soil;