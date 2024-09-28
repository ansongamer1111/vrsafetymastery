import React from 'react';
import './Badge.scss';

const Badge = ({ badge }) => {
  return (
    <div className="badge">
      <img src={badge.image} alt={badge.name} />
      <p>{badge.name}</p>
    </div>
  );
};

export default Badge;
