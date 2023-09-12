import Box from "@/app/common/Box";
import Text from "@/app/common/Text";
import TextField from "@/app/common/TextField";
import React, { FC } from "react";
import Card from "./components/Card";
import { TransactionType } from "@/app/types/types";

export interface ITransaction {
  amount: string;
  id: string;
  transactionType: TransactionType;
  date: string;
  transaction: string;
}

interface TransactionsProps {
  transactions: ITransaction[];
}

const Transactions: FC<TransactionsProps> = ({ transactions }) => {
  return (
    <Box className="flex flex-col gap-4">
      {/* <Box>
        <Text variant="h6">Filter</Text>
      </Box>
      <Box className="inline-flex gap-4 flex-col sm:flex-row">
        <TextField
          type="date"
          outlined
          className="p-[10px]"
          label="Start Date"
        />
        <TextField type="date" outlined className="p-[10px]" label="End Date" />
      </Box> */}
      <Text variant="h6">Transactions</Text>
      <Box className="flex flex-col gap-4 overflow-y-auto h-[28rem] scrollbar">
        {transactions.length === 0 ? (
          <Box className="text-center">
            <Text>No available transactions.</Text>
          </Box>
        ) : (
          transactions.map((transaction) => (
            <Card key={transaction.id} transaction={transaction} />
          ))
        )}
      </Box>
    </Box>
  );
};

export default Transactions;
