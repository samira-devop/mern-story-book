const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const uri = process.env.MONGO_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1); // Exit with error code 1
  });

// Book Model
const Book = require('./models/Book'); // Assuming you have defined the Book model

// Routes
app.use('/api/login', require('./routes/login'));
app.use('/api/dashboard', require('./routes/dashboard'));

// DELETE a book by title
app.delete('/api/dashboard/books/:title', async (req, res) => {
  const { title } = req.params;

  try {
    // Find the book by title and delete it
    await Book.findOneAndDelete({ title });
    res.sendStatus(204); // No Content (success status code)
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve frontend files from the build directory
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle requests to your React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
