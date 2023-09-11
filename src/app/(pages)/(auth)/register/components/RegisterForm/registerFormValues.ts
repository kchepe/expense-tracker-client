import * as yup from "yup";
import { passwordRegex } from "@/app/constant";

export const registerInitialValues = {
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  confirmPassword: "",
};

export const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  firstName: yup.string().required("Firstname is required"),
  lastName: yup.string().required("Lastname is required"),
  password: yup
    .string()
    .required()
    .min(8)
    .matches(
      passwordRegex,
      "Password must contain at least 8 characters, one uppercase, one number and one special case character"
    ),
  confirmPassword: yup
    .string()
    .required("This field is required")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});
