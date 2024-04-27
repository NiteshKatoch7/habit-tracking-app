import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    habits: JSON.parse(localStorage.getItem('habits')) || [],
    existingformData: {},
    isUpdating: false,
}

const habitSlice = createSlice({
    name: 'habit',
    initialState,
    reducers: {
        addHabit(state, action) {
            state.habits.push(action.payload);
            localStorage.setItem('habits', JSON.stringify(state.habits));
        },
        editHabit(state, action) {
            const updatingId = action.payload.id;
            const findIndex = state.habits.findIndex((habit) => habit.id === updatingId);
            state.habits[findIndex] = action.payload;
            localStorage.setItem('habits', JSON.stringify(state.habits));
        },
        deleteHabit(state, action){
            const deleteId = action.payload;
            const newHabits = state.habits.filter((habit) => habit.id !== deleteId);
            state.habits = newHabits;
            localStorage.setItem('habits', JSON.stringify(state.habits));
        },
        updateExistingFromData(state, action){
            state.existingformData = action.payload;
        },
        toggleUpdating(state){
            state.isUpdating = !state.isUpdating;
        }
    }
})

export const { addHabit, deleteHabit, editHabit, updateExistingFromData, toggleUpdating } = habitSlice.actions;
export const habitReducer = habitSlice.reducer;
export const habitSelector = (state) => state.habitReducer;