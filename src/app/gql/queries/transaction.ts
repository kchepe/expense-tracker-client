import { gql } from "@apollo/client";

const GET_TRANSACTIONS = gql`
  query GetTransaction($userId: String!) {
    getTransaction(userId: $userId) {
      transactions {
        id
        transaction
        amount
        date
        transactionType
      }
      expense
      income
      balance
    }
  }
`;

export default GET_TRANSACTIONS;
