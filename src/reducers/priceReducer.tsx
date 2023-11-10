import { createSlice, PayloadAction } from '@reduxjs/toolkit';





interface PricesState {
  [bookId: string]: number;
}

const initialState: PricesState = {};

const pricesSlice = createSlice({
  name: 'prices',
  initialState,
  reducers: {
    setPrice: (state, action: PayloadAction<{ bookId: string; price: number }>) => {
      const { bookId, price } = action.payload;
      state[bookId] = price;
    },
    clearPrices: (state) => {
        return {};
      },
  },
});

export const { setPrice, clearPrices } = pricesSlice.actions;

export default pricesSlice.reducer;
