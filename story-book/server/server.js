const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser middleware
app.use(express.json());

// Connect to MongoDB
connectDB(async () => {
  try {
    mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
      console.log('MongoDB connected');
    });

    mongoose.connection.on('error', (error) => {
      console.error('MongoDB connection error:', error);
    });
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
});

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Story Book app!');
});

// Define a route for the dashboard
app.get('/dashboard', (req, res) => {
  res.send('This is the dashboard');
});

// Define a route for the home page
app.get('/home', (req, res) => {
  res.send('This is the home page');
});

// Define a route for the login
app.post('/login', (req, res) => {
  // Handle login logic here
  // Access login data from req.body

  // Example response for successful login
  res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode at http://localhost:${PORT}`)
);
