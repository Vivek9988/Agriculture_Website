import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollRevealFooter = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false
    });

    const sections = [
        {
            title: "🌱 Sustainable Farming Experts",
            content: [
                "Certified organic practices since 2012",
                "Regenerative agriculture that improves soil health year after year",
                "Zero synthetic pesticides - we use natural pest control methods",
                "Carbon-negative operations through strategic crop rotation"
            ],
            icon: "🌿",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "💧 Precision Irrigation Technology",
            content: [
                "AI-powered moisture sensors reduce water usage by 40%",
                "Automated drip irrigation tailored to each crop's needs",
                "Real-time monitoring via our farmer mobile app",
                "Proven 25% higher yields with optimal hydration"
            ],
            icon: "⏲️",
            image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        },
        {
            title: "📈 Proven Yield Optimization",
            content: [
                "15+ years of agronomic data guiding our practices",
                "Custom crop plans for your specific soil conditions",
                "Disease-resistant seed varieties developed in our labs",
                "30-day harvest guarantee on all our produce"
            ],
            icon: "📊",
            image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
        }
    ];

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <div ref={ref} className="bg-gradient-to-b from-green-50 to-white py-20 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="hidden"
                animate={controls}
                variants={containerVariants}
                className="max-w-7xl mx-auto"
            >
                {/* Hero Section */}
                <div className="relative rounded-2xl overflow-hidden mb-20 h-96">
                    <img
                        src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                        alt="Farm landscape"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="text-center px-4">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Green Valley Farms?</h1>
                            <p className="text-xl text-white/90 max-w-2xl mx-auto">
                                Where tradition meets innovation for healthier food and a healthier planet
                            </p>
                        </div>
                    </div>
                </div>

                {/* Value Propositions */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-serif font-bold text-green-900 mb-4">
                        Our Farming Difference
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We combine generations of farming wisdom with cutting-edge technology to deliver exceptional quality you can trust.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {sections.map((section, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-green-100 overflow-hidden"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={section.image}
                                    alt={section.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-8">
                                <div className="text-4xl mb-4">{section.icon}</div>
                                <h3 className="text-xl font-bold text-green-800 mb-4">{section.title}</h3>
                                <ul className="space-y-3 text-gray-600">
                                    {section.content.map((item, i) => (
                                        <li key={i} className="flex items-start">
                                            <span className="text-green-500 mr-2">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Farm Story Section */}
                <motion.div
                    variants={itemVariants}
                    className="mb-20 bg-green-800 rounded-2xl overflow-hidden"
                >
                    <div className="grid md:grid-cols-2">
                        <div className="p-12 text-white">
                            <h3 className="text-2xl font-serif font-bold mb-6">Our Farming Philosophy</h3>
                            <p className="mb-6 text-lg">
                                At Green Valley, we believe farming should enrich both people and planet. Our holistic approach combines:
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-start">
                                    <span className="bg-green-600 rounded-full p-1 mr-3">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span>Ancient wisdom passed down through generations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-600 rounded-full p-1 mr-3">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span>Cutting-edge agricultural technology</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-600 rounded-full p-1 mr-3">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span>Rigorous scientific research</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-green-600 rounded-full p-1 mr-3">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    </span>
                                    <span>Deep respect for nature's balance</span>
                                </li>
                            </ul>
                            <button className="px-6 py-3 bg-white text-green-800 rounded-lg font-medium hover:bg-green-100 transition-colors">
                                Learn Our Story
                            </button>
                        </div>
                        <div className="hidden md:block">
                            <img
                                src="https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                                alt="Farmers working"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Testimonials */}
                <motion.div variants={itemVariants} className="mb-20">
                    <h3 className="text-2xl font-serif font-bold text-center text-green-900 mb-12">What Our Community Says</h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                quote: "The flavor of Green Valley's tomatoes reminds me of my childhood. Nothing compares!",
                                author: "Maria Gonzalez, Local Chef",
                                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                            },
                            {
                                quote: "As a nutritionist, I recommend Green Valley produce for its exceptional nutrient density.",
                                author: "Dr. James Wilson, Nutrition Expert",
                                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                            },
                            {
                                quote: "Their sustainable practices are setting the standard for farms nationwide.",
                                author: "Sarah Chen, Environmental Journalist",
                                image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                            }
                        ].map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-green-100">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.author}
                                        className="w-12 h-12 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-green-800">{testimonial.author.split(',')[0]}</h4>
                                        <p className="text-sm text-gray-500">{testimonial.author.split(',')[1]}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Final CTA */}
                <motion.div
                    variants={itemVariants}
                    className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-green-100"
                >
                    <div className="p-12 text-center">
                        <h3 className="text-2xl font-serif font-bold text-green-900 mb-6">
                            Ready to Experience the Difference?
                        </h3>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                            Join our community of conscious consumers and taste the Green Valley difference in every bite.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <button className="px-8 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors">
                                Shop Our Produce
                            </button>
                            <button className="px-8 py-3 bg-white text-green-700 border border-green-300 rounded-lg font-medium hover:bg-green-50 transition-colors">
                                Visit Our Farm
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ScrollRevealFooter;