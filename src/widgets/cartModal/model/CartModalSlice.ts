import { createSlice } from "@reduxjs/toolkit";

type cartModalSliceState = {
    isOpened: boolean
}

const initialState: cartModalSliceState = {
    isOpened: false
}

export const cartModalSlice = createSlice({
    name: 'cartModalSlice',
    initialState,
    reducers: {
        toggleModal(state) {
            state.isOpened = !state.isOpened
        }
    }
})

const { actions, reducer } = cartModalSlice

export const { toggleModal } = actions

export default reducer