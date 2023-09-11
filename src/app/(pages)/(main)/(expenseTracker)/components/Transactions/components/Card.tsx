import Box from "@/app/common/Box";
import Text from "@/app/common/Text";
import React, { FC } from "react";
import { ITransaction } from "..";
import clsx from "clsx";
import formatDate from "@/app/utils/date.util";
import DropdownButton from "./DropdownButton";

interface CardProps {
  transaction: ITransaction;
}

const Card: FC<CardProps> = ({ transaction }) => {
  const { transaction: name, transactionType, amount, date, id } = transaction;

  return (
    <Box
      className={clsx("bg-white border rounded p-4 border-l-[12px]", {
        "border-primary": transactionType === "expense",
        "border-green-500": transactionType === "income",
      })}
    >
      <Box className="flex items-center justify-between">
        <Box className="flex flex-col">
          <Text className="font-bold">{name}</Text>
          <Text className="text-gray-400 text-xs">{formatDate(date)}</Text>
        </Box>
        <Box className="flex items-center gap-4">
          <Text className="font-bold">
            {transactionType === "expense" && "-"} $ {amount}
          </Text>
          <DropdownButton id={id} transaction={name} amount={amount} />
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
