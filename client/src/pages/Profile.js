// Profile.js
import React from 'react';
import './Profile.css';

const Profile = ({ user }) => (
  <div className="profile">
    <h1>{user.name}'s Profile</h1>
    <section>
      <h2>Enrolled Courses</h2>
      <ul>
        {user.enrolledCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Completed Courses</h2>
      <ul>
        {user.completedCourses.map((course, index) => (
          <li key={index}>{course}</li>
        ))}
      </ul>
    </section>
    <section>
      <h2>Achievements</h2>
      <ul>
        {user.achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </section>
  </div>
);

export default Profile;
