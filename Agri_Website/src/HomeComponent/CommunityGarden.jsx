import React, { useState } from 'react';
import { FaLeaf, FaUsers, FaSeedling, FaCalendarAlt, FaRegSmile } from 'react-icons/fa';

const CommunityGarden = () => {
  const [activeTab, setActiveTab] = useState('about');

  const gardenData = [
    {
      id: 1,
      title: "Organic Vegetables",
      image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      text: "Grow fresh, organic vegetables with guidance from our expert gardeners.",
      icon: <FaLeaf className="text-green-600" />
    },
    {
      id: 2,
      title: "Community Events",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      text: "Join our monthly workshops and seasonal celebrations in the garden.",
      icon: <FaUsers className="text-green-600" />
    },
    {
      id: 3,
      title: "Pollinator Garden",
      image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      text: "Help us maintain the pollinator garden that supports local biodiversity.",
      icon: <FaSeedling className="text-green-600" />
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="text-center px-6 py-12">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Our Community Garden</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A vibrant green space where neighbors come together to grow food, share knowledge, and build community connections.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="flex justify-center -mb-px">
            <button
              onClick={() => setActiveTab('about')}
              className={`px-6 py-3 font-medium text-sm md:text-base border-b-2 ${activeTab === 'about' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              About the Garden
            </button>
            <button
              onClick={() => setActiveTab('join')}
              className={`px-6 py-3 font-medium text-sm md:text-base border-b-2 ${activeTab === 'join' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              How to Join
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-3 font-medium text-sm md:text-base border-b-2 ${activeTab === 'events' ? 'border-green-600 text-green-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
            >
              Upcoming Events
            </button>
          </nav>
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          {/* About Tab */}
          {activeTab === 'about' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gardenData.map((item) => (
                  <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        {item.icon}
                        <h3 className="ml-2 text-xl font-semibold text-green-700">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.text}</p>
                      <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="bg-green-50 rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-700">150+</p>
                  <p className="text-gray-600">Community Members</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-700">12</p>
                  <p className="text-gray-600">Garden Plots</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-700">4</p>
                  <p className="text-gray-600">Annual Events</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-700">100%</p>
                  <p className="text-gray-600">Organic</p>
                </div>
              </div>
            </div>
          )}

          {/* Join Tab */}
          {activeTab === 'join' && (
            <div className="animate-fadeIn">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)" }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FaRegSmile className="text-green-600" />
                    <h3 className="ml-2 text-2xl font-semibold text-green-700">Become a Member</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Joining our community garden is easy! We welcome gardeners of all experience levels.
                    Annual membership includes your own garden plot, access to tools and resources,
                    and participation in all workshops and events.
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold text-green-700 mb-2">Membership Benefits:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-gray-600">
                      <li>4'x8' raised garden bed</li>
                      <li>Free seeds and seedlings</li>
                      <li>Weekly gardening workshops</li>
                      <li>Access to shared tools</li>
                      <li>Community harvest celebrations</li>
                    </ul>
                  </div>
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium">
                    Apply for Membership
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div className="animate-fadeIn">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: "url(https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)" }}
                ></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <FaCalendarAlt className="text-green-600" />
                    <h3 className="ml-2 text-2xl font-semibold text-green-700">Upcoming Events</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700">Spring Planting Day - April 15</h4>
                      <p className="text-gray-600">
                        Join us for our annual spring planting event. We'll prepare the garden beds and plant the season's first crops.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700">Composting Workshop - May 5</h4>
                      <p className="text-gray-600">
                        Learn how to turn kitchen scraps into garden gold with our composting expert.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-700">Summer Harvest Festival - July 20</h4>
                      <p className="text-gray-600">
                        Celebrate the season's bounty with food, music, and garden tours.
                      </p>
                    </div>
                  </div>
                  <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-300 font-medium">
                    View Full Calendar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CommunityGarden;