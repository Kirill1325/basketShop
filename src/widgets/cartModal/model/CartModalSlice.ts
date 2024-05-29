import { createSlice } from "@reduxjs/toolkit";

type cartModalSliceState = {
    isCartModalOpened: boolean
}

const initialState: cartModalSliceState = {
    isCartModalOpened: false
}

export const cartModalSlice = createSlice({
    name: 'cartModalSlice',
    initialState,
    reducers: {
        toggleCartModal(state) {
            state.isCartModalOpened = !state.isCartModalOpened
        }
    }
})

const { actions, reducer } = cartModalSlice

export const { toggleCartModal } = actions

export default reducer