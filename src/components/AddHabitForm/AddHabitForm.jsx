import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { FormWrapper } from './AddHabitFormStyle';

export default function AddHabitForm() {
  return (
      <Formik
        initialValues={{ habit: '' }}
        validate={values => {
          const errors = {};
          if (!values.habit) {
            errors.habit = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
