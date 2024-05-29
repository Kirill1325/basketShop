import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface sliderSliceState {
    priceValue: number | number[],
}

const initialState: sliderSliceState = {
    priceValue: [0, 1000],
}

export const sliderSlice = createSlice({
    name: 'sliderSlice',
    initialState,
    reducers: {
        setSliderPriceValue(state, action: PayloadAction<number | number[]>) {
            state.priceValue = action.payload
        },

    }
})

const { actions, reducer } = sliderSlice

export const { setSliderPriceValue } = actions

export default reducer