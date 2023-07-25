const express = require('express');
const router = express.Router();

// POST /api/login
router.post('/', async (req, res) => {
  try {
    // Access the login data from req.body
    const { username, password } = req.body;

    // Perform login logic here (You can use a database to store user credentials)
    // For this example, we will use simple hard-coded credentials for demonstration purposes
    const validUsername = 'admin';
    const validPassword = 'password';

    // Check if the provided credentials are correct
    if (username === validUsername && password === validPassword) {
      // Example response for successful login
      res.status(200).json({ message: 'Login successful' });
    } else {
      // If the provided credentials are incorrect, respond with an error message
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle errors and send appropriate response
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
