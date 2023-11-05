import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../reducers/allBookReducer'; 
import basketReducer from '../reducers/sepetReducers'; 

const store = configureStore({
  reducer: {
    books: booksReducer,
    basket:basketReducer,
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
