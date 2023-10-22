import { configureStore } from '@reduxjs/toolkit'
import filterReducer from '../redux/slices/filterSlice'
// создали хранилище редакса

export const store = configureStore({
    reducer: { 
        filter: filterReducer 
    },
})