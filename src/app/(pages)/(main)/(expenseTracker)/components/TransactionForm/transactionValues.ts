import { TransactionType } from "@/app/types/types";

export const transactionType: { value: TransactionType; label: string }[] = [
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
];

export const initialTransactionValue = {
  transaction: "",
  amount: "",
};
