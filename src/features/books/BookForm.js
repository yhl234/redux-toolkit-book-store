import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import {
  Grid,
  Typography,
  Paper,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import {
  addBook,
  updateBook,
  deleteBook,
  upsertBook,
  selectBookById,
} from './booksSlice';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    padding: '3rem',
    margin: '0 auto',
  },
});
const BookForm = ({ open, handleClose, bookId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const book = useSelector(state => selectBookById(state, bookId));

  const [form, setForm] = useState({
    name: '',
    category: '',
    price: 0,
  });

  useEffect(() => {
    if (book) {
      setForm(book);
    }
    console.log(book);
  }, [book]);

  const handleInputChange = e => {
    const tempForm = { ...form };
    tempForm[e.target.name] = e.target.value;
    setForm(tempForm);
  };
  const handleSubmit = e => {
    console.log(form);
    dispatch(upsertBook(form));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          name="name"
          label="Book Name"
          fullWidth
          value={form.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Category"
          name="category"
          fullWidth
          value={form.category}
          onChange={handleInputChange}
        />
        <TextField
          label="Price"
          type="number"
          name="price"
          fullWidth
          value={form.price}
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default BookForm;
