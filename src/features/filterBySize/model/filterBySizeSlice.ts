import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type filterBySizeSliceState = {
    sizeSortValue: Record<string, boolean>,
}

const initialState: filterBySizeSliceState = {
    sizeSortValue: {},
}

export const filterBySizeSlice = createSlice({
    name: 'filterBySizeSlice',
    initialState,
    reducers: {
        toggleSizeFilterValue(state, action: PayloadAction<string>) {
            if (state.sizeSortValue[action.payload]) {
                state.sizeSortValue[action.payload] = false
            } else {
                state.sizeSortValue[action.payload] = true
            }
        }
    }
})

const { actions, reducer } = filterBySizeSlice

export const { toggleSizeFilterValue } = actions

export default reducer