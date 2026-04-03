import React from 'react';
import { FaHome, FaInfoCircle, FaMobileAlt, FaLaptop, FaImage, FaUsers } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="w-72 min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white shadow-2xl">
      <div className="p-6 border-b border-slate-700">
        <h2 className="text-3xl font-bold text-cyan-400">Tech Store</h2>
        <p className="text-sm text-slate-300 mt-1">Admin Dashboard</p>
      </div>

      <aside className="p-5">
        <nav>
          <ul className="space-y-3">
            <li>
              <a
                href="/home"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
              >
                <FaHome className="text-lg" />
                <span className="font-medium">Home</span>
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
              >
                <FaInfoCircle className="text-lg" />
                <span className="font-medium">About</span>
              </a>
            </li>

            <li>
              <a
                href="/mobiles"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
              >
                <FaMobileAlt className="text-lg" />
                <span className="font-medium">Mobiles</span>
              </a>
            </li>

            <li>
              <a
                href="/laptop"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
              >
                <FaLaptop className="text-lg" />
                <span className="font-medium">Laptop</span>
              </a>
            </li>

            <li>
              <a
                href="/banner"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
              >
                <FaImage className="text-lg" />
                <span className="font-medium">Banner</span>
              </a>
            </li>

             <li>
              <a
                href="/users"
                className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-cyan-500 hover:text-white transition duration-300"
              >
                <FaUsers className="text-lg" />
                <span className="font-medium">Users</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-10 bg-slate-700 rounded-2xl p-4 text-center">
          <h3 className="text-lg font-semibold text-cyan-300 mb-2">
            Need Help?
          </h3>
          <p className="text-sm text-slate-300 mb-4">
            Contact support for any dashboard issue.
          </p>
          <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition duration-300">
            Contact Us
          </button>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;