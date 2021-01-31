import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const booksAdapter = createEntityAdapter({
  selectId: book => book._id,
  sortComparer: (a, b) => a.name - b.name,
});
export const {
  selectAll: selectAllBooks,
  selectById: selectBookById,
} = booksAdapter.getSelectors(status => status.books);

export const booksSlice = createSlice({
  name: 'books',
  initialState: booksAdapter.getInitialState(),
  reducers: {
    addBook: {
      reducer: booksAdapter.addOne,
      prepare: (name, category, price, image = null) => ({
        payload: {
          _id: uuidv4(),
          name,
          category,
          price,
          image: image || new Date().getSeconds(),
        },
      }),
    },
    deleteBook: booksAdapter.removeOne,
    updateBook: booksAdapter.upsertOne,
    upsertBook: {
      reducer: booksAdapter.upsertOne,
      prepare: entity => {
        const {
          _id = uuidv4(),
          name,
          category,
          price,
          image = new Date().getSeconds(),
        } = entity;
        return {
          payload: {
            _id,
            name: name.length > 0 ? name : 'untitled',
            category: category.length > 0 ? category : 'uncategorized',
            price: price > 0 ? price : 'unavailable',
            image,
          },
        };
      },
    },
  },
});
export const {
  addBook,
  deleteBook,
  updateBook,
  upsertBook,
} = booksSlice.actions;

export default booksSlice.reducer;
