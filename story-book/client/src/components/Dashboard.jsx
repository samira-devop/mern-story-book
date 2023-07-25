import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';
import BookForm from './BookForm';
import BookList from './BookList';
import BookItem from './BookItem';

const Dashboard = () => {
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [isAddingBook, setIsAddingBook] = useState(false);

  useEffect(() => {
    fetchCategories();
    fetchBooks();
  }, []);

  const fetchCategories = async () => {
    // Implement fetching categories from the server if needed
    // ...
    const categoriesData = ['Adventure', 'Fairy Tale', 'Fantasy']; // Example data
    setCategories(categoriesData);
  };

  // Assuming you have the correct backend routes set up
  const backendURL = 'http://localhost:8000'; // Replace with your backend URL

  const fetchBooks = async () => {
    try {
      const response = await fetch(`${backendURL}/api/dashboard/books`);
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to the Dashboard</h1>
      <div className="categories-container">
        <h2 className="categories-title">Categories</h2>
        <ul className="category-list">
          {categories.map((category) => (
            <li key={category} className="category-item">
              {/* Update the Link to point to the correct route */}
              <Link to={`/dashboard/categories/${category}`} className="category-link">
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="books-container">
        <h2 className="books-title">Books</h2>
        <button className="add-button" onClick={() => setIsAddingBook(true)}>
          Add New Book
        </button>
        {isAddingBook && <BookForm onSubmit={() => setIsAddingBook(false)} />}
        <BookList books={books}>
          {(book) => (
            <BookItem
              key={book._id}
              title={book.title}
              author={book.author}
              description={book.description}
              image={book.image}
            />
          )}
        </BookList>
      </div>
    </div>
  );
};

export default Dashboard;
