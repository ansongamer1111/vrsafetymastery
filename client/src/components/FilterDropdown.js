// src/components/FilterDropdown.js
import React from 'react';
import './FilterDropdown.css';

const FilterDropdown = ({ categories, setSelectedCategory }) => {
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <select onChange={handleChange} className="filter-dropdown">
      <option value="">Select Category</option>
      {categories.map((category, index) => (
        <option key={index} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default FilterDropdown;
