import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Header from './Header';  // Import header to display for authenticated users

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Render the Header and the authenticated page content
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default PrivateRoute;
