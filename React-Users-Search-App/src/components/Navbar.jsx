// Navbar.jsx
import React from 'react';
import Hamburger from 'hamburger-react';
import SearchBar from './SearchBar';

const Navbar = ({ isOpen, setOpen, searchText, setSearchText }) => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm px-4">
        {/* Mobile Menu Button */}
        <div className="flex-none lg:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            className="w-10 h-10 flex items-center justify-center p-0 m-0 border-0 bg-transparent"
          >
            <div className="flex items-center justify-center leading-none">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={18}
                color="blue"
                duration={0.4}
                rounded
              />
            </div>
          </button>
        </div>

        {/* Logo */}
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-2">
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            className="hidden lg:block w-48 md:w-64"
          />

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-base-100 shadow-md p-4 space-y-4">
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            className="w-full"
          />

          <ul className="menu bg-base-100 rounded-box">
            <li>
              <a onClick={() => setOpen(false)}>Profile</a>
            </li>
            <li>
              <a onClick={() => setOpen(false)}>Settings</a>
            </li>
            <li>
              <a onClick={() => setOpen(false)}>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;