import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaMobileAlt, FaLaptop, FaImage, FaUsers } from 'react-icons/fa';

const Header = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition duration-300 ${
      isActive
        ? 'bg-cyan-500 text-white shadow-md'
        : 'text-gray-700 hover:bg-cyan-100 hover:text-cyan-600'
    }`;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-3xl font-bold text-cyan-600">
            Tech Store
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <NavLink to="/" className={navLinkClass}>
                <FaHome />
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={navLinkClass}>
                <FaInfoCircle />
                About
              </NavLink>
            </li>

            <li>
              <NavLink to="/mobiles" className={navLinkClass}>
                <FaMobileAlt />
                Mobiles
              </NavLink>
            </li>

            <li>
              <NavLink to="/laptop" className={navLinkClass}>
                <FaLaptop />
                Laptops
              </NavLink>
            </li>

            <li>
              <NavLink to="/banner" className={navLinkClass}>
                <FaImage />
                Banner
              </NavLink>
            </li>

            <li>
              <NavLink to="/users" className={navLinkClass}>
                <FaUsers />
                Users
              </NavLink>
            </li>

            <li>
              <NavLink to="/users2" className={navLinkClass}>
                <FaUsers />
                Users2
              </NavLink>
            </li>

            <li>
              <NavLink to="/posts" className={navLinkClass}>
                <FaUsers />
                Posts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;