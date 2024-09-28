import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css';  // Custom styles for Footer

function Footer() {
  return (
    <motion.footer
    className="footer"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="footer-links">
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
          <NavLink to="/terms-of-service">Terms of Service</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </div>
        <p>© 2024 MyWebsite. All rights reserved.</p>
      </div>
    </footer>
    </motion.footer>
  );
}

export default Footer;
