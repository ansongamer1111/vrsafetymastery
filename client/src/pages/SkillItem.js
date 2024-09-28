import React, { useState } from 'react';
import Modal from './Modal';
import './SkillItem.css';

function SkillItem({ skill }) {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleEnroll = () => {
    alert(`You have enrolled in ${skill.name}!`);
    setModalOpen(false);
  };

  return (
    <>
      <li className="skill-item">
        <div className="skill-content">
          <h2>{skill.name}</h2>
          <p>{skill.description}</p>
          <span className="category-label">{skill.category}</span>
          <button className="btn-more" onClick={handleOpenModal}>
            More Details
          </button>
        </div>
      </li>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h3>{skill.name} Details</h3>
        <p>{skill.details}</p>
        <p><strong>Additional Information:</strong> This course includes valuable insights and practical knowledge.</p>
        <button className="btn-enroll" onClick={handleEnroll}>
          Enroll in Course
        </button>
      </Modal>
    </>
  );
}

export default SkillItem;
