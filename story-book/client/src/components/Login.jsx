import React, { useState } from 'react';
import { BiBook } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import '../styles/Login.css';
import backgroundImage from '../images/storybook-image.jpg';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // Make a POST request to the backend login endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ /* Login data */ }),
      });

      if (response.ok) {
        // Login successful
        // Do something after successful login
      } else {
        // Login failed
        // Handle error, display error message, etc.
      }
    } catch (error) {
      // Handle error, display error message, etc.
    }
    setIsLoading(false);
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="login-content">
        <h2 className="login-title">
          <BiBook className="login-icon" />
          <span className="login-text">Story Books</span>
        </h2>
        <p className="login-description">
          Create public and private stories about your life!
        </p>
        <Link to="/home">
          <button className="login-button" onClick={handleLogin} disabled={isLoading}>
            <span className="login-button-text">{isLoading ? 'Loading...' : 'Login'}</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
