import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ModalPopup, ModalPopupOverlay } from './CustomModalStyle';
import { FaTimes } from 'react-icons/fa';
import { modalIsOpenSelector, toggleModal } from '../../redux/reducers/ModalReducers';
import AddHabitForm from '../AddHabitForm/AddHabitForm';

export default function CustomModal() {
  const { modalIsOpen } = useSelector(modalIsOpenSelector);
  const dispatch = useDispatch();

  return (
    <>
      {
        modalIsOpen &&
        <ModalPopupOverlay>
            <ModalPopup>
              <div className='modal-header'>
                <h3>Add Habit</h3>
                <button onClick={ () => dispatch(toggleModal()) }>
                  <FaTimes />
                </button>
              </div>
              <div className='modal-body'>
                <AddHabitForm />
              </div>
            </ModalPopup>
        </ModalPopupOverlay>
      }
    </>
  )
}
