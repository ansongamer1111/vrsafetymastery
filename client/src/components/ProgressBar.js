// src/components/ProgressBar.js
import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }}>
        <span className="progress-percentage">{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
