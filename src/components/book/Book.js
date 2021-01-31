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
    borderRadius: 50,
  },
  media: {
    height: 300,
  },
});

const Book = ({
  _id,
  name,
  category,
  price,
  handleDelete,
  image,
  handleOpen,
}) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" raised onClick={() => handleOpen(_id)}>
      <CardMedia
        className={classes.media}
        image={`https://picsum.photos/300/200?random=${image}`}
        title="Random image"
      />
      <CardContent>
        <Typography variant="h5">{name}</Typography>
        <Typography variant="caption">{category}</Typography>
        <Typography variant="body2" color="textSecondary">
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <button onClick={e => handleDelete(e, _id)}>delete</button>
        <button>details</button>
      </CardActions>
    </Card>
  );
};

export default Book;
