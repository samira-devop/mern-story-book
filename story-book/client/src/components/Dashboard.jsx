import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>
      {/* Dashboard content goes here */}
    </div>
  );
};

export default Dashboard;
