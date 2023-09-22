import { createAsyncThunk } from "@reduxjs/toolkit"
import { Alert } from "react-native"
import { APIResponse, APIPayload } from "./interface"

export const Increment = createAsyncThunk<APIResponse, APIPayload>(
    'INCREMENT',
    async (payload, { rejectWithValue }) => {
        try {
            // Call API here
            if (true) {
                //if API success
                return payload
            }
            else {
                //if API failed
                Alert.alert("API error")
                return rejectWithValue(null) // this will fire rejected action type in reducer
            }
        }
        catch (err: any) {
            // any error in try block
            console.log(err.message)
            // Use `err.response.data` as `action.payload` for a `rejected` action,
            throw err
        }
    }
)

export const Decrement = createAsyncThunk<APIResponse, APIPayload>(
    'DECREMENT',
    async (payload, { rejectWithValue }) => {
        try {
            if (true) {
                return payload
            }
            else {
                Alert.alert("API error")
                return rejectWithValue(null)
            }
        }
        catch (err: any) {
            console.log(err.message)
            throw err
        }
    }
)