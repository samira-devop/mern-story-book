import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import storybookImage from '../images/storybook-image.jpg';

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">Home</h1>
      <div className="home-content">
        <img src={storybookImage} alt="Storybook" className="storybook-image" />
        <p className="home-description">
          Welcome to the world of storybooks! Dive into the magical realm where your imagination comes to life.
        </p>
      </div>
      <nav className="home-nav">
        <ul className="home-nav-list">
          <li>
            <Link to="/dashboard" className="home-nav-link">Dashboard</Link>
          </li>
          <li>
            <Link to="/" className="home-nav-link">Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
