import React, { useState, useEffect, Component } from "react";
import BoxComponent from "./BoxComponent";
import UserComponent from "./UserComponent";
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
    <>
      <div className="h-2/3 w-full relative overflow-hidden">
       
        <img
          className="w-full h-130 object-cover transition-opacity duration-1000 ease-in-out"
          src={slides[currentIndex].image}
          alt="Background"
        />

       
        <div
          key={currentIndex} 
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 opacity-0 
                   animate-fadeIn text-white text-4xl font-medium text-center"
        >
          {slides[currentIndex].text}
        </div>

        
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
        <div>
          <p className="text-green-700 font-serif text-2xl justify-center items-center flex mb-6">
            SERVICES
          </p>
          <p className="text-3xl font-serif font-light poppins">Providing Fresh Produce Every Day</p>
        </div>
      </div>

       {/* Box middle Component */}
      <BoxComponent/>
      {/* <div className="h-screen flex flex-col justify-between">
        <UserComponent />
      </div> */}
      <UserComponent />



    </>
  );
}

export default Home;