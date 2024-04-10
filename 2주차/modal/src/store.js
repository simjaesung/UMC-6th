import { configureStore, createSlice } from '@reduxjs/toolkit'

let modal = createSlice({
    name : 'modal',
    initialState : 0,
    reducers : {
        openModal(state){
            return 1;
        },
        closeModal(state){
            return 0;
        }
    }
})

export default configureStore({
  reducer: {
    modal : modal.reducer
   }
}) 

export let {openModal, closeModal} = modal.actions;