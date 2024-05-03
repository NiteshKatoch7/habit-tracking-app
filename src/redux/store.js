import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { habitReducer } from './reducers/HabitReducers'
import { modalReducer } from './reducers/ModalReducers'

// Combining all our reducers
const rootReducer = combineReducers({
    habitReducer,
    modalReducer
})

// Intiating the store
export const store = configureStore({
    reducer: rootReducer,
})