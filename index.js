import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import './Home.css';

function Home() {
  const fadeInProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    config: { duration: 1000 },
  });

  const scaleInProps = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.9)' },
    config: { duration: 1000 },
  });

  return (
    <animated.div className="home" style={fadeInProps}>
      {/* Hero Section */}
      <animated.div className="hero" style={scaleInProps}>
        <h1>Master Safety with Virtual Reality</h1>
        <p>
          Elevate your skills with cutting-edge VR training, workshops, and real-world simulations. 
          Experience learning like never before.
        </p>
        <a href="/sign-up" className="btn-primary">Start Your Journey</a>
      </animated.div>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose VR Safety Mastery?</h2>
        <div className="features-container">
          <div className="feature-item">
            <h3>Immersive VR Training</h3>
            <p>Experience hands-on learning in a risk-free environment with the latest VR technology.</p>
          </div>
          <div className="feature-item">
            <h3>Earn Certifications</h3>
            <p>Enhance your career prospects by getting certified in various safety protocols.</p>
          </div>
          <div className="feature-item">
            <h3>Join the Community</h3>
            <p>Connect with professionals and expand your network in our supportive community.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Are Saying</h2>
        <div className="testimonial-container">
          <div className="testimonial">
            <p>"VR Safety Mastery transformed how I train my employees. It's efficient and engaging!"</p>
            <h4>- Sarah, Safety Manager</h4>
          </div>
          <div className="testimonial">
            <p>"I've never felt more confident in my safety skills. The VR training is a game-changer."</p>
            <h4>- Alex, Construction Worker</h4>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="app-advert">
        <h2>Download Our App</h2>
        <p>Access all our features on the go. Available on iOS and Android.</p>
        <div className="app-links">
          <a href="#" className="app-link">Download on the App Store</a>
          <a href="#" className="app-link">Get it on Google Play</a>
        </div>
      </section>
    </animated.div>
  );
}

export default Home;
