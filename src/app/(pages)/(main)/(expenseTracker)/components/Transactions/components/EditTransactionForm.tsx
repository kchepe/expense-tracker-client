import Box from "@/app/common/Box";
import Button from "@/app/common/Button";
import InputForm from "@/app/common/FormBuilder/InputForm";
import InputNumber from "@/app/common/FormBuilder/InputNumber";
import Text from "@/app/common/Text";
import { UPDATE_TRANSACTION } from "@/app/gql/mutations/transaction";
import useMutationAuthClient from "@/app/hooks/Apollo/useMutationAuthClient";
import useNotificationManager from "@/app/hooks/useNotificationManager";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";

interface EditTransactionFormProps {
  handleShowModal: () => void;
}

const EditTransactionForm: FC<EditTransactionFormProps> = ({
  handleShowModal,
}) => {
  const { handleSubmit, reset } = useFormContext();
  const { refresh } = useRouter();
  const { mutation: updateTransaction, loading } =
    useMutationAuthClient(UPDATE_TRANSACTION);

  const { showError, showNotification } = useNotificationManager();

  const handleUpdateTransaction: SubmitHandler<FieldValues> = async (
    values
  ) => {
    try {
      const response = await updateTransaction({
        variables: { newTransaction: values },
      });
      handleShowModal();
      showNotification(response.data.updateTransaction.message, "success");
      reset();
    } catch {
      showError();
    }
    refresh();
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
        onClick={handleSubmit(handleUpdateTransaction)}
        loading={loading}
      >
        Update
      </Button>
    </Box>
  );
};

export default EditTransactionForm;
