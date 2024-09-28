// src/pages/SkillsExchange.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SkillsExchange.css'; // Styling for SkillsExchange page
import { skillsData } from './data'; // Import mock data
import SearchBar from '../components/SearchBar';
import FilterDropdown from '../components/FilterDropdown';
import ProgressBar from '../components/ProgressBar'; // Import the ProgressBar component

const SkillsExchange = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get unique categories from skills data
  const categories = [...new Set(skillsData.map(skill => skill.category))];

  // Filter skills based on search term and selected category
  const filteredSkills = skillsData.filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? skill.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="skills-exchange">
      <h1 className="page-title">Skills Exchange</h1>
      <div className="search-filter-container">
        <SearchBar setSearchTerm={setSearchTerm} />
        <FilterDropdown categories={categories} setSelectedCategory={setSelectedCategory} />
      </div>
      <ul className="skills-list">
        {filteredSkills.map((skill) => (
          <li key={skill.id} className="skill-item">
            <Link to={`/skill/${skill.id}`} className="skill-link">
              <h2 className="skill-name">{skill.name}</h2>
              <p className="skill-description">{skill.description}</p>
              <span className="category-label">{skill.category}</span>
              <ProgressBar percentage={skill.progress} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsExchange;
