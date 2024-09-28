// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from '../..';
import SkillsExchange from './pages/SkillsExchange';
import SkillDetail from './pages/SkillDetail';
import VRTraining from './pages/VRTraining';
import WorkshopsEvents from './pages/WorkshopsEvents';
import Community from './pages/Community';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AccountRecovery from './pages/AccountRecovery';
import CourseDetail from './pages/CourseDetail';
import Booking from './pages/Booking';
import Certificates from './pages/Certificates';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import ChatSupport from './pages/ChatSupport';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css'; // Import global styles

// Example courses data
const Courses = [
  { id: 1, title: 'VR Safety Fundamentals', description: 'Learn the basics of VR safety.', instructor: 'Jane Doe', category: 'Beginner' },
  { id: 2, title: 'Advanced VR Protocols', description: 'Deep dive into advanced safety protocols.', instructor: 'John Smith', category: 'Advanced' },
  { id: 3, title: 'Emergency Response in VR', description: 'How to handle emergencies in virtual environments.', instructor: 'Alice Brown', category: 'Intermediate' },
  // Add more courses as needed
];

// Example user data
const user = {
  name: 'John Doe',
  enrolledCourses: ['VR Safety Fundamentals', 'Advanced VR Protocols'],
  completedCourses: ['Emergency Response in VR'],
  achievements: ['VR Safety Certification', 'Advanced Protocols Badge'],
};

function App() {
  return (
    <>
      <Header />
      <Routes>
      <Redirect from="/" to="/home" /> {/* Automatically redirect to /home */}
        <Route path="/skills" element={<SkillsExchange />} /> {/* Fix path to skills */}
        <Route path="/skill/:id" element={<SkillDetail />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/course/:id" element={<CourseDetail courses={Courses} />} />
        <Route path="/vr-training" element={<VRTraining />} />
        <Route path="/workshops-events" element={<WorkshopsEvents />} />
        <Route path="/community" element={<Community />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account-recovery" element={<AccountRecovery />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile user={user} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ChatSupport />
      <Footer />
    </>
  );
}

export default App;
