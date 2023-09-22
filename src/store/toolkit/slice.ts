import { createSlice } from "@reduxjs/toolkit"
import { Decrement, Increment } from "./middleware"
import { APIResponse } from "./interface"

const initialState = {
    loading:false,
    value: 0,
}
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {},
    extraReducers: ((builder) => {
        builder
            .addCase(Increment.pending, (state) => {
                state.loading = true 
            })
            .addCase(Increment.fulfilled, (state, action) => {
                state.value += action.payload.value
                state.loading = false
            })
            .addCase(Increment.rejected, (state, action) => {
                console.log(action.error.message)
                state.loading = false
            })

            .addCase(Decrement.pending, (state) => {
                state.loading = true 
            })
            .addCase(Decrement.fulfilled, (state, action) => {
                state.value -= action.payload.value
                state.loading = false
            })
            .addCase(Decrement.rejected, (state, action) => {
                console.log(action.error.message)
                state.loading = false
            })

    })
})


export default {
    counterSliceReducer: counterSlice.reducer
}

