"use client";

import Form from "@/app/common/FormBuilder/Form";
import RegisterForm from "./components/RegisterForm";
import {
  registerInitialValues,
  registerSchema,
} from "./components/RegisterForm/registerFormValues";

const Register = () => (
  <Form schema={registerSchema} initialValues={registerInitialValues}>
    <RegisterForm />
  </Form>
);

export default Register;
