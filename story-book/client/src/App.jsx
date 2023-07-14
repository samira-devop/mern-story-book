import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react';
import Dashboard from './components/Dashboard'
import Home from './components/Home';
import Login from './components/Login'

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
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App