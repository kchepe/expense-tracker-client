import Box from "@/app/common/Box";
import Text from "@/app/common/Text";
import { clsx } from "clsx";
import React, { FC } from "react";

interface AmountCardProps {
  label: "Expense" | "Income";
  amount: number;
}

const AmountCard: FC<AmountCardProps> = ({ label, amount }) => {
  return (
    <Box
      className={clsx(
        "flex flex-col font-bold border py-3 px-5 rounded-lg w-full text-white",
        {
          "bg-green-500": label === "Income",
          "bg-red-500": label === "Expense",
        }
      )}
    >
      <Text>{label}</Text>
      <Text variant="h1">$ {amount.toLocaleString()}</Text>
    </Box>
  );
};

export default AmountCard;
