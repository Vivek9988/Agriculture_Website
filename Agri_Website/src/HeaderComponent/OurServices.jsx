import React from 'react';

const OurServices = () => {
    return (
        <div className="bg-green-50 py-16 px-6 md:px-20 lg:px-32 min-h-screen">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-green-800 mb-4">Our Services</h2>
                <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                    We offer a smart agriculture solution by combining AI and real-time data to help you grow better, faster, and smarter.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">🌱 Crop Cultivation Method</h3>
                    <p className="text-gray-600">
                        Get modern and scientific methods of crop cultivation suitable for your region and season.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">📊 Real-Time Data & Updates</h3>
                    <p className="text-gray-600">
                        Access live weather updates, soil conditions, and other critical farming data.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">🤖 Ask Questions with AI</h3>
                    <p className="text-gray-600">
                        Our AI assistant is ready to answer your farming queries 24/7 with expert-level knowledge.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">🕒 Smart Crop Timing</h3>
                    <p className="text-gray-600">
                        Know the best time to sow and harvest based on data analytics and seasonal forecasting.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">🌍 Know Your Land & Crop</h3>
                    <p className="text-gray-600">
                        Understand your soil health, crop compatibility, and regional insights to make better farming decisions.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                    <h3 className="text-xl font-semibold text-green-700 mb-2">🚜 Smart Equipment Advice</h3>
                    <p className="text-gray-600">
                        Get personalized recommendations on farming tools and machinery suited to your field and budget.
                    </p>
                </div>
            </div>

            <div className="text-center mt-16">
                <p className="text-green-800 font-medium text-lg">
                    🌾 Take our service and transform your traditional farming into smart agriculture.
                </p>
            </div>
        </div>
    );
};

export default OurServices;
