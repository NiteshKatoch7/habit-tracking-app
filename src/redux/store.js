import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { habitReducer } from './reducers/HabitReducers'
import { modalReducer } from './reducers/ModalReducers'

const rootReducer = combineReducers({
    habitReducer,
    modalReducer
})

export const store = configureStore({
    reducer: rootReducer,
})