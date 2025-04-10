import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  // Array of images with corresponding text
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1457530378978-8bac673b8062?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      text: "Farming is the best solution to world starvation",
    },
    {
      image:
        "https://images.unsplash.com/photo-1509099381441-ea3c0cf98b94?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      text: "Sustainable agriculture ensures a better future",
    },
    {
      image:
        "https://images.unsplash.com/photo-1532509774891-141d37f25ae9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGZhcm1pbmd8ZW58MHx8MHx8fDA%3D",
      text: "Healthy soil grows nutritious food",
    },
  ];

  // State to track the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval); // Cleanup function
  }, []);

  return (
    <> <div></div>
      <div className="h-2/3 w-full relative overflow-hidden">
        {/* Background Image */}
        <img
          className="w-full h-130 object-cover transition-opacity duration-1000 ease-in-out"
          src={slides[currentIndex].image}
          alt="Background"
        />

        {/* Text Overlay with Smoother, Slower Animation */}
        <div
          key={currentIndex} // Key forces re-render for animation
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 opacity-0 
                   animate-fadeIn text-white text-4xl font-medium text-center"
        >
          {slides[currentIndex].text}
        </div>

        {/* Tailwind Animation */}
        <style>
          {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-50px); } /* Start from higher */
            100% { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeIn {
            animation: fadeIn 1.5s ease-out forwards; /* Slower transition */
          }
        `}
        </style>
      </div>

      <div className="flex justify-center items-center mt-5">
        <div >
          <p className="text-green-700 font-medium font-size text-lg justify-center items-center flex">
            SERVICES
          </p>
          <p className="text-2xl poppins">Providing Fresh Produce Every Day</p>
        </div>
      </div>


      <div className="flex flex-wrap justify-center items-start w-full max-w-6xl mx-auto mt-10 mb-20">
        <NavLink to="/service/1" className="border-l-1 border-t-1 border-b-1 border-green-400 p-4 h-40 text-center w-full sm:w-1/2 lg:w-1/4 hover:bg-green-100 transition">ji</NavLink>
        <NavLink to="/service/2" className="border-l-1 border-t-1 border-b-1 border-green-400 p-4 h-40 text-center w-full sm:w-1/2 lg:w-1/4 hover:bg-green-100 transition">ji</NavLink>
        <NavLink to="/service/3" className="border-l-1 border-t-1 border-b-1 border-green-400 p-4 h-40 text-center w-full sm:w-1/2 lg:w-1/4 hover:bg-green-100 transition">ji</NavLink>
        <NavLink to="/service/4" className="border-l-1 border-t-1 border-b-1 border-r-1 border-green-400 p-4 h-40 text-center w-full sm:w-1/2 lg:w-1/4 hover:bg-green-100 transition">ji</NavLink>
        <NavLink to="/service/5" className="border-l-1 border-b-1 border-green-400 p-4 h-40 text-center w-full sm:w-1/2 lg:w-1/4 hover:bg-green-100 transition">ji</NavLink>
        <NavLink to="/service/6" className="border-l-1 border-b-1 border-green-400 p-4 h-40 text-center w-full sm:w-1/2 lg:w-1/4 hover:bg-green-100 transition">ji</NavLink>
        <NavLink to="/service/7" className="border-l-1 border-b-1 border-green-400 p-4 h-40 text-center w-full sm:w-1/2 lg:w-1/4 hover:bg-green-100 transition">ji</NavLink>
        <NavLink to="/service/8" className="border-l-1 border-b-1 border-r-1 border-green-400 p-4 h-40 text-center w-full sm:w-1/2 lg:w-1/4 hover:bg-green-100 transition">ji</NavLink>
      </div>


    </>
  );
}

export default Home;
