import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface Book {
    id:number;
    name:string;
    yazar:string;
    sayfaSayısı:number;
    fiyat:number;
}

const initialState: Book[] = [];

// Create a books slice using createSlice
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      addBook: (state, action: PayloadAction<Book>) => {
        state.push(action.payload);
      },
      deleteBook: (state, action: PayloadAction<number>) => {
        return state.filter((book) => book.id !== action.payload);
      },
    },
  });
  
  
  export const { addBook, deleteBook } = booksSlice.actions;
  
  
  export default booksSlice.reducer;