import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { FormWrapper } from './AddHabitFormStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addHabit, editHabit, habitSelector } from '../../redux/reducers/HabitReducers';
import { toggleModal } from '../../redux/reducers/ModalReducers';

// Form Component
export default function AddHabitForm() {
  // Accessing redux store states and using useDispatch to dispatch actions to our redux.
  const dispatch = useDispatch();
  const { habits, existingformData, isUpdating } = useSelector(habitSelector);

  const generateRandomID = () => {
    const timestamp = Date.now().toString(36);
    const randomNum = Math.random().toString(36).substr(2, 5);
    return timestamp + randomNum;
  }

  return (
      // Using Formik for form management
      <Formik
        initialValues={{  
          id: existingformData.id || generateRandomID(), 
          habit: existingformData.habit || '' 
        }}
        validate={values => {
          const errors = {};
          if (!values.habit) {
            errors.habit = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            
            // If form is in updating stage : we will dispatch for editHabit action and if not updating we wil dispatch the addHabit action.
            if(isUpdating){
              dispatch(editHabit(values, existingformData.id));
            }else{
              dispatch(addHabit(values));
            }

            //Toggling the modal to close it afte3r succesfull form submit
            dispatch(toggleModal());
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormWrapper className='form-wrapper'>
              <div className='form-container w-100'>
                <div className='form-row'>
                    <label>Habit*</label>
                    <Field type="text" name="habit" placeholder="Enter Habit..." />
                    <ErrorMessage name="habit" component="div" className='error-message' />
                </div>
              </div>
            </FormWrapper>
            <FormWrapper>
              <div className='form-container submit-btns'>
                <button type="submit" disabled={isSubmitting}>
                  {/* Showing update button in the form when updating, submit button */}
                  {isUpdating ? 'Update' : 'Submit'} 
                </button>
              </div>
            </FormWrapper>
          </Form>
        )}
      </Formik>
  )
}
