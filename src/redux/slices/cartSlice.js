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
            const findItems = state.items.find(item => item.id === actions.payload.id)
                
            findItems ? findItems.count++ : state.items.push({...actions.payload, count: 1})
            state.totalPrice += actions.payload.price
        },
        minusProduct(state, actions){
            state.items.find(item => item.id === actions.payload.id).count--
            state.totalPrice -= actions.payload.price
        },
        removeProduct(state, actions){
            state.items = state.items.filter(obj => obj.id !== actions.payload.id)
            state.totalPrice -= (actions.payload.price * actions.payload.count)
        },
        clearProduct(state){
            state.items = []
            state.totalPrice = 0
        }
    },
})

export const {appendProduct, removeProduct, clearProduct, minusProduct} = cartSlice.actions

export default cartSlice.reducer