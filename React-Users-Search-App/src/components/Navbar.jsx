
// Navbar.jsx
import React from 'react';
import Hamburger from 'hamburger-react';
import SearchBar from './SearchBar';

const Navbar = ({ isOpen, setOpen, searchText, setSearchText }) => {
  const handleSearch = () => {
    console.log('Searching for:', searchText);
    // এখানে চাইলে navigate, API call বা filter logic দিতে পারো
  };

  return (
    <>
      <div className="navbar sticky top-0 z-50 max-w-6xl mx-auto bg-base-100 shadow-sm px-4">
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
        <div className="hidden lg:flex justify-between items-center gap-2">
          <SearchBar
            searchText={searchText}
            setSearchText={setSearchText}
            className="hidden lg:block w-48 md:w-64"
          />

          <button
            onClick={handleSearch}
            className="btn btn-primary"
          >
            Search
          </button>
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

          <button
            onClick={handleSearch}
            className="btn btn-primary w-full"
          >
            Search
          </button>

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
