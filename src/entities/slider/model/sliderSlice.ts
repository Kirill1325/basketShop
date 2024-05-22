import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface sliderSliceState {
    value: number[],
    error: string
}

const initialState: sliderSliceState = {
    value: [0, 1000],
    error: ''
}

export const sliderSlice = createSlice({
    name: 'sliderSlice',
    initialState,
    reducers: {
        setSliderValue(state, action: PayloadAction<number[]>) {
            state.value = action.payload
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload
        }
    }
})

const { actions, reducer } = sliderSlice

export const { setSliderValue, setError } = actions

export default reducer