import React from 'react';
import { motion } from 'framer-motion';
import './LandingPage.css';  // Assuming you have a CSS file for the landing page

function LandingPage() {
  return (
    <div className="landing-page">
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Welcome to VR Safety Mastery</h1>
        <p>Transform your safety skills with cutting-edge VR training.</p>
        <a href="/sign-up" className="btn-primary">Get Started</a>
      </motion.div>
    </div>
  );
}

export default LandingPage;
