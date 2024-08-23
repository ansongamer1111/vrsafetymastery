import React from 'react';
import { Link } from 'react-router-dom';

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <img src={skill.image} alt={skill.title} />
      <div className="skill-content">
        <h3>{skill.title}</h3>
        <p>{skill.description}</p>
        <Link to={`/skills/${skill._id}`}>Learn More</Link>
      </div>
    </div>
  );
};

export default SkillCard;
