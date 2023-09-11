'use client';

import Form from '@/app/common/FormBuilder/Form';
import SignInForm from './components/SignInForm';
import { loginSchema, loginInitialValues } from './components/SignInForm/loginFormValues';

const Signin = () => (
  <Form schema={loginSchema} initialValues={loginInitialValues}>
    <SignInForm />
  </Form>
);

export default Signin;
