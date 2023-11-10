import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../reducers/allBookReducer'; 
import basketReducer from '../reducers/sepetReducers'; 
import priceReducer from '../reducers/priceReducer'; 

const store = configureStore({
  reducer: {
    books: booksReducer,
    basket:basketReducer,
    price:priceReducer,
    
    
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
