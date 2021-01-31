import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

import { Grid, Typography, Paper, Button } from '@material-ui/core';
import { ArrowBackIos } from '@material-ui/icons/';
import { selectBookById } from '../books/booksSlice';
import BookComponent from '../../components/book/Book';

const useStyles = makeStyles({
  root: {
    minHeight: '100vh',
    padding: '3rem',
    margin: '0 auto',
  },
});
const Book = () => {
  const classes = useStyles();

  const { _id } = useParams();
  const book = useSelector(state => selectBookById(state, _id));
  const { name, category, price, image } = book;
  return (
    <Paper className={classes.root}>
      <Grid container xs={12} justify="flex-start">
        <Button component={Link} to="/books/">
          <ArrowBackIos />
          <Typography>Back</Typography>
        </Button>
      </Grid>
      <BookComponent
        name={name}
        category={category}
        price={price}
        image={image}
      />
    </Paper>
  );
};

export default Book;
