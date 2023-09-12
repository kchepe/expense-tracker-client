import Box from "@/app/common/Box";
import Button from "@/app/common/Button";
import InputForm from "@/app/common/FormBuilder/InputForm";
import InputNumber from "@/app/common/FormBuilder/InputNumber";
import Text from "@/app/common/Text";
import useCurrentUser from "@/app/hooks/useCurrentUser";
import React, { FC } from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import useMutationAuthClient from "@/app/hooks/Apollo/useMutationAuthClient";
import { ADD_TRANSACTION } from "@/app/gql/mutations/transaction";
import { useRouter } from "next/navigation";
import { TransactionType } from "@/app/types/types";
import useNotificationManager from "@/app/hooks/useNotificationManager";

interface TransactionInputsProps {
  transactionType: TransactionType;
  handleShowModal?: () => void;
}

const TransactionInputs: FC<TransactionInputsProps> = ({
  transactionType,
  handleShowModal = () => undefined,
}) => {
  const { handleSubmit, reset } = useFormContext();
  const { refresh } = useRouter();
  const { showError, showNotification } = useNotificationManager();

  const user = useCurrentUser();
  const { mutation: addTransaction, loading } =
    useMutationAuthClient(ADD_TRANSACTION);

  const handleSaveTransaction: SubmitHandler<FieldValues> = async (values) => {
    const newTransaction = {
      ...values,
      transactionType,
      userId: user?.id as string,
    };
    try {
      const response = await addTransaction({
        variables: { newTransaction },
      });
      refresh();
      handleShowModal();
      reset();
      showNotification(response.data.addTransaction.message, "success");
    } catch {
      showError();
    }
  };

  return (
    <Box className="flex flex-col gap-4">
      <InputForm
        name="transaction"
        label="Transaction"
        placeholder="Enter transaction"
      />
      <InputNumber
        name="amount"
        label="Amount"
        placeholder="Enter amount"
        startIcon={<Text className="font-bold">$</Text>}
        decimalScale={2}
        fixedDecimalScale
      />
      <Button
        color="primary"
        className="mt-2"
        onClick={handleSubmit(handleSaveTransaction)}
        loading={loading}
      >
        Submit
      </Button>
    </Box>
  );
};

export default TransactionInputs;
