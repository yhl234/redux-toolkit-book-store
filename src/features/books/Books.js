import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../../components/book/Book';
import {
  addBook,
  updateBook,
  deleteBook,
  selectAllBooks,
  selectBookById,
} from './booksSlice';

const Books = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  return (
    <div>
      <button onClick={() => dispatch(addBook('name', 'a', 1))}>
        New Book
      </button>
      {books.map(b => {
        const { _id, name, category, price } = b;
        return (
          <Book
            key={_id}
            _id={_id}
            name={name}
            category={category}
            price={price}
            handleDelete={() => dispatch(deleteBook(_id))}
          />
        );
      })}
    </div>
  );
};

export default Books;
