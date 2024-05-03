### Habit Tracking App

#### Live Demo
Check out the live demo of the Habit Tracking App [here](https://habitrick.netlify.app/).

#### Overview
This Habit Tracking App allows users to add and track multiple habits on a daily basis. Users can mark each habit as done, not done, or none for each day. The app provides views to display all current habits and track their status over the past seven days.

#### Features
1. **Add and Track Habits**: Users can add multiple habits to track, such as reading a book, going to the gym, etc.
2. **Track Daily Habits**: Each habit can be tracked daily with three statuses: Done, Not Done, or None.
3. **View Current Habits**: A view displays all current habits, allowing users to add new habits to track.
4. **Track 7-Day History**: Users can view a 7-day history of each habit, including today's status and the status of the previous six days.
5. **Toggle Habit Status**: Users can toggle between the three statuses (Done, Not Done, None) for both today and previous days.
6. **Responsive Design**: The app is designed to be responsive and works seamlessly across different devices.

### Running the Habit Tracking App Locally

To run the Habit Tracking App locally on your machine, follow these steps:

#### Prerequisites
Before you begin, ensure you have the following installed on your machine:
- Node.js (version 12 or higher)
- npm (Node Package Manager) or yarn

#### Installation
1. Clone the repository to your local machine using Git:
2. Navigate to the project directory:
3. Install project dependencies using npm or yarn:

#### Usage
Open your web browser and navigate to the specified URL (`http://localhost:3000/`) to access the Habit Tracking App. You can now add habits, track their status, and explore the app's features locally on your machine.

#### Technologies Used
- React
- React Router DOM
- Redux Toolkit
- Formik
- Styled Components
- Bootstrap
- Date-fns
- React Icons

### Habit Reducer Explanation

The Habit Reducer is a crucial part of the Habit Tracking App, responsible for managing the application state related to habits. It utilizes the `createSlice` function from the `@reduxjs/toolkit` library to define a slice of the Redux store, including initial state and reducers to update the state.

#### Initial State
The initial state of the habit slice includes three main properties:
- `habits`: An array containing habit objects, retrieved from local storage or initialized as an empty array if no habits are stored locally.
- `existingformData`: An empty object used to store existing form data.
- `isUpdating`: A boolean flag initialized to `false`, indicating whether the app is in the process of updating.

#### Reducers
The reducers defined within the habit slice handle various actions to update the state. Here's a brief explanation of each reducer:
1. `addHabit`: Adds a new habit to the state along with dates for the last 7 days, updating both state and local storage.
2. `updateHabitStatus`: Updates the status of a habit for a specific date, modifying both state and local storage.
3. `editHabit`: Edits the name of a habit, updating the corresponding habit object in the state and local storage.
4. `deleteHabit`: Deletes a habit from the state and local storage based on its ID.
5. `updateExistingFromData`: Updates the existing form data in the state.
6. `toggleUpdating`: Toggles the `isUpdating` flag between `true` and `false`.
7. `dailyHabitUpdate`: Updates habits for the current day, maintaining a history of the last 7 days for each habit.

#### Exported Functions
The habit slice exports action creators (`addHabit`, `deleteHabit`, etc.) and the habit reducer function (`habitReducer`) for use in other parts of the application. Additionally, `habitSelector` is exported as a selector function to access the habit state from the Redux store.

This reducer plays a central role in managing habit-related state and actions within the Habit Tracking App, ensuring data consistency and integrity across the application.

#### Deployment
The app is deployed on Netlify.

#### Installation
To run the app locally, clone the repository and install dependencies using npm or yarn:

#### Usage
Once the app is running, navigate to the specified URL (default is `http://localhost:3000/`) to access the Habit Tracking App. Add habits, track their status, and view the history to stay organized and accountable.

#### Author
Nitesh Katoch