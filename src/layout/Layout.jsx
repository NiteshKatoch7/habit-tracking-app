import React, { useEffect } from 'react'
import { ContentContainer, HomeController } from './LayoutStyle'
import { Col, Row } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import CustomModal from '../components/CustomModal/CustomModal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../redux/reducers/ModalReducers';
import HabitList from '../components/HabitList/HabitList';
import { dailyHabitUpdate, habitSelector, toggleUpdating, updateExistingFromData } from '../redux/reducers/HabitReducers';

// Layout Component of the project, this is the aprent node to all other components.
export default function Layout() {
  const dispatch = useDispatch();
  const { isUpdating } = useSelector(habitSelector);

  /* On Mounting of the compenent, we dispatch the dailyHabitUpdate action to our reducer, So to update the habit dates and their status accordingly,  
    Today's date with previous 6 days. */
  useEffect(()=>{
    dispatch(dailyHabitUpdate());
  }, [dispatch])

  // Using this function to handle the add habit button, used to add habit to the habit list.
  const handleAddHabit = () => {
    if(isUpdating){
        dispatch(toggleUpdating());
    }
    dispatch(updateExistingFromData({}));
    dispatch(toggleModal());
  }

  return (
    <HomeController>
        <ContentContainer>
            <Row className='w-100'>
                <Col>
                    <div className="content-container">
                        <h1 className="project-title">
                            Habit Tracker App
                        </h1>
                        <button 
                            // On click of add habit button we trigger the handleAddHabit function, writter above.
                            className="add-habit-btn" 
                            onClick={ () => handleAddHabit() }>
                            <FaPlus /> Add Habit
                        </button>
                    </div>
                </Col>
            </Row>
            <Row className='w-100'>
                <Col md="5">
                    {/* Habit List Component */}
                    <HabitList />
                </Col>
                <Col md="7">
                    {/* Using Outlet from the react router, to show all the chidlren routing in it. */}
                    <Outlet />
                </Col>
            </Row>
        </ContentContainer>
        <CustomModal />
    </HomeController>
  )
}
