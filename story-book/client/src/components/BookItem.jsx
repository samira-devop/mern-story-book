import React from 'react';

const BookItem = ({ title, author, description, image, url, onDelete }) => {
  return (
    <div className="book-item">
      {image ? (
        <img src={image} alt={title} className="book-image" />
      ) : (
        <div className="book-image-placeholder">Image not available</div>
      )}
      <div className="book-details">
        <div className="book-info">
          <h3 className="book-title">{title}</h3>
          <p className="book-author">Author: {author}</p>
          <p className="book-description">{description}</p>
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="book-url">
              Read More
            </a>
          )}
        </div>
        <button className="delete-button" onClick={() => onDelete(title)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookItem;
