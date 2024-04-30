import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteHabit, editHabit, habitSelector, toggleUpdating, updateExistingFromData } from '../../redux/reducers/HabitReducers';
import { ListComponent, ListItem } from './HabitListStyle';
import { FaPen, FaTrash } from 'react-icons/fa';
import { toggleModal } from '../../redux/reducers/ModalReducers';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

export default function HabitList() {
  const { habits, isUpdating } = useSelector(habitSelector);

  const dispatch = useDispatch();
  const { habitId } = useParams();
  const navigate = useNavigate();

  const handleEditHabit = (habit) => {
    dispatch(updateExistingFromData(habit));
    dispatch(toggleUpdating());
    if(!isUpdating){
      dispatch(toggleModal());
    }
  }

  const handleDeleteHabit = (id) => {
    console.log(habitId, id)
    if(habitId === id || !habitId){
      navigate('/', { replace: true });
    }
    dispatch(deleteHabit(id));
  }


  return (
    <ListComponent>
      {
        habits.map((habit, index) => (
          <NavLink 
            to={ `/${habit.id}` }
            className={({ isActive }) => 
              isActive ? 'active' :  ''
            }
          >
            <ListItem 
              key={index}
            >
              <span>
                {habit.habit}
              </span>
              <div>
                <button 
                  className='icon pen-icon' 
                  onClick={
                    (event) => {
                      event.preventDefault();
                      event.stopPropagation();
                      handleEditHabit(habit)
                    }}>
                  <FaPen />
                </button>
                <button 
                  className='icon trash-icon' 
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    handleDeleteHabit(habit.id)
                    }}>
                  <FaTrash />
                </button>
              </div>
            </ListItem>
          </NavLink>
        ))
      }
    </ListComponent>
  )
}