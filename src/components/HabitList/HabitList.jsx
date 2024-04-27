import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteHabit, editHabit, habitSelector, toggleUpdating, updateExistingFromData } from '../../redux/reducers/HabitReducers';
import { ListComponent, ListItem } from './HabitListStyle';
import { FaPen, FaTrash } from 'react-icons/fa';
import { toggleModal } from '../../redux/reducers/ModalReducers';

export default function HabitList() {
  const { habits } = useSelector(habitSelector);
  const [activeHabit, setActiveHabit] = useState(null);

  const dispatch = useDispatch();

  const handleItemClick = (index) => {
    setActiveHabit(index);
  }

  const handleEditHabit = (habit) => {
    dispatch(updateExistingFromData(habit));
    dispatch(toggleUpdating());
    dispatch(toggleModal());
  }

  return (
    <ListComponent>
      {
        habits.map((habit, index) => (
          <ListItem 
            key={index}
            className={index === activeHabit ? 'active' : ''}
            onClick={() => handleItemClick(index)}
          >
            <span>
              {habit.habit}
            </span>
            <div>
              <button className='icon pen-icon' onClick={() => handleEditHabit(habit)}>
                <FaPen />
              </button>
              <button className='icon trash-icon' onClick={() => dispatch(deleteHabit(habit.id))}>
                <FaTrash />
              </button>
            </div>
          </ListItem>
        ))
      }
    </ListComponent>
  )
}