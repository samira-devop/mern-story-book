import React from 'react';

const BookItem = ({ title, author, description, image, url, onDelete }) => {
  return (
    <div className="book-details">
      <img src={image} alt={title} className="book-image" />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">By {author}</p>
        <p className="book-description">{description}</p>
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            Read
          </a>
        )}
        {onDelete && (
          <button className="delete-button" onClick={() => onDelete(title)}>
            Delete Book
          </button>
        )}
      </div>
    </div>
  );
};

export default BookItem;
