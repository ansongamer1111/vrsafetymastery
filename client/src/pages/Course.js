// Update Course.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Course.css';

const Course = ({ title, description, instructor }) => (
  <div className="course">
    <h3>
      <Link to={`/course/${title}`}>
        {title}
      </Link>
    </h3>
    <p>{description}</p>
    <p><strong>Instructor:</strong> {instructor}</p>
  </div>
);

export default Course;
