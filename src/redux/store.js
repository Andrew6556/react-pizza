import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../redux/slices/filterSlice'
import cartSlice from './slices/cartSlice'
import pizzaSlice from "./slices/pizzaSlice"
// создали хранилище редакса

export const store = configureStore({
    reducer: { 
        filter: filterReducer,
        cart:cartSlice,
        pizza:pizzaSlice,
    },
})