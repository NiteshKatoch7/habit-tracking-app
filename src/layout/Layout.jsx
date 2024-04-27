import React from 'react'
import { ContentContainer, HomeController } from './LayoutStyle'
import { Col, Row } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import CustomModal from '../components/CustomModal/CustomModal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModal } from '../redux/reducers/ModalReducers';
import HabitList from '../components/HabitList/HabitList';
import { habitSelector, toggleUpdating, updateExistingFromData } from '../redux/reducers/HabitReducers';

export default function Layout() {
  const dispatch = useDispatch();
  const { isUpdating } = useSelector(habitSelector);

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
                        <button className="add-habit-btn" onClick={ () => handleAddHabit() }>
                            <FaPlus /> Add Habit
                        </button>
                    </div>
                </Col>
            </Row>
            <Row className='w-100 h-100'>
                <Col md="5">
                    <HabitList />
                </Col>
                <Col md="7">
                    <Outlet />
                </Col>
            </Row>
        </ContentContainer>
        <CustomModal />
    </HomeController>
  )
}
