import { createSlice } from '@reduxjs/toolkit';

let modalSlice = createSlice({
  name: 'modal',
  initialState: 0,
  reducers: {
    showModal(state) {
      return 1;
    },
    unshowModal(state) {
      return 0;
    },
  },
});

export default modalSlice.reducer;
export const { showModal, unshowModal } = modalSlice.actions;
