import React from 'react';
import { FaMobileAlt, FaBatteryFull, FaCamera, FaShippingFast } from 'react-icons/fa';

const Mobiles = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-3xl p-10 shadow-lg mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Latest Mobile Collection</h1>
              <p className="text-lg text-gray-100 max-w-xl">
                Discover the newest smartphones with amazing cameras, long battery life,
                and powerful performance for your daily needs.
              </p>
              <button className="mt-6 bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
                Explore Now
              </button>
            </div>

            <div className="text-8xl">
              <FaMobileAlt />
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-pink-500 text-4xl mb-4">
              <FaCamera />
            </div>
            <h3 className="text-xl font-semibold mb-2">High Quality Camera</h3>
            <p className="text-gray-600">
              Capture beautiful photos and videos with advanced camera technology.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FaBatteryFull />
            </div>
            <h3 className="text-xl font-semibold mb-2">Long Battery Life</h3>
            <p className="text-gray-600">
              Enjoy all-day performance with powerful battery backup and fast charging.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-blue-500 text-4xl mb-4">
              <FaShippingFast />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your favorite smartphone delivered quickly and safely to your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobiles;