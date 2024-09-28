import React from 'react';
import './Community.css';  // Custom styles

function Community() {
  return (
    <div className="community">
      <h1>Join the Community</h1>
      <p>Become part of a growing community of VR safety professionals. Share insights, discuss challenges, and work together to push the boundaries of safety training in virtual reality.</p>
      <div className="cta-buttons">
        <a href="/sign-up" className="btn-primary">Join Now</a>
      </div>
    </div>
  );
}

export default Community;
