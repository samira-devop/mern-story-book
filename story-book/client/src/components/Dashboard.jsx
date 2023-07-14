import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchCategories();
    fetchBooks();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchBooks = async () => {
    try {
      const bookData = [
        {
          _id: '1',
          title: 'Lion King',
          author: 'author 1',
          image: require('../images/img1.jpg'), // Replace with the correct image file path
        },
        {
          _id: '2',
          title: 'Little Kids',
          author: 'Author 2',
          image: require('../images/img2.jpg'), // Replace with the correct image file path
        },
        {
          _id: '3',
          title: 'Cinderella',
          author: 'Author 3',
          image: require('../images/img3.jpg'), // Replace with the correct image file path
        },
        {
          _id: '4',
          title: 'Clifford',
          author: 'Author 4',
          image: require('../images/img4.jpg'), // Replace with the correct image file path
        },
        {
          _id: '5',
          title: 'I Beleive I can',
          author: 'Author 5',
          image: require('../images/img5.jpg'), // Replace with the correct image file path
        },
      
      ];

      setBooks(bookData);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const deleteBook = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard</h1>
      <div className="categories-container">
        <h2 className="categories-title">Categories</h2>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category._id} className="category-item">
              <Link to={`/dashboard/${category._id}`} className="category-link">
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="books-container">
        <h2 className="books-title">Books</h2>
        <ul className="book-list">
          {books.map((book) => (
            <li key={book._id} className="book-item">
              <div className="book-details">
                <img src={book.image} alt={book.title} className="book-image" />
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">By {book.author}</p>
                </div>
              </div>
              <button className="delete-button" onClick={() => deleteBook(book._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
