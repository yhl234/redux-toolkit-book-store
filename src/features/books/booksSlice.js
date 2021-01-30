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
      prepare: (name, category, price) => ({
        payload: {
          _id: uuidv4(),
          name,
          category,
          price,
        },
      }),
    },
    deleteBook: booksAdapter.removeOne,
    updateBook: booksAdapter.updateOne,
  },
});
export const { addBook, deleteBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
