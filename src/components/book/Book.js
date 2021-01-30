import React from 'react';

const Book = ({ _id, name, category, price, handleDelete }) => (
  <div>
    <p>{name}</p>
    <p>{category}</p>
    <p>{price}</p>
    <button onClick={() => handleDelete()}>delete</button>
  </div>
);

export default Book;
