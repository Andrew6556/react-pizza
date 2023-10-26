import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    currentPage: 1,
    sort:{
        name:"популярности",
        typeSort:"rating"
    }
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId(state, action){
            state.categoryId = action.payload
        },
        setSortType(state, action){
            state.sort = action.payload
        },
        setCountPage(state, action){
            state.currentPage = action.payload
        }
    },
})

export const { setCategoryId, setSortType , setCountPage } = filterSlice.actions

export default filterSlice.reducer