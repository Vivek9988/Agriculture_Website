import React from 'react';

const Contact = () => {
    return (
        <div className="bg-green-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl">
                <h2 className="text-3xl font-bold text-green-900 text-center mb-6">Contact Us</h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-green-800">First Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-3 border border-green-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                placeholder="John"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-green-800">Last Name</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-3 border border-green-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                                placeholder="Doe"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-green-800">Email</label>
                        <input
                            type="email"
                            className="mt-1 block w-full p-3 border border-green-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                            placeholder="you@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-green-800">Message</label>
                        <textarea
                            rows="4"
                            className="mt-1 block w-full p-3 border border-green-300 rounded-lg shadow-sm focus:ring-green-500 focus:border-green-500"
                            placeholder="Your message..."
                        ></textarea>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-block bg-green-700 text-white font-semibold py-3 px-6 rounded-full hover:bg-green-800 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
