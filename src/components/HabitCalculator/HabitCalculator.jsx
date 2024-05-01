import React from 'react'
import { CalculatorWrapper, HabitWrapper } from './HabitCalculatorStyle';
import { FaCheck, FaCross, FaMinus, FaTimes } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { habitSelector, updateHabitStatus } from '../../redux/reducers/HabitReducers';

export default function HabitCalculator() {
  const { habitId } = useParams();
  const { habits } = useSelector(habitSelector);
  const selectedHabit = habits.find((habit) => habit.id === habitId);
  const dispatch = useDispatch();
  
  return (
    <HabitWrapper>
      {
        !selectedHabit ? 
        <div className="content">
            <p>Select Habit to View the Habit Calculation.</p>
        </div> :

        <CalculatorWrapper>
          {
            selectedHabit.dates.map((day) => (
              <div className="card">
                <div className="card-header justify-content-center">
                  <p>{day.date}</p>
                </div>
                <div className="card-body">
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