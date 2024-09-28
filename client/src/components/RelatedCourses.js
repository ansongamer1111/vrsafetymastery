// src/components/RelatedCourses.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RelatedCourses.css';

const RelatedCourses = ({ relatedSkills }) => {
  return (
    <div className="related-courses">
      <h2>Related Courses</h2>
      <ul className="related-courses-list">
        {relatedSkills.map((skill) => (
          <li key={skill.id} className="related-course-item">
            <Link to={`/skill/${skill.id}`} className="related-course-link">
              <h3>{skill.name}</h3>
              <p>{skill.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RelatedCourses;
