import React from 'react';
import './WorkshopsEvents.css';  // Custom styles

function WorkshopsEvents() {
  return (
    <div className="workshops-events">
      <h1>Workshops & Events</h1>
      <p>Join our expert-led workshops and events to stay ahead in the VR safety field. Whether you're looking to learn new techniques or network with other professionals, our events are the place to be.</p>
      <div className="cta-buttons">
        <a href="/sign-up" className="btn-primary">View Upcoming Events</a>
      </div>
    </div>
  );
}

export default WorkshopsEvents;
