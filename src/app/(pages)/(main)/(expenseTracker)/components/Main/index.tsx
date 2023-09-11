import React from "react";
import { getAuthApolloServer } from "@/app/lib/apolloServer";
import GET_TRANSACTIONS from "@/app/gql/queries/transaction";
import getSessionUtil from "@/app/utils/getSession.util";
import Box from "@/app/common/Box";
import Header from "../Header";
import Transactions from "../Transactions";

const Main = async () => {
  const session = await getSessionUtil();

  const { data: transactionsData } = await getAuthApolloServer().query({
    query: GET_TRANSACTIONS,
    variables: { userId: session?.user.id as string },
    fetchPolicy: "no-cache",
  });

  const {
    getTransaction: { balance, transactions, expense, income },
  } = transactionsData;

  return (
    <Box className="flex flex-col gap-4">
      <Header balance={balance} expense={expense} income={income} />
      <Transactions transactions={transactions} />
    </Box>
  );
};

export default Main;
