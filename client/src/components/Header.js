import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';  // Custom styles for Header

function Header() {
  return (
    <motion.header
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">
        <NavLink to="/">VR Safety Mastery</NavLink>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/skills" end>Skills Exchange</NavLink></li> {/* Ensure this points to /skills */}
          <li><NavLink to="/vr-training">VR Training</NavLink></li>
          <li><NavLink to="/workshops-events">Workshops & Events</NavLink></li>
          <li><NavLink to="/community">Community</NavLink></li>
          <li><NavLink to="/about-us">About Us</NavLink></li>
          <li><NavLink to="/contact-us">Contact Us</NavLink></li>
          <li><NavLink to="/sign-up">Sign Up</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
      </nav>
    </motion.header>
  );
}

export default Header;
