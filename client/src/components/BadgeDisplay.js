import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BadgeDisplay = () => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchBadges = async () => {
      const res = await axios.get('/api/badges');
      setBadges(res.data);
    };

    fetchBadges();
  }, []);

  return (
    <div className="badge-display">
      {badges.map(badge => (
        <div key={badge._id} className="badge">
          <img src={badge.icon} alt={badge.name} />
          <h3>{badge.name}</h3>
          <p>{badge.description}</p>
        </div>
      ))}
    </div>
  );
};

export default BadgeDisplay;
