import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: "",
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        change: (state, getValue) => {
            state.value = getValue.payload
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
})

export const { change, decrement, incrementByAmount } = filterSlice.actions

export default filterSlice.reducer