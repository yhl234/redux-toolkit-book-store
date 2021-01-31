import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography, Paper, Button } from '@material-ui/core';

import { Add } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Book from '../../components/book/Book';
import {
  addBook,
  upsertBook,
  deleteBook,
  selectAllBooks,
  selectBookById,
} from './booksSlice';
import BookForm from './BookForm';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    padding: '3rem',
    margin: '0 auto',
  },
});
const Books = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const books = useSelector(selectAllBooks);
  const [open, setOpen] = useState(false);
  const [bookId, setBookId] = useState('new');
  // const tempBook = useSelector(state => selectBookById(state, bookId));

  // useEffect(() => {
  //   // if (bookId && bookId !== 'new') {
  //   //   console.log(tempBook);
  //   // }
  //   console.log(bookId, tempBook);
  // }, [bookId, tempBook]);

  const handleDeleteClick = (e, id) => {
    e.stopPropagation();
    dispatch(deleteBook(id));
  };
  const handleClickOpen = id => {
    setOpen(true);
    setBookId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper className={classes.root}>
      <Grid container elevation={3} justify="space-around">
        <Grid item xs={12} sm={10}>
          <Typography variant="h5" align="left">
            Trending Now
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sm={2}
          alignItems="flex-end"
          justify="flex-end"
        >
          <Button
            size="small"
            color="secondary"
            onClick={() =>
              // dispatch(upsertBook({ name: '', category: '', price: 0 }))
              handleClickOpen('new')
            }
          >
            <Add />
            New Book
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {books.map((b, i) => {
          const { _id, name, category, price, image } = b;
          return (
            <Grid item xs={12} sm={6} md={3} key={_id}>
              <Book
                _id={_id}
                name={name}
                category={category}
                price={price}
                image={image}
                handleDelete={handleDeleteClick}
                handleOpen={handleClickOpen}
              />
            </Grid>
          );
        })}
      </Grid>
      <BookForm open={open} handleClose={handleClose} bookId={bookId} />
    </Paper>
  );
};

export default Books;
