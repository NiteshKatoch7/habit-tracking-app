import { createSlice } from "@reduxjs/toolkit"
import { addDays, format } from "date-fns";

const initialState = {
    habits: JSON.parse(localStorage.getItem('habits')) || [],
    existingformData: {},
    isUpdating: false,
}

const updateLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  };

const habitSlice = createSlice({
    name: 'habit',
    initialState,
    reducers: {
        addHabit(state, action) {
            const {id, habit} = action.payload;
            const dates = [];
            const today = new Date();
            for (let i = 0; i < 7; i++) {
                const date = addDays(today, -i);
                dates.push({
                    date: format(date, 'dd-MM-yyyy'),
                    status: 3
                });
            }
            state.habits.push({ id, habit , dates});
            updateLocalStorage('habits', state.habits);
        },
        updateHabitStatus(state, action){
            const {habitId, date, status} = action.payload;
            
            const updatedHabits = state.habits.map((habit) => {
                if(habit.id === habitId){
                    habit.dates = habit.dates.map((dH) => {
                        if(dH.date === date){
                           return {
                            ...dH,
                            status: status,
                           }; 
                        }

                        return dH;
                    })
                }

                return habit;
            })
            
            state.habits = updatedHabits;
            updateLocalStorage('habits', state.habits);

        },
        editHabit(state, action) {
            const updatingId = action.payload.id;
            const findIndex = state.habits.findIndex((habit) => habit.id === updatingId);
            state.habits[findIndex].habit = action.payload.habit;
            updateLocalStorage('habits', state.habits);
        },
        deleteHabit(state, action){
            const deleteId = action.payload;
            const newHabits = state.habits.filter((habit) => habit.id !== deleteId);
            state.habits = newHabits;
            updateLocalStorage('habits', state.habits);
        },
        updateExistingFromData(state, action){
            state.existingformData = action.payload;
        },
        toggleUpdating(state){
            state.isUpdating = !state.isUpdating;
        }
    }
})

export const { addHabit, deleteHabit, updateHabitStatus, editHabit, updateExistingFromData, toggleUpdating } = habitSlice.actions;
export const habitReducer = habitSlice.reducer;
export const habitSelector = (state) => state.habitReducer;