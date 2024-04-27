import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { FormWrapper } from './AddHabitFormStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addHabit, editHabit, habitSelector } from '../../redux/reducers/HabitReducers';
import { toggleModal } from '../../redux/reducers/ModalReducers';

export default function AddHabitForm() {
  const dispatch = useDispatch();
  const { habits, existingformData, isUpdating } = useSelector(habitSelector);

  return (
      <Formik
        initialValues={{  
          id: existingformData.id || habits.length + 1, 
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
            
            if(isUpdating){
              dispatch(editHabit(values, existingformData.id));
            }else{
              dispatch(addHabit(values));
            }

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
                  {isUpdating ? 'Update' : 'Submit'} 
                </button>
              </div>
            </FormWrapper>
          </Form>
        )}
      </Formik>
  )
}
