"use client";

import Dropdown from "@/app/common/Dropdown";
import Form from "@/app/common/FormBuilder/Form";
import Modal from "@/app/common/Modal";
import { REMOVE_TRANSACTION } from "@/app/gql/mutations/transaction";
import useMutationAuthClient from "@/app/hooks/Apollo/useMutationAuthClient";
import Elipsis from "@/app/icons/Elipsis";
import { useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import EditTransactionForm from "./EditTransactionForm";
import { transactionSchema } from "@/app/schema";
import useNotificationManager from "@/app/hooks/useNotificationManager";

interface DropdownButtonProps {
  id: string;
  transaction: string;
  amount: string;
}

const DropdownButton: FC<DropdownButtonProps> = (props) => {
  const { refresh } = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { showError, showNotification } = useNotificationManager();

  const { mutation: removeTransaction } =
    useMutationAuthClient(REMOVE_TRANSACTION);

  const handleRemoveTransaction = async () => {
    try {
      const response = await removeTransaction({
        variables: { transactionId: props.id },
      });
      showNotification(response.data.removeTransaction.message, "success");
    } catch {
      showError();
    }
    refresh();
  };

  const handleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };

  const dropdownMenu = [
    { label: "Edit", fn: handleShowModal },
    { label: "Delete", fn: handleRemoveTransaction },
  ];

  return (
    <>
      <Modal
        showModal={showModal}
        title="Edit Transaction"
        handleClose={handleShowModal}
      >
        <Form initialValues={props} schema={transactionSchema}>
          <EditTransactionForm handleShowModal={handleShowModal} />
        </Form>
      </Modal>
      <Dropdown menu={dropdownMenu} label={<Elipsis className="w-7 h-7" />} />
    </>
  );
};

export default DropdownButton;
