"use client";

import Box from "@/app/common/Box";
import Text from "@/app/common/Text";
import React, { FC, useState } from "react";
import AmountCard from "./components/AmountCard";
import Button from "@/app/common/Button";
import Modal from "@/app/common/Modal";
import TransactionForm from "../TransactionForm";

interface HeaderProps {
  balance: number;
  expense: number;
  income: number;
}

const Header: FC<HeaderProps> = ({ balance, expense, income }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <Box className="flex flex-col gap-4">
      <Modal
        showModal={showModal}
        handleClose={handleShowModal}
        title="Transaction Form"
      >
        <TransactionForm handleShowModal={handleShowModal} isModal />
      </Modal>
      <Box className="flex items-center justify-between">
        <Box className="flex flex-col font-bold">
          <Text>Balance</Text>
          <Text variant="h1">$ {balance.toLocaleString()}</Text>
        </Box>
        <Box className="block sm:hidden">
          <Button color="primary" onClick={handleShowModal}>
            Add Transaction
          </Button>
        </Box>
      </Box>
      <Box className="flex gap-4 items-center flex-col sm:flex-row">
        <AmountCard label="Income" amount={income} />
        <AmountCard label="Expense" amount={expense} />
      </Box>
    </Box>
  );
};

export default Header;
