import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
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
      <Grid container spacing={3}>
        {books.map((b, i) => {
          const { _id, name, category, price } = b;
          return (
            <Grid item xs={12} sm={6} md={3} key={_id}>
              <Book
                index={i}
                name={name}
                category={category}
                price={price}
                handleDelete={() => dispatch(deleteBook(_id))}
                handleUpdate={() => dispatch(updateBook(_id))}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Books;
