import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { habitSelector } from '../../redux/reducers/HabitReducers';
import { ListComponent, ListItem } from './HabitListStyle';

export default function HabitList() {
  const { habits } = useSelector(habitSelector);
  const [activeHabit, setActiveHabit] = useState(null);

  const handleItemClick = (index) => {
    setActiveHabit(index);
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
            {habit.habit}
          </ListItem>
        ))
      }
    </ListComponent>
  )
}