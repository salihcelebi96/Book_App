import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../reducers/allBookReducer'; 

const store = configureStore({
  reducer: {
    books: booksReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
