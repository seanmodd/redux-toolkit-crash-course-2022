import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.count += 1;
    },
    decrement(state, action) {
      state.count -= 1;
    },
    incrementBy(state, action) {
      state.count += action.payload;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
  },
});
export const { increment, decrement, incrementBy, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
