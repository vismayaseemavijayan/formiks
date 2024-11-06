

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const validationSchema = Yup.object({
    fullname: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    dob: Yup.date().required('Date of birth is required'),
    gender: Yup.string().required('Gender is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
    address: Yup.string().required('Address is required'),
    country: Yup.string().required('Country is required'),
    terms: Yup.boolean()
      .oneOf([true], 'You must agree to the terms and conditions')
      .required('You must agree to the terms and conditions'),
  });

  const initialValues = {
    fullname: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
    address: '',
    country: '',
    profilePicture: null,
    terms: false,
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h1 className="form-header">Registration Form</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            alert('Successfully registered');
            console.log('Form data:', values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <Field type="text" name="fullname" />
                <ErrorMessage name="fullname" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <Field type="text" name="phone" />
                <ErrorMessage name="phone" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="dob">Date of Birth</label>
                <Field type="date" name="dob" />
                <ErrorMessage name="dob" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="gender">Gender</label>
                <Field as="select" name="gender">
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </Field>
                <ErrorMessage name="gender" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field type="password" name="confirmPassword" />
                <ErrorMessage name="confirmPassword" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <Field as="textarea" name="address" />
                <ErrorMessage name="address" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="country">Country</label>
                <Field as="select" name="country">
                  <option value="">Select Country</option>
                  <option value="usa">USA</option>
                  <option value="canada">Canada</option>
                  <option value="india">India</option>
                  <option value="uk">UK</option>
                  <option value="australia">Australia</option>
                </Field>
                <ErrorMessage name="country" component="div" className="error" />
              </div>

              <div className="form-group">
                <label htmlFor="profilePicture">Profile Picture (Optional)</label>
                <input
                  type="file"
                  name="profilePicture"
                  onChange={(event) => {
                    setFieldValue('profilePicture', event.currentTarget.files[0]);
                  }}
                />
              </div>

              <div className="checkbox-group">
                <Field type="checkbox" name="terms" />
                <label htmlFor="terms">I agree to the terms and conditions</label>
              </div>
              <ErrorMessage name="terms" component="div" className="error" />

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                Register
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegistrationForm;


