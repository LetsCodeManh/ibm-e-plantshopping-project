import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [] as {
      name: string;
      image: string;
      cost: number;
      quantity: number;
    }[],
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.name === action.payload.name
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addItem, removeItem, incrementQuantity, decrementQuantity } =
  CartSlice.actions;

export default CartSlice.reducer;
