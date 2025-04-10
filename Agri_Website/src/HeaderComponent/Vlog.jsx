import React from 'react';

const Vlog = () => {
    return (
        <div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-green-900 text-center mb-12">Our Blog</h2>
                <div className="grid gap-8 md:grid-cols-2">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-green-800 mb-2">5 Tips for a Healthier Lifestyle</h3>
                            <p className="text-green-700 mb-4 text-sm">March 15, 2025 • Wellness</p>
                            <p className="text-green-900 mb-4">Discover simple yet powerful ways to improve your daily routine and boost your health naturally.</p>
                            <button className="text-green-700 hover:underline font-semibold">Read More →</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-green-800 mb-2">How to Stay Motivated While Working Remotely</h3>
                            <p className="text-green-700 mb-4 text-sm">April 5, 2025 • Productivity</p>
                            <p className="text-green-900 mb-4">Remote work has its perks and challenges. Learn how to stay productive and motivated from home.</p>
                            <button className="text-green-700 hover:underline font-semibold">Read More →</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-green-800 mb-2">The Importance of Mindful Eating</h3>
                            <p className="text-green-700 mb-4 text-sm">February 22, 2025 • Nutrition</p>
                            <p className="text-green-900 mb-4">Mindful eating isn't just a trend—it can transform your relationship with food. Here's how to get started.</p>
                            <button className="text-green-700 hover:underline font-semibold">Read More →</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold text-green-800 mb-2">Beginner’s Guide to Meditation</h3>
                            <p className="text-green-700 mb-4 text-sm">January 12, 2025 • Mental Health</p>
                            <p className="text-green-900 mb-4">Meditation can bring calm and clarity into your life. Start your journey with this beginner’s guide.</p>
                            <button className="text-green-700 hover:underline font-semibold">Read More →</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vlog;
