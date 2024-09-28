// src/components/SearchBar.js
import React from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchTerm }) => {
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search skills..."
      onChange={handleChange}
      className="search-bar"
    />
  );
};

export default SearchBar;
