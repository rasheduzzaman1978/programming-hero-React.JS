import React from 'react';
import { FaLaptopCode, FaStar, FaShippingFast } from 'react-icons/fa';

const Laptop = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-3xl p-10 shadow-lg mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">Explore Our Latest Laptops</h1>
              <p className="text-lg text-gray-200 max-w-xl">
                Discover high-performance laptops for gaming, work, and everyday use.
                Choose from top brands with the latest technology.
              </p>
              <button className="mt-6 bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
                Shop Now
              </button>
            </div>

            <div className="text-8xl">
              <FaLaptopCode />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-blue-600 text-4xl mb-4">
              <FaLaptopCode />
            </div>
            <h3 className="text-xl font-semibold mb-2">Powerful Performance</h3>
            <p className="text-gray-600">
              Equipped with modern processors and fast SSD storage for smooth performance.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaStar />
            </div>
            <h3 className="text-xl font-semibold mb-2">Top Rated Models</h3>
            <p className="text-gray-600">
              Browse customer-favorite laptops with excellent reviews and ratings.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FaShippingFast />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your laptop delivered quickly with our reliable shipping service.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laptop;