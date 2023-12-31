import { createSlice, PayloadAction } from '@reduxjs/toolkit';



interface Book {
  volumeInfo: {
    id: string;
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
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
      addBook: (state, action: PayloadAction<Book>) => {
        state.push(action.payload);
      },
      deleteBook: (state, action: PayloadAction<string>) => {
        return state.filter((book) => book.volumeInfo.id !== action.payload);
      },
    },
  });
  
  
  export const { addBook, deleteBook } = booksSlice.actions;
  
  
  export default booksSlice.reducer;