import React from 'react';
import './ContactUs.css';  // Custom styles

function ContactUs() {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>If you have any questions or would like more information about our VR safety training programs, feel free to reach out to us. We're here to help you every step of the way.</p>
      <div className="cta-buttons">
        <a href="mailto:info@vrsafetymastery.com" className="btn-primary">Email Us</a>
      </div>
    </div>
  );
}

export default ContactUs;
