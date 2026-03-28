// SearchBar.jsx
import React from 'react';

const SearchBar = ({ searchText, setSearchText, className = '' }) => {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className={`input input-bordered ${className}`}
    />
  );
};

export default SearchBar;