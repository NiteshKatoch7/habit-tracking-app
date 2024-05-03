import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    modalIsOpen: false
}

const modalSlice = createSlice({
    name: 'modalPopup',
    initialState,
    reducers: {
        toggleModal(state){
            state.modalIsOpen = !state.modalIsOpen
        }
    }
})

export const { toggleModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
export const modalIsOpenSelector = (state) => state.modalReducer;