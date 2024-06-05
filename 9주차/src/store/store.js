import { configureStore } from '@reduxjs/toolkit';
import itemSlice from './items/itemSlice';
import modalSlice from './modal/modalSlice';
export default configureStore({
  reducer: {
    item: itemSlice,
    modal: modalSlice,
  },
});
