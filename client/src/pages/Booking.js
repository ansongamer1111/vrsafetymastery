import React from 'react';
import './Booking.css';  // Custom styles

function Booking() {
  return (
    <div className="booking">
      <h1>Book Your Training Session</h1>
      <p>Reserve your spot in one of our VR safety training sessions. Select the course and date that works best for you.</p>
      <div className="cta-buttons">
        <a href="/certificates" className="btn-primary">View Available Courses</a>
      </div>
    </div>
  );
}

export default Booking;
