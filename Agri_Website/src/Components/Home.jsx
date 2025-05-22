import React, { useState, useEffect } from "react";
import BoxComponent from "./BoxComponent";
import ScrollRevealFooter from "./ScrollRevealFooter";
function Home() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
      text: "Farming is the best solution to world starvation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
      text: "Sustainable agriculture ensures a better future",
    },
    {
      image:
        "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80",
      text: "Healthy soil grows nutritious food",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    //return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Hero Slider Section with beautiful overlay */}
      <div className="relative h-screen w-full overflow-hidden">
        <img
          className="w-full h-2/3object-cover object-center transition-opacity duration-1000 ease-in-out"
          src={slides[currentIndex].image}
          alt="Agricultural landscape"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 via-green-800/30 to-transparent"></div>

        {/* Text overlay */}
        <div
          key={currentIndex}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                     opacity-0 animate-fadeIn text-center px-4 w-full max-w-4xl"
        >
          <h1 className="text-4xl ml-5 sm:text-5xl md:text-6xl font-bold text-white mb-8 font-serif leading-tight">
            {slides[currentIndex].text}
          </h1>
          <button className="mt-8 px-10 py-4 bg-amber-500 hover:bg-amber-600 text-white font-medium rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            Explore Our Farm →
          </button>
        </div>

        {/* Custom navigation */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-amber-400 scale-125' : 'bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-16">
            <div className="inline-flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-amber-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <p className="text-green-700 font-serif text-lg uppercase tracking-wider">
                Our Services
              </p>
              <svg className="w-6 h-6 text-amber-500 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-green-900 mb-8">
              Providing Fresh Produce Every Day
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-amber-300 to-green-500 mx-auto rounded-full"></div>
          </div>

          {/* Enhanced BoxComponent container */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-amber-300 rounded-2xl opacity-20 blur-sm"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl border border-green-100">
              <BoxComponent />
            </div>
          </div>
        </div>
      </div>
      <ScrollRevealFooter/>
      <div className="bg-green-900 text-green-100 py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-serif font-bold text-amber-300 mb-4">Our Policies</h3>
            <p className="mb-4">
              We are committed to sustainable farming practices that respect both people and the planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-300 hover:text-white transition">
                Privacy
              </a>
              {/* Other policy links */}
              <a href="#" className="text-amber-300 hover:text-white transition">
                Terms
              </a>
              <a href="#" className="text-amber-300 hover:text-white transition">
                Sustainability
              </a>
            </div>
          </div>
          {/* ... other columns ... */}
        </div>
      </div>

      
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translate(-50%, -40%); }
            100% { opacity: 1; transform: translate(-50%, -50%); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.5s ease-out forwards;
          }
        `}
      </style>
      
    </div>
    
  );
}

export default Home;



