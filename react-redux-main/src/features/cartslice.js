import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
      state.cartTotal = 0;
    },
    addToCart: (state, action) => {
      const productData = action.payload;
      const productInCartIndex = state.cart.findIndex(
        (ci) => ci.product._id === productData.product._id
      );

      if (productInCartIndex < 0) {
        state.cart.push(action.payload);
        state.cartTotal = state.cart.reduce((accumulator, object) => {
          return parseFloat(accumulator) + parseFloat(object.product.prix * object.qty);
        }, 0);
      }
    },
    minusCart: (state, action) => {
      const productData = action.payload;
      const productInCartIndex = state.cart.findIndex(
        (ci) => ci.product._id === productData.product._id
      );

      if (productInCartIndex >= 0) {
        state.cart[productInCartIndex].qty--;
      }

      state.cartTotal = state.cart.reduce((accumulator, object) => {
        return parseFloat(accumulator) + parseFloat(object.product.prix * object.qty);
      }, 0);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((obj) => obj.product._id !== action.payload.product._id);

      state.cartTotal = state.cart.reduce((accumulator, object) => {
        return parseFloat(accumulator) + parseFloat(object.product.prix * object.qty);
      }, 0);
    },
    plusCart: (state, action) => {
      const productData = action.payload;
      const productInCartIndex = state.cart.findIndex(
        (ci) => ci.product._id === productData.product._id
      );

      if (productInCartIndex >= 0) {
        state.cart[productInCartIndex].qty++;
      }

      state.cartTotal = state.cart.reduce((accumulator, object) => {
        return parseFloat(accumulator) + parseFloat(object.product.prix * object.qty);
      }, 0);
    },
  },
});

export const { clearCart, addToCart, minusCart, removeFromCart, plusCart } = cartSlice.actions;
export default cartSlice.reducer;
