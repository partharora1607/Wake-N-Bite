import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/slices/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
