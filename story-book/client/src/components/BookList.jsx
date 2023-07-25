// src/components/BookList.js
import React from 'react';

const BookList = ({ children, books }) => {
  return (
    <ul className="book-list">
      {books.map((book) => (
        <li key={book._id} className="book-item">
          {children(book)}
        </li>
      ))}
    </ul>
  );
};

export default BookList;
