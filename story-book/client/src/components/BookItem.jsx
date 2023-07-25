// src/components/BookItem.js
import React from 'react';

const BookItem = ({ title, author, description, image }) => {
  return (
    <div className="book-details">
      <img src={image} alt={title} className="book-image" />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">By {author}</p>
        <p className="book-description">{description}</p>
      </div>
    </div>
  );
};

export default BookItem;
