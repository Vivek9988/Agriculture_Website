import React from 'react';
import { Link } from 'react-router-dom';

const FarmEducation = () => {
    const educationalTopics = [
        {
            id: 1,
            title: "Soil Health & Preparation",
            image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFybSUyMHNvaWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            description: "Learn how to test, improve, and maintain fertile soil for optimal crop growth.",
            link: "/soil-health"
        },
        {
            id: 2,
            title: "Crop Rotation Techniques",
            image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y3JvcCUyMHJvdGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
            description: "Maximize yield and reduce pests with strategic crop rotation plans.",
            link: "/crop-rotation"
        },
        {
            id: 3,
            title: "Organic Pest Control",
            image: "https://images.unsplash.com/photo-1581862078619-6d6c6276a5cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9yZ2FuaWMlMjBwZXN0JTIwY29udHJvbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Natural methods to protect crops without harmful chemicals.",
            link: "/pest-control"
        },
        {
            id: 4,
            title: "Irrigation Systems",
            image: "https://images.unsplash.com/photo-1601132359864-7a8098e6f4c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aXJyaWdhdGlvbiUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Efficient water management for different farm sizes.",
            link: "/irrigation"
        },
        {
            id: 5,
            title: "Seasonal Planting Guide",
            image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNlYXNvbmFsJTIwcGxhbnRpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
            description: "What to plant and when for year-round productivity.",
            link: "/planting-guide"
        },
        {
            id: 6,
            title: "Livestock Care Basics",
            image: "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxpdmVzdG9ja3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
            description: "Essential practices for healthy cattle, poultry, and more.",
            link: "/livestock"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Hero Section */}
            <div className="relative h-96 overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Farm Landscape"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <div className="text-center text-white px-4">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Farm Education Hub</h1>
                        <p className="text-xl max-w-2xl mx-auto">
                            Empowering farmers with sustainable practices and modern techniques.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                {/* Featured Topics */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold text-center mb-12 text-green-800">
                        <span className="border-b-4 border-green-500 pb-2">Learn With Us</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {educationalTopics.map((topic) => (
                            <Link
                                to={topic.link}
                                key={topic.id}
                                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={topic.image}
                                        alt={topic.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-green-600">
                                        {topic.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{topic.description}</p>
                                    <button className="text-green-600 font-medium flex items-center group-hover:underline">
                                        Learn More
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* Testimonials */}
                <section className="bg-green-100 rounded-2xl p-8 md:p-12 mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Farmer Success Stories</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "The soil health guide increased my yields by 40%!",
                                name: "Rajesh Kumar",
                                location: "Punjab"
                            },
                            {
                                quote: "Organic pest control saved my tomato crop this year.",
                                name: "Priya Patel",
                                location: "Maharashtra"
                            },
                            {
                                quote: "Learned drip irrigation that cut my water usage in half.",
                                name: "Arun Mehta",
                                location: "Karnataka"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="text-yellow-400 text-2xl mb-2">★★★★★</div>
                                <p className="italic mb-4">"{testimonial.quote}"</p>
                                <div className="font-semibold">{testimonial.name}</div>
                                <div className="text-green-600">{testimonial.location}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call-to-Action */}
                <section className="text-center py-12">
                    <h2 className="text-3xl font-bold mb-6 text-green-800">Ready to Transform Your Farm?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join our community of 50,000+ farmers accessing premium resources.
                    </p>
                    <div className="space-x-4">
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium text-lg transition-colors">
                            Subscribe Now
                        </button>
                        <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg font-medium text-lg transition-colors">
                            Free Resources
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default FarmEducation;