import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import { upsertBook, selectBookById } from './booksSlice';

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
    name: 'Sample Book',
    category: 'eBook',
    price: 2.99,
  });

  useEffect(() => {
    if (book) {
      setForm(book);
    }
    console.log(book);
  }, [book]);

  const handleInputChange = e => {
    const tempForm = { ...form };
    const { name, type } = e.target;
    let { value } = e.target;
    if (type === 'number') {
      value = Number(String(value).replace(/[^0-9.-]+/g, ''));
    }
    tempForm[name] = value;
    setForm(tempForm);
  };
  const handleSubmit = e => {
    dispatch(upsertBook(form));
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{form._id !== 'new' ? form.name : 'New Book'}</DialogTitle>
      <DialogContent>
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
          min="0.00"
          max="10000.00"
          step="0.01"
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
