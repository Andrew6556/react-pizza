import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice:0,
    items:[],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        appendProduct(state, actions){
            state.items.push(actions.payload)
            state.totalPrice += actions.payload.price
        },
        removeProduct(state, actions){
            state.items = state.items.filter(obj => obj.id !== actions.payload)
        },
        clearProduct(state){
            state.items = []
        }
    },
})

export const {appendProduct, removeProduct, clearProduct} = cartSlice.actions

export default cartSlice.reducer