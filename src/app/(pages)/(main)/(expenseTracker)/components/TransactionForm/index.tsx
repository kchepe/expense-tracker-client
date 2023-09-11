"use client";

import Box from "@/app/common/Box";
import Button from "@/app/common/Button";
import Form from "@/app/common/FormBuilder/Form";
import Text from "@/app/common/Text";
import React, { FC, useState } from "react";
import TransactionInputs from "./components/TransactionInputs";
import { transactionType, initialTransactionValue } from "./transactionValues";
import { TransactionType } from "@/app/types/types";
import { transactionSchema } from "@/app/schema";

interface TransactionFormProps {
  handleShowModal?: () => void;
  isModal?: boolean;
}

const TransactionForm: FC<TransactionFormProps> = ({
  handleShowModal,
  isModal,
}) => {
  const [selectedTransactionType, setSelectedTransactionType] =
    useState<TransactionType>("income");

  const handleTransactionType = (value: TransactionType) => {
    setSelectedTransactionType(value);
  };

  return (
    <Form initialValues={initialTransactionValue} schema={transactionSchema}>
      <Box className="flex flex-col gap-4">
        {!isModal && <Text variant="h4">Add Transaction</Text>}
        <Box className="flex justify-end">
          {transactionType.map((type) => (
            <Button
              key={type.value}
              size="small"
              onClick={() => handleTransactionType(type.value)}
              color={
                selectedTransactionType === type.value
                  ? "primary"
                  : "transparent"
              }
            >
              {type.label}
            </Button>
          ))}
        </Box>
        <TransactionInputs
          transactionType={selectedTransactionType}
          handleShowModal={handleShowModal}
        />
      </Box>
    </Form>
  );
};

export default TransactionForm;
