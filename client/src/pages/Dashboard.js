import React from 'react';
import './Dashboard.css';

function Dashboard() {
    return (
        <div className="dashboard-page">
            <h1>Dashboard</h1>
            <div className="dashboard-content">
                <p>Welcome back, John Doe!</p>
                <p>Your progress:</p>
                <ul>
                    <li>Completed VR Safety Training: 5 Modules</li>
                    <li>Upcoming Workshops: 2</li>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;
