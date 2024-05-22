import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type cartSliceState = {
    productInCartState: Record<number, number[]>,
    chosenSize: string
}

const initialState: cartSliceState = {
    productInCartState: {},
    chosenSize: '',
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        setChosenSize(state, action: PayloadAction<string>) {
            // console.log(action.payload)
            state.chosenSize = action.payload
        },
       
    }
})

const { actions, reducer } = cartSlice

export const { setChosenSize } = actions

export default reducer