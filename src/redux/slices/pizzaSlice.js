import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
    items:[],
    status:"loading",
}
export const pizzaFetch = createAsyncThunk(
    'pizza/fetchPizzaStatus',
    async (url) => {
        const dataPizzas = await (await axios.get(url)).data
        return dataPizzas
    }
)

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action){
            state.items = action.payload
        }
    },
    extraReducers: {
        [pizzaFetch.fulfilled]: (state, action) => {
            state.items = action.payload
            state.status = "success"
        },
        [pizzaFetch.pending]: (state) => {
            state.status = "loading"
            state.items = []
        },
        [pizzaFetch.rejected]: (state) => {
            state.status = "error"
            state.items = []
        }
    },
})

export const {setItems} = pizzaSlice.actions

export default pizzaSlice.reducer