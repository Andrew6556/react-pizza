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

            if(findItems){
                findItems.count++
            }else{
                state.items.push({...actions.payload, count: 1})
            }
            state.totalPrice += actions.payload.price
        },
        minusProduct(state, actions){
            const findItems = state.items.find(item => item.id === actions.payload)
            if(findItems){
                findItems.count--;
            }
        },
        removeProduct(state, actions){
            state.items = state.items.filter(obj => obj.id !== actions.payload)
        },
        clearProduct(state){
            state.items = []
        }
    },
})

export const {appendProduct, removeProduct, clearProduct, minusProduct} = cartSlice.actions

export default cartSlice.reducer