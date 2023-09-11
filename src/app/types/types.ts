export interface IUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export type TransactionType = "expense" | "income";

export type ISeverity = "error" | "info" | "success";
