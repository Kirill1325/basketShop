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

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    [productApi.reducerPath]: productApi.reducer,
    wishlistSlice
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