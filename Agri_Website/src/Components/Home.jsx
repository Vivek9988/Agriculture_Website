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

  // Services data with images and titles
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
      link: "/service/2",
      alt: "Organic Farming"
    },
    {
      id: 3,
      title: "Soil Crop Recommendation",
      image: "https://unicropbiochem.com/wp-content/uploads/2024/02/Blog-Soil-Analysis-1024x482.webp",
      link: "/service/3",
      alt: "Sustainable Practices"
    },
    {
      id: 4,
      title: "Irrigation Management",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbYA-47MxjTVWpeOVVfYHku2tzC-7XcDEXLg&s",
      link: "/service/4",
      alt: "Seasonal Produce"
    },
    {
      id: 5,
      title: "Weather Updates",
      image: "https://m.media-amazon.com/images/I/71GhE6nwTKL.png",
      link: "/service/5",
      alt: "Soil Management"
    },
    {
      id: 6,
      title: "Farm Education",
      image: "https://dsiweb.cse.msu.edu/wp-content/uploads/2014/10/agriculture-education.jpg",
      link: "/service/6",
      alt: "Farm Education"
    },
    {
      id: 7,
      title: "Community Gardens",
      image: "https://img.freepik.com/premium-vector/community-care-icons-team-help-illustration_911078-7846.jpg?semt=ais_hybrid&w=740",
      link: "/service/7",
      alt: "Community Gardens"
    },
    {
      id: 8,
      title: "Yield Prediction",
      image: "https://geopard.tech/wp-content/uploads/2022/06/63-min.jpg",
      link: "/service/8",
      alt: "Farming Tools"
    }
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
        <div>
          <p className="text-green-700 font-medium text-lg justify-center items-center flex">
            SERVICES
          </p>
          <p className="text-2xl poppins">Providing Fresh Produce Every Day</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-start w-full max-w-6xl mx-auto mt-10 mb-20">
        {services.map((service) => (
          <NavLink
            key={service.id}
            to={service.link}
            className={`border border-green-400 p-4 h-auto text-center w-full sm:w-1/2 lg:w-1/4 hover:bg-green-100 transition flex flex-col items-center justify-center`}
          >
            <div className="flex flex-col items-center w-full cursor-pointer">
              <img
                src={service.image}
                alt={service.alt}
                className="w-full h-32 object-cover mb-4 rounded"
              />
              <p className="font-medium text-green-700">{service.title}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
}

export default Home;