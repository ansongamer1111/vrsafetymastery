import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BadgeNotification = ({ userId }) => {
  const [badges, setBadges] = useState([]);

  useEffect(() => {
    const fetchUserBadges = async () => {
      const res = await axios.get(`/api/users/${userId}/badges`);
      setBadges(res.data);
    };

    fetchUserBadges();
  }, [userId]);

  return (
    <div className="badge-notification">
      {badges.map(badge => (
        <div key={badge._id} className="notification">
          <p>Congratulations! You earned a new badge: {badge.name}</p>
        </div>
      ))}
    </div>
  );
};

export default BadgeNotification;
