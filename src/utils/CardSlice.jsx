import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    additem: (state, action) => {
      state.items.push(action.payload);
    },

    removeitem: (state) => {
      state.items.pop();
    },

    clearcart: (state) => {
      state.items.length = 0; // []
    },
  },
});


export const {additem,removeitem,clearcart}=CartSlice.actions;
export default CartSlice.reducer; 