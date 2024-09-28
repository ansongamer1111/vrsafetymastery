import React from 'react';
import { Link } from 'react-router-dom';
import './VRTraining.css';  // Custom styles

const trainingModules = [
  { id: 1, title: 'Introduction to VR Safety', description: 'Learn the basics of VR safety and best practices.' },
  { id: 2, title: 'Hazard Recognition', description: 'Identify and respond to potential hazards in a virtual environment.' },
  { id: 3, title: 'Emergency Response Training', description: 'Practice emergency response procedures in a simulated VR environment.' },
  { id: 4, title: 'Advanced Safety Protocols', description: 'Deep dive into advanced safety measures and protocols.' },
];

function VRTraining() {
  return (
    <div className="vr-training">
      <h1>VR Safety Training</h1>
      <p>Immerse yourself in our comprehensive VR safety training programs. Our interactive modules cover a wide range of safety scenarios, allowing you to practice and perfect your skills in a risk-free virtual environment.</p>
      <div className="training-modules">
        {trainingModules.map((module) => (
          <div key={module.id} className="training-module">
            <h2>{module.title}</h2>
            <p>{module.description}</p>
            <Link to={`/course/${module.id}`} className="btn-secondary">Start Module</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VRTraining;
