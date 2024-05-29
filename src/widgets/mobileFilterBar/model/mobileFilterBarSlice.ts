import { createSlice } from "@reduxjs/toolkit";

type mobileFilterBarSliceState = {
    isMobileFilterBarOpened: boolean
}

const initialState: mobileFilterBarSliceState = {
    isMobileFilterBarOpened: false
}

export const mobileFilterBarSlice = createSlice({
    name: 'cartModalSlice',
    initialState,
    reducers: {
        toggleMobileFilterBarModal(state) {
            state.isMobileFilterBarOpened = !state.isMobileFilterBarOpened
        }
    }
})

const { actions, reducer } = mobileFilterBarSlice

export const { toggleMobileFilterBarModal } = actions

export default reducer