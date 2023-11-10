import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface Book {
  id: string; 
  volumeInfo: {
    title: string;
    authors: string[];
    pageCount: number;
    imageLinks: {
      thumbnail: string;
    };
  };
  saleInfo: {
    listPrice: {
      amount: string;
    } | null;
  };
}


const initialState: Book[] = [];

// Create a books slice using createSlice
const sepetSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
      addBasket: (state, action: PayloadAction<Book>) => {
        state.push(action.payload);
      },
      deleteBasket: (state, action: PayloadAction<string>) => {
        return state.filter((book) => book.id !== action.payload);
      },
    },
  });
  
  
  export const { addBasket, deleteBasket } = sepetSlice.actions;
  
  
  export default sepetSlice.reducer;