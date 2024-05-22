import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface filterByBrandNameSliceState {
    brandnameSortValue: Record<string, boolean>
}

const initialState: filterByBrandNameSliceState = {
    brandnameSortValue: {}
}

export const filterByBrandNameSlice = createSlice({
    name: 'sliderSlice',
    initialState,
    reducers: {
        toggleBrandnameFilterValue(state, action: PayloadAction<string>) {
            // console.log(action.payload)
            if (state.brandnameSortValue[action.payload]) {
                state.brandnameSortValue[action.payload] = false
            } else {
                state.brandnameSortValue[action.payload] = true
            }
        },

    }
})

const { actions, reducer } = filterByBrandNameSlice

export const { toggleBrandnameFilterValue } = actions

export default reducer