// Import necessary functions from libraries
import { createSlice } from "@reduxjs/toolkit"
import { addDays, format } from "date-fns";

// Define the initial state for the habit slice
const initialState = {
    // Retrieve habits from local storage or initialize as an empty array
    habits: JSON.parse(localStorage.getItem('habits')) || [],
    // Initialize existing form data as an empty object
    existingformData: {},
    // Set isUpdating flag to false by default
    isUpdating: false,
}

// Function to update local storage with key-value pair
const updateLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

// Create a habit slice with reducers
const habitSlice = createSlice({
    // Specify the name of the slice
    name: 'habit',
    // Define the initial state for the slice
    initialState,
    // Define reducers to update state
    reducers: {
        // Add a new habit to the state
        addHabit(state, action) {
            const {id, habit} = action.payload;
            // Generate dates for the last 7 days
            const dates = [];
            const today = new Date();
            for (let i = 0; i < 7; i++) {
                const date = addDays(today, -i);
                dates.push({
                    date: format(date, 'dd-MM-yyyy'),
                    status: 3 // Default status
                });
            }
            // Add the new habit to state
            state.habits.push({ id, habit , dates});
            // Update local storage
            updateLocalStorage('habits', state.habits);
        },
        // Update the status of a habit for a specific date
        updateHabitStatus(state, action){
            const {habitId, date, status} = action.payload;
            // Update the status of the habit
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
            // Update state with the modified habits
            state.habits = updatedHabits;
            // Update local storage
            updateLocalStorage('habits', state.habits);
        },
        // Edit the habit name
        editHabit(state, action) {
            const updatingId = action.payload.id;
            const findIndex = state.habits.findIndex((habit) => habit.id === updatingId);
            state.habits[findIndex].habit = action.payload.habit;
            // Update local storage
            updateLocalStorage('habits', state.habits);
        },
        // Delete a habit
        deleteHabit(state, action){
            const deleteId = action.payload;
            // Filter out the habit to be deleted
            const newHabits = state.habits.filter((habit) => habit.id !== deleteId);
            // Update state with the filtered habits
            state.habits = newHabits;
            // Update local storage
            updateLocalStorage('habits', state.habits);
        },
        // Update existing form data
        updateExistingFromData(state, action){
            state.existingformData = action.payload;
        },
        // Toggle the isUpdating flag
        toggleUpdating(state){
            state.isUpdating = !state.isUpdating;
        },
        // Update habits for the current day
        dailyHabitUpdate(state){
            const today = new Date();
            // Generate dates for the last 7 days
            const datesToKeep = [];
            for (let i=0; i < 7; i++) {
                const date = addDays(today, -i);
                datesToKeep.push(format(date, 'dd-MM-yyyy'));
            }
            // Update habits with dates from the last 7 days
            const updatedHabits = state.habits.map((habit) => {
                const updatedDates = habit.dates.filter((dH) => datesToKeep.includes(dH.date));
                const newDates = habit.dates.filter((dH) => !datesToKeep.includes(dH.date));
                habit.dates = updatedDates;
                if (newDates.length > 0){
                    return {
                        ...habit,
                        dates: [
                            {
                                date: format(today, 'dd-MM-yyyy'),
                                status: 3 // Default status
                            },
                            ...updatedDates,
                        ]
                    }
                }else{
                    return habit;
                }
            });
            // Update state with modified habits
            state.habits = updatedHabits;
            // Update local storage
            updateLocalStorage('habits', state.habits);
        }
    }
})

// Export action creators and reducer
export const { addHabit, deleteHabit, updateHabitStatus, editHabit, updateExistingFromData, toggleUpdating, dailyHabitUpdate } = habitSlice.actions;
export const habitReducer = habitSlice.reducer;
export const habitSelector = (state) => state.habitReducer;