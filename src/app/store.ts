import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { productApi } from '../entities/productItem'
import wishlistSlice from '../features/addToWishlist/model/WishlistSlice'
import storage from 'redux-persist/lib/storage'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import cartModalSlice from '../widgets/cartModal/model/CartModalSlice'
import cartSlice from '../features/addToCart/model/cartSlice'
import sliderSlice from '../entities/slider/model/sliderSlice'
import filterByBrandNameSlice from '../features/filterByBrandname/model/filterByBrandnameSlice'
import filterBySizeSlice from '../features/filterBySize/model/filterBySizeSlice'
import searchSlice from '../features/search/model/searchSlice'
import mobileFilterBarSlice from '../widgets/mobileFilterBar/model/mobileFilterBarSlice'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [productApi.reducerPath]
}

const rootReducer = combineReducers({
    [productApi.reducerPath]: productApi.reducer,
    wishlistSlice,
    cartModalSlice,
    cartSlice,
    sliderSlice,
    filterByBrandNameSlice,
    filterBySizeSlice,
    searchSlice,
    mobileFilterBarSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            },
        }).concat(productApi.middleware),
})


export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>() // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store