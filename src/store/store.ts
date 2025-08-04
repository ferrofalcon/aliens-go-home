import { configureStore } from "@reduxjs/toolkit"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux"
import counterReducer from "./slices/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
