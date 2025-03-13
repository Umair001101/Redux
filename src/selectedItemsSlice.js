import { createSlice } from '@reduxjs/toolkit';
export const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState: [],
  reducers: {
    addItem: (state, action) => [...state, action.payload],
  },
});
export const { addItem } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;