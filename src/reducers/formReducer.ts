import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Form {
  email: string;
  cardNumber: number;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
  AdressHolderName: string;
}

interface FormState {
  data: Form | null;
}

const initialState: FormState = {
  data: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<Form>) => {
      state.data = action.payload;
    },
    clearFormData: (state) => {
      state.data = null;
    },
  },
});

export const { setFormData, clearFormData } = formSlice.actions;

export default formSlice.reducer;
