import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteHabit, habitSelector, toggleUpdating, updateExistingFromData } from '../../redux/reducers/HabitReducers';
import { ListComponent, ListItem } from './HabitListStyle';
import { FaPen, FaTrash } from 'react-icons/fa';
import { toggleModal } from '../../redux/reducers/ModalReducers';
import { NavLink, useNavigate, useParams } from 'react-router-dom';

// Habit List Component
export default function HabitList() {
  
  // Accessing redux store states and using useDispatch to dispatch actions to our redux.
  const { habits, isUpdating } = useSelector(habitSelector);
  const dispatch = useDispatch();

  // Extracting the habit id, from the url.
  const { habitId } = useParams();
  const navigate = useNavigate();

  // Using this functions to Handle the edit button click on particular habit
  const handleEditHabit = (habit) => {
    dispatch(updateExistingFromData(habit));
    dispatch(toggleUpdating());
    if(!isUpdating){
      dispatch(toggleModal());
    }
  }

  // Using this functions to Handle the delete button click on particular habit
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
                  // On Click of Edit button on the selected habit, we trigger the handleEditHabit functions writter above in the page.
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
                    // On Click of Delete button on the selected habit, we trigger the handleDeleteHabit functions writter above in the page.
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