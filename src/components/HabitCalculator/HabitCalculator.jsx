import React from 'react'
import { CalculatorWrapper, HabitWrapper } from './HabitCalculatorStyle';
import { FaCheck, FaMinus, FaTimes } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { habitSelector, updateHabitStatus } from '../../redux/reducers/HabitReducers';

// Habit calculator Component
export default function HabitCalculator() {
  // Extracting the habit id, from the url.
  const { habitId } = useParams();
  // Accessing redux store states and using useDispatch to dispatch actions to our redux.
  const { habits } = useSelector(habitSelector);
  const selectedHabit = habits.find((habit) => habit.id === habitId);
  const dispatch = useDispatch();
  
  return (
    <HabitWrapper>
      {
        // If habit is selected, then Calculator Wrapper will be shown, otherwise content element with a message
        !selectedHabit ? 
        <div className="content">
            <p>Select Habit to View the Habit Calculation.</p>
        </div> :

        <CalculatorWrapper>
          {
            // Mapping through the selectedHabit dates array to show all the dates with their status inside the Habit Calculator Component
            selectedHabit.dates.map((day) => (
              <div className="card">
                <div className="card-header justify-content-center">
                  <p>{day.date}</p>
                </div>
                <div className="card-body">
                  {/* On Clicking the status icons we dispatch the updateHabitStatus action to our reducers with habitID, 
                      date for which we need the status change and 
                      the clicked status, so to update it accordingly */}
                  <div className={day.status === 1 ? 'icon icon-danger active' : 'icon icon-danger'} onClick={() => dispatch(updateHabitStatus({habitId: selectedHabit.id, date: day.date, status: 1}))}> 
                    <FaTimes />
                  </div>
                  <div className={day.status === 2 ? 'icon icon-success active' : 'icon icon-success'} onClick={() => dispatch(updateHabitStatus({habitId: selectedHabit.id, date: day.date, status: 2}))}> 
                    <FaCheck />
                  </div>
                  <div className={day.status === 3 ? 'icon icon-set active' : 'icon icon-set'} onClick={() => dispatch(updateHabitStatus({habitId: selectedHabit.id, date: day.date, status: 3}))}> 
                    <FaMinus />
                  </div>
                </div>
              </div>
            ))
          }
        </CalculatorWrapper>
      }
    </HabitWrapper>
  )
}