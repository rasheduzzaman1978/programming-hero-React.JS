import React from 'react';
import { FaLaptop, FaMobileAlt, FaShippingFast, FaStar } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h1 className="text-5xl font-bold mb-4 leading-tight">
              Welcome to Our Tech Store
            </h1>
            <p className="text-lg text-gray-200 max-w-xl mb-6">
              Discover the latest laptops, mobiles, and gadgets with amazing deals and fast delivery.
            </p>
            <button className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition duration-300">
              Shop Now
            </button>
          </div>

          <div className="flex gap-6 text-7xl">
            <FaLaptop />
            <FaMobileAlt />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-indigo-600 text-4xl mb-4">
              <FaLaptop />
            </div>
            <h3 className="text-xl font-semibold mb-2">Latest Devices</h3>
            <p className="text-gray-600">
              Explore the newest laptops and smartphones from top brands.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-yellow-500 text-4xl mb-4">
              <FaStar />
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
            <p className="text-gray-600">
              We provide only trusted products with excellent customer satisfaction.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
            <div className="text-green-500 text-4xl mb-4">
              <FaShippingFast />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your orders delivered quickly and safely to your doorstep.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-100 p-8 rounded-3xl flex items-center justify-between hover:shadow-xl transition duration-300">
              <div>
                <h3 className="text-2xl font-bold text-indigo-700 mb-2">Laptops</h3>
                <p className="text-gray-700 mb-4">
                  Powerful laptops for work, gaming, and study.
                </p>
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
                  Explore
                </button>
              </div>

              <FaLaptop className="text-6xl text-indigo-600" />
            </div>

            <div className="bg-pink-100 p-8 rounded-3xl flex items-center justify-between hover:shadow-xl transition duration-300">
              <div>
                <h3 className="text-2xl font-bold text-pink-700 mb-2">Mobiles</h3>
                <p className="text-gray-700 mb-4">
                  Discover modern smartphones with smart features.
                </p>
                <button className="bg-pink-600 text-white px-5 py-2 rounded-lg hover:bg-pink-700 transition">
                  Explore
                </button>
              </div>

              <FaMobileAlt className="text-6xl text-pink-600" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;