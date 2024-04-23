import { configureStore } from '@reduxjs/toolkit'
import { habitReducer } from './reducers/HabitReducers'


export const store = configureStore({
    reducer: habitReducer,
})