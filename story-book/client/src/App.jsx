import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  useEffect(() => {
    fetch('/api/test')
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="App bg-gray-100">
      <Router>
        <Routes> {/* Use Routes instead of Router */}
          <Route path="/" element={<Login />} /> {/* Use element prop instead of exact */}
          <Route path="/dashboard" element={<Dashboard />} /> {/* Use element prop instead of exact */}
          <Route path="/home" element={<Home />} /> {/* Use element prop instead of exact */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
