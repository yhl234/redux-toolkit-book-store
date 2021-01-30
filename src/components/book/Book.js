import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 300,
  },
});

const Book = ({ _id, name, category, price, handleDelete, index }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined">
      <CardMedia
        className={classes.media}
        image={`https://picsum.photos/300/200?random=${index}`}
        title="Random image"
      />
      <CardContent>
        <Typography variant="body2">{name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {category}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        <button onClick={() => handleDelete()}>delete</button>
        <button onClick={() => handleDelete()}>update</button>
      </CardActions>
    </Card>
  );
};

export default Book;
