import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartProducts: [],
  openCart: false,
};

export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    // open or close basket menu
    setOpenCart: (state) => {
      state.openCart = !state.openCart;
    },

    // this is despatch to add product to besket
    addToBasket: (state, action) => {
      state.cartProducts.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartProducts = state.cartProducts.filter(
        (elm) =>
          elm !==
          state.cartProducts.find(
            (item) =>
              item.idProduct === action.payload.idProduct &&
              item.idModel === action.payload.idModel &&
              item.sizeSelect === action.payload.sizeSelect
          )
      );
      toast.success(" Product removed .....");
    },
    increaseCount: (state, action) => {
      state.cartProducts = state.cartProducts.map((item) => {
        if (
          item.idProduct === action.payload.idProduct &&
          item.idModel === action.payload.idModel &&
          item.sizeSelect === action.payload.sizeSelect
        ) {
          if (item.Qt < item.sizeSelectStoke) {
            item.Qt++;
          } else {
            toast.error("no product in stoke ...");
          }
        }
        return item;
      });
    },
    decreaseCount: (state, action) => {
      state.cartProducts = state.cartProducts.map((item) => {
        if (
          item.idProduct === action.payload.idProduct &&
          item.idModel === action.payload.idModel &&
          item.sizeSelect === action.payload.sizeSelect
        ) {
          if (item.Qt > 1) {
            item.Qt--;
          }
        }
        return item;
      });
    },
    resetBasket: (state) => {
      state.cartProducts = [];
    },
  },
});
// Action creators are generated for each case reducer function
export const {
  addToBasket,
  removeItem,
  decreaseCount,
  increaseCount,
  resetBasket,
  setOpenCart,
} = CartSlice.actions;

export default CartSlice.reducer;
