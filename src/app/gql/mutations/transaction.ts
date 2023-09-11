import { gql } from "@apollo/client";

const ADD_TRANSACTION = gql`
  mutation AddTransaction($newTransaction: CreateTransactionInput!) {
    addTransaction(newTransaction: $newTransaction) {
      success
      message
      data {
        id
        transaction
        userId
        transactionType
        date
        amount
      }
    }
  }
`;

const REMOVE_TRANSACTION = gql`
  mutation RemoveTransaction($transactionId: String!) {
    removeTransaction(transactionId: $transactionId) {
      success
      message
      data {
        id
      }
    }
  }
`;

const UPDATE_TRANSACTION = gql`
  mutation UpdateTransaction($newTransaction: UpdateTransactionInput!) {
    updateTransaction(newTransaction: $newTransaction) {
      success
      message
    }
  }
`;

export { ADD_TRANSACTION, REMOVE_TRANSACTION, UPDATE_TRANSACTION };
