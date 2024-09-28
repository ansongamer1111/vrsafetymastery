// src/pages/SkillDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { skillsData } from './data'; // Assuming you have relevant data here
import './SkillDetail.css';
import ProgressBar from '../components/ProgressBar';
import RelatedCourses from '../components/RelatedCourses'; // Assuming you have a related courses component

const SkillDetail = () => {
  const { id } = useParams();
  const skill = skillsData.find((s) => s.id === parseInt(id));

  if (!skill) {
    return <div>Skill not found!</div>;
  }

  const handleEnrollClick = () => {
    // Logic to enroll in the course
    alert(`Enrolled in ${skill.name}!`);
  };

  return (
    <div className="skill-detail">
      <h1 className="skill-title">{skill.name}</h1>
      <ProgressBar percentage={skill.progress} />
      <p className="skill-description">{skill.description}</p>
      <button className="enroll-button" onClick={handleEnrollClick}>
        Enroll in Course
      </button>
      <RelatedCourses relatedSkills={skill.relatedCourses} />
    </div>
  );
};

export default SkillDetail;
