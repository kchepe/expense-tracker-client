import * as yup from 'yup';

export const loginInitialValues = {
  email: '',
  password: '',
};

export const loginSchema = yup.object().shape({
  email: yup.string().email('Must be a valid email').required('Email is required'),
  password: yup.string().required('Password is required'),
});
