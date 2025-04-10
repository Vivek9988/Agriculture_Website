import React from 'react'

const About = () => {
  return (
    <>
      <div className="bg-green-50 py-12 px-6 md:px-16 lg:px-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-2xl shadow-lg">
            <img
              src='https://images.pexels.com/photos/1443867/pexels-photo-1443867.jpeg?auto=compress&cs=tinysrgb&w=1200'
              alt="Farm Landscape"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-green-800 mb-4">About Us</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Welcome to <span className="font-semibold text-green-700">AgroHarvest</span>, where tradition meets innovation.
              We're passionate about sustainable farming and empowering communities through advanced agricultural practices.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              Our journey began with a simple mission: to provide fresh, organic produce while protecting the environment.
              Today, we work with farmers across the region to implement eco-friendly techniques that enrich the soil and preserve nature.
            </p>
            <p className="text-green-900 font-medium mt-4">
              🌱 Growing with care. Feeding with love.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About