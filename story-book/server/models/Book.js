// models/Book.js

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  url: {
    type: String, // Add the "url" field for the book URL
    required: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);
