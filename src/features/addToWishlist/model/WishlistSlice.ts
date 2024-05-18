import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type WishlistSliceState = {
    productInWishlistState: Record<number, boolean>,
    count: number
}

const initialState: WishlistSliceState = {
    productInWishlistState: {},
    count: 0
}

export const wishlistSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        toggleWishlist(state, action: PayloadAction<number>) {
            if (state.productInWishlistState[action.payload]) {
                state.productInWishlistState[action.payload] = false
                state.count -= 1
            } else {
                state.productInWishlistState[action.payload] = true
                state.count += 1
            }
        }
    }
})

const { actions, reducer } = wishlistSlice

export const { toggleWishlist } = actions

export default reducer