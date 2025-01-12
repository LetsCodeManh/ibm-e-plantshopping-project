import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/CartsSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
