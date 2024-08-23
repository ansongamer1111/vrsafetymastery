import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BadgeDisplay from '../components/BadgeDisplay';

const DashboardPage = () => {
  const [statistics, setStatistics] = useState({ coursesCompleted: 0, upcomingEvents: 0 });

  useEffect(() => {
    const fetchStatistics = async () => {
      const res = await axios.get('/api/users/statistics');
      setStatistics(res.data);
    };

    fetchStatistics();
  }, []);

  return (
    <div className="dashboard-page">
      <h1>Dashboard</h1>
      <div className="statistics">
        <div className="stat-card">
          <h2>Courses Completed</h2>
          <p>{statistics.coursesCompleted}</p>
        </div>
        <div className="stat-card">
          <h2>Upcoming Events</h2>
          <p>{statistics.upcomingEvents}</p>
        </div>
      </div>
      <BadgeDisplay />
    </div>
  );
};

export default DashboardPage;
