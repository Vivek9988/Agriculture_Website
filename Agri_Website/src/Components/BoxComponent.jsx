import React from 'react';
import { NavLink } from "react-router-dom";

const BoxComponent = () => {
    const services = [
        {
            id: 1,
            title: "Ask Your AI",
            image: "https://img.freepik.com/free-vector/chatbot-conversation-vectorart_78370-4107.jpg",
            link: "/ChatBox",
            alt: "AI Assistant"
        },
        {
            id: 2,
            title: "Seed Calculator",
            image: "https://media.istockphoto.com/id/531633071/vector/calculator.jpg?s=612x612&w=0&k=20&c=TrSndAw_fs5LVFqagmF16aqpKb7ZYzyMZ7bVL3QVyP8=",
            link: "/SeedCalculator",
            alt: "Organic Farming"
        },
        {
            id: 3,
            title: "Soil",
            image: "https://unicropbiochem.com/wp-content/uploads/2024/02/Blog-Soil-Analysis-1024x482.webp",
            link: "/Soil",
            alt: "Sustainable Practices"
        },
        {
            id: 4,
            title: "Irrigation Management",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYA-47MxjTVWpeOVVfYHku2tzC-7XcDEXLg&s",
            link: "/IrrigationManagement",
            alt: "Seasonal Produce"
        },
        {
            id: 5,
            title: "Weather Updates",
            image: "https://m.media-amazon.com/images/I/71GhE6nwTKL.png",
            link: "/WeatherComponent",
            alt: "Soil Management"
        },
        {
            id: 6,
            title: "Farm Education",
            image: "https://dsiweb.cse.msu.edu/wp-content/uploads/2014/10/agriculture-education.jpg",
            link: "/FarmEducation",
            alt: "Farm Education"
        },
        {
            id: 7,
            title: "Community Gardens",
            image: "https://img.freepik.com/premium-vector/community-care-icons-team-help-illustration_911078-7846.jpg?semt=ais_hybrid&w=740",
            link: "/CommunityGarden",
            alt: "Community Gardens"
        },
        {
            id: 8,
            title: "Yield Prediction",
            image: "https://geopard.tech/wp-content/uploads/2022/06/63-min.jpg",
            link: "/YieldPrediction",
            alt: "Farming Tools"
        }
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto px-4 py-10">
            {services.map((service) => (
                <NavLink
                    key={service.id}
                    to={service.link}
                    className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-green-100"
                >
                    {/* Image container with gradient overlay */}
                    <div className="relative h-48 overflow-hidden">
                        <img
                            src={service.image}
                            alt={service.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-800/30 to-transparent"></div>
                    </div>

                    {/* Content container */}
                    <div className="p-5 bg-white">
                        <h3 className="text-lg font-semibold text-green-800 mb-2 group-hover:text-green-600 transition-colors">
                            {service.title}
                        </h3>
                        <div className="flex justify-between items-center">
                            <span className="text-sm text-green-600">Explore →</span>
                            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                <svg
                                    className="w-4 h-4 text-green-600"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Floating corner accent */}
                    <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 transform rotate-45 origin-bottom-left translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                    </div>
                </NavLink>
            ))}
        </div>
    );
};

export default BoxComponent;