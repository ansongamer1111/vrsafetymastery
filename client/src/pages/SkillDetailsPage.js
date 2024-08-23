import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SkillDetailsPage = () => {
  const { id } = useParams();
  const [skill, setSkill] = useState(null);

  useEffect(() => {
    const fetchSkill = async () => {
      const res = await axios.get(`/api/skills/${id}`);
      setSkill(res.data);
    };

    fetchSkill();
  }, [id]);

  if (!skill) return <div>Loading...</div>;

  return (
    <div className="skill-details">
      <img src={skill.image} alt={skill.title} />
      <h1>{skill.title}</h1>
      <p>{skill.description}</p>
      <button>Request Skill</button>
    </div>
  );
};

export default SkillDetailsPage;
