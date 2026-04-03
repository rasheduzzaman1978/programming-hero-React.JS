import React from 'react';
import { FaUsers, FaAward, FaShippingFast, FaHeadset } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white rounded-3xl p-10 shadow-lg mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">About Our Tech Store</h1>
              <p className="text-lg text-gray-100 max-w-2xl">
                We are passionate about bringing you the latest laptops, mobiles,
                and tech accessories with the best quality and affordable prices.
              </p>
            </div>

            <div className="text-8xl">
              <FaUsers />
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-cyan-700">Who We Are</h2>
            <p className="text-gray-600 leading-7">
              Our store is dedicated to providing high-quality tech products for everyone.
              Whether you need a powerful laptop for work or a modern smartphone for daily use,
              we have the right product for you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-cyan-700">Our Mission</h2>
            <p className="text-gray-600 leading-7">
              Our mission is to make technology accessible and affordable for all customers.
              We focus on quality, fast delivery, and customer satisfaction.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="text-cyan-600 text-4xl mb-4 flex justify-center">
              <FaAward />
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Quality</h3>
            <p className="text-gray-600">
              We provide trusted and premium quality products.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="text-green-500 text-4xl mb-4 flex justify-center">
              <FaShippingFast />
            </div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Get your orders delivered quickly and safely.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="text-yellow-500 text-4xl mb-4 flex justify-center">
              <FaHeadset />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our support team is always ready to help you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <div className="text-blue-500 text-4xl mb-4 flex justify-center">
              <FaUsers />
            </div>
            <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
            <p className="text-gray-600">
              Thousands of customers trust our service and products.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;