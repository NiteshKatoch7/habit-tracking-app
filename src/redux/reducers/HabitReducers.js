import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    habits: JSON.parse(localStorage.getItem('habits')) || []
}

const habitSlice = createSlice({
    name: 'habit',
    initialState,
    reducers: {
        addHabit(state, action) {
            state.habits.push(action.payload);
            localStorage.setItem('habits', JSON.stringify(state.habits));
        },
    }
})

export const { addHabit } = habitSlice.actions;
export const habitReducer = habitSlice.reducer;
export const habitSelector = (state) => state.habitReducer;