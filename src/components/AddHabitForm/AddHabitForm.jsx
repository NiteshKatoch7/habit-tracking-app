import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { FormWrapper } from './AddHabitFormStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addHabit, habitSelector } from '../../redux/reducers/HabitReducers';
import { toggleModal } from '../../redux/reducers/ModalReducers';

export default function AddHabitForm() {
  const dispatch = useDispatch();
  const { habits } = useSelector(habitSelector);
  console.log(habits);
  return (
      <Formik
        initialValues={{  id: habits.length + 1, habit: '' }}
        validate={values => {
          const errors = {};
          if (!values.habit) {
            errors.habit = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(values)
            dispatch(addHabit(values));
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
                  Submit
                </button>
              </div>
            </FormWrapper>
          </Form>
        )}
      </Formik>
  )
}
