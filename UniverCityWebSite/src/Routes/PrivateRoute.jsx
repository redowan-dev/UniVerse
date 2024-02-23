import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
  console.log(user);
  
    if (loading) {
      return (
        <div>
          <span className="loading loading-bars loading-xs"></span>
          <span className="loading loading-bars loading-sm"></span>
          <span className="loading loading-bars loading-md"></span>
          <span className="loading loading-bars loading-lg"></span>
        </div>
      );
      
    }
  
  if (user) {
    // Check if the user's email is verified
    if (user.emailVerified) {
      return children;
    } else {
        Swal.fire({
            title: 'Email Verification Required',
            text: 'Your email is not verified. Please verify your email to access this page.',
            icon: 'info',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: 'OK',
          });
      // Redirect to the "verify" route if the email is not verified
      return <Navigate to="/verify" state={{ from: location }} replace />;
    }
  }

  // If no user is authenticated, redirect to the login route
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;