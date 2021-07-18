import * as yup from 'yup';

export const userSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  shippingAddress: yup.string().required('Shipping Address is required'),
  lastName: yup.string().required('Last Name is required'),
  age: yup.number().typeError('Age must be a number').required('Age is required').positive('Age must be a positive integer').integer('Age must be an integer'),
  email: yup.string().email('Invalid Email').required('Email is required'),
  country: yup.string().required('Country is required'),
});