import React from 'react';
import './AboutUs.css';  // Custom styles

function AboutUs() {
  return (
    <div className="about-us">
      <h1>About VR Safety Mastery</h1>
      <p>At VR Safety Mastery, we are committed to revolutionizing safety training through the power of virtual reality. Our mission is to provide immersive and effective training solutions that enhance safety practices across industries.</p>
      <div className="cta-buttons">
        <a href="/contact-us" className="btn-primary">Contact Us</a>
      </div>
    </div>
  );
}

export default AboutUs;
