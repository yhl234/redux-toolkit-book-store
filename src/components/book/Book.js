import React from 'react';
import {
  Card,
  Box,
  CardContent,
  CardActions,
  Typography,
  CardMedia,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  box: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
    background: '#eee',
    opacity: 0,
    transition: '0.5s',
    '	&:hover': {
      opacity: 0.7,
    },
  },
  media: {
    height: 300,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const Book = ({
  _id = null,
  name,
  category,
  price,
  handleDelete,
  image,
  handleOpen,
}) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" raised className={classes.root}>
      {_id && (
        <Box className={classes.box}>
          <Button
            onClick={() => handleOpen(_id)}
            variant="outlined"
            color="primary"
          >
            Edit
          </Button>
        </Box>
      )}
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
      {_id && (
        <CardActions className={classes.cardFooter}>
          <Button
            onClick={e => handleDelete(e, _id)}
            variant="outlined"
            color="secondary"
          >
            delete
          </Button>
          <Button component={Link} to={`/book/${_id}`} variant="outlined">
            details
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default Book;
