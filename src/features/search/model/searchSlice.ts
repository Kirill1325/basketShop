import { PayloadAction, createSlice, current } from "@reduxjs/toolkit";

interface searchSliceState {
    searchValue: string
}

const initialState: searchSliceState = {
    searchValue: ''
}

export const searchSlice = createSlice({
    name: 'searchSlice',
    initialState,
    reducers: {
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload
            console.log(current(state))
        },

    }
})

const { actions, reducer } = searchSlice

export const { setSearchValue } = actions

export default reducer