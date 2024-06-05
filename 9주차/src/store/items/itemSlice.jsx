import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../../constants/cartItems';

let itemsSlice = createSlice({
  name: 'items',
  initialState: [[...cartItems], [0, 0]],
  reducers: {
    increase(state, a) {
      state[0][a.payload].amount++;
    },
    decrease(state, a) {
      state[0][a.payload].amount--;
      if (state[0][a.payload].amount === 0) state[0].splice(a.payload, 1);
    },
    clearCart(state) {
      state[0] = [];
      return state;
    },
    calculateTotals(state) {
      let sum = 0;
      let cnt = 0;
      for (let i = 0; i < state[0].length; i++) {
        sum += Number(state[0][i].price) * state[0][i].amount;
        cnt += state[0][i].amount;
      }
      state[1][0] = sum;
      state[1][1] = cnt;
      console.log(sum);
    },
  },
});

export const { increase, decrease, clearCart, calculateTotals } =
  itemsSlice.actions;
export default itemsSlice.reducer;
