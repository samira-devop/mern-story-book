import React, { useState } from 'react';
import { BiBook } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import Auth0 hooks
import '../styles/Login.css';
import backgroundImage from '../images/storybook-image.jpg';

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const { loginWithRedirect } = useAuth0(); // Destructure Auth0 hooks

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setError(''); // Clear any previous errors

    try {
      // Implement your custom login logic here (e.g., using your backend API)
      // ...
      // If the login is successful, redirect to the dashboard
      // history.push('/dashboard'); // Uncomment this line if using custom login logic
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials. Please try again.'); // Set a custom error message for traditional login
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
          Make your stories!
        </p>
        <form>
          <div className="form-group">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          {error && <p className="error-message">{error}</p>} {/* Display error message if there's an error */}
          <button className="login-button" type="button" onClick={handleLogin} disabled={isLoading}>
            <span className="login-button-text">{isLoading ? 'Loading...' : 'Login'}</span>
          </button>
        </form>
        <p>Or</p>
        <button className="auth0-login-button" onClick={() => loginWithRedirect()}>
          Login with Auth0
        </button>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
