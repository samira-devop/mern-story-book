// routes/books.js
const express = require('express');
const router = express.Router();
const Book = require('../models/Book');

// DELETE /api/dashboard/books/:title
router.delete('/dashboard/books/:title', async (req, res) => {
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

module.exports = router;
