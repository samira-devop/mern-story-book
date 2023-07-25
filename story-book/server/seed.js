// server/seed.js
const mongoose = require('mongoose');
const data = require('./data'); // Import the data array from data.js
const Book = require('./models/Book'); // Replace with the correct path to your Book model

// Replace your MongoDB URI here
const MONGO_URI = 'mongodb://localhost:27017/your_database_name';

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Function to seed the database with sample books
const seedDatabase = async () => {
  try {
    // Clear existing books in the database
    await Book.deleteMany();

    // Insert sample books into the database from the data array
    await Book.insertMany(data);

    console.log('Sample books inserted into the database.');
  } catch (error) {
    console.error('Error seeding the database:', error);
  } finally {
    // Close the MongoDB connection
    mongoose.disconnect();
  }
};

// Call the seedDatabase function to populate the database with sample books
seedDatabase();
