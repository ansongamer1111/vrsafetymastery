import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SkillCard from '../components/SkillCard';

const SkillsExchangePage = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      const res = await axios.get('/api/skills');
      setSkills(res.data);
    };

    fetchSkills();
  }, []);

  return (
    <div>
      <h1>Skills Exchange</h1>
      <div className="skills-grid">
        {skills.map(skill => (
          <SkillCard key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillsExchangePage;
