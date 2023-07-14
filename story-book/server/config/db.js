require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async (fn) => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
    fn();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
