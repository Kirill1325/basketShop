import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type cartSliceState = {
    productInCartState: Record<number, number[]>,
    chosenSize: number | null
}

const initialState: cartSliceState = {
    productInCartState: {},
    chosenSize: null,
}

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState,
    reducers: {
        setChosenSize(state, action: PayloadAction<number | null>) {
            // console.log(action.payload)
            state.chosenSize = action.payload
        },
        toggleCart(state, action: PayloadAction<number[]>){
            // if (state.productInCartState[action.payload]) {
            //     state.productInCartState[action.payload] = false
            // } else {
            //     state.productInCartState[action.payload] = true
            // }
        }
    }
})

const { actions, reducer } = cartSlice

export const { setChosenSize } = actions

export default reducer