import React from 'react';
import { useParams } from 'react-router-dom';
import './CourseDetail.css';

function CourseDetail({ courses }) {
  const { id } = useParams();
  const course = courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="course-detail">
      <h1>{course.name}</h1>
      <p>{course.description}</p>
      <div className="cta-buttons">
        <a href="/sign-up" className="btn-primary">Join Course</a>
      </div>
    </div>
  );
}

export default CourseDetail;
