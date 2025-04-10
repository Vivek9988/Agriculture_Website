import React from 'react';

const testimonials = [
    {
        name: "Ravi Kumar",
        title: "Organic Farmer, Punjab",
        quote:
            "Thanks to AgroSmart, I now manage my crops more efficiently and connect with local buyers easily. Their service is life-changing!",
    },
    {
        name: "Sunita Sharma",
        title: "Agri-Entrepreneur, Maharashtra",
        quote:
            "I love the transparency and support AgroSmart provides. It's a platform every farmer should have access to.",
    },
    {
        name: "Manoj Patel",
        title: "Farmer, Gujarat",
        quote:
            "Their app helped me forecast better and manage pests effectively. Highly recommend to fellow farmers!",
    },
];

const Testimonials = () => {
    return (
        <div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-green-900 mb-4">What Our Farmers Say</h2>
                <p className="text-lg text-green-700 mb-12">Real stories from real users of AgroSmart across India.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-xl rounded-2xl p-6 transition-transform duration-300 hover:scale-105"
                        >
                            <p className="text-green-900 font-semibold text-xl mb-1">{testimonial.name}</p>
                            <p className="text-green-600 text-sm mb-4">{testimonial.title}</p>
                            <p className="text-gray-700 italic">“{testimonial.quote}”</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
