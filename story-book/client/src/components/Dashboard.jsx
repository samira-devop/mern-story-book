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
      const booksWithImageURL = data.map((book) => ({
        ...book,
        image: book.url, // Assuming the book data contains the URL field for the image
      }));
      setBooks(booksWithImageURL);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleDeleteBook = async (title) => {
    try {
      // Assuming you have a delete book API endpoint in your backend
      await fetch(`${backendURL}/api/dashboard/books/${encodeURIComponent(title)}`, {
        method: 'DELETE',
      });
      // After deletion, update the books state by filtering out the deleted book
      setBooks((prevBooks) => prevBooks.filter((book) => book.title !== title));
    } catch (error) {
      console.error('Error deleting book:', error);
    }
  };

  const handleAddBook = async (newBook) => {
    try {
      // Assuming you have an add book API endpoint in your backend
      const response = await fetch(`${backendURL}/api/dashboard/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });
      if (!response.ok) {
        throw new Error('Failed to add book');
      }
      // After adding the book, fetch the updated book list
      fetchBooks();
      setIsAddingBook(false); // Hide the book form after successful submission
    } catch (error) {
      console.error('Error adding book:', error);
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
        {isAddingBook && <BookForm onSubmit={handleAddBook} categories={categories} />}
        <BookList books={books}>
          {/* Custom rendering function */}
          {(book) => (
            <BookItem
              key={book._id}
              title={book.title}
              author={book.author}
              description={book.description}
              image={book.image}
              url={book.url} // Pass the book URL as a prop
              onDelete={handleDeleteBook} // Pass the delete function
            />
          )}
        </BookList>
      </div>
    </div>
  );
};

export default Dashboard;
