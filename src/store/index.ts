import { configureStore } from "@reduxjs/toolkit"
import reducer from "./reducer"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"

const Store = configureStore({
  reducer
})

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof Store.getState>
type AppDispatch = typeof Store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default Store