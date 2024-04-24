import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    habits: []
}

const habitSlice = createSlice({
    name: 'habit',
    initialState,
    reducers: {
        addHabit(state) {

        },
    }
})

export const { addHabit } = habitSlice.actions;
export const habitReducer = habitSlice.reducer;
export const habitSelector = (state) => state.habitSlice.habits;