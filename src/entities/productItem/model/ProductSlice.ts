import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        toggleLike(state){
            
        }
    }
})

const { actions, reducer } = productSlice

export const { toggleLike } = actions

export default reducer