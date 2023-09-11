import * as yup from "yup";

export const transactionSchema = yup.object().shape({
  transaction: yup.string().required("Transaction is required"),
  amount: yup.string().required("Amount is required"),
});
