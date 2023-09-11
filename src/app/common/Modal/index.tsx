import { FC, Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Close from "@/app/icons/Close";
import Box from "../Box";
import Text from "../Text";
import Button from "../Button";

interface ModalProps {
  showModal: boolean;
  children: ReactNode;
  handleClose: () => void;
  title?: string;
}

const Modal: FC<ModalProps> = ({
  showModal,
  handleClose,
  children,
  title = "",
}) => (
  <Transition.Root show={showModal} as={Fragment}>
    <Dialog as="div" className="relative z-[1000]" onClose={handleClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Box className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>

      <Box className="fixed inset-0 z-10 overflow-y-auto">
        <Box className="min-h-full p-4 sm:p-0 flex justify-center items-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <Dialog.Panel
              className="relative transform overflow-hidden rounded-lg
                        bg-white px-4 pb-4 pt-5 text-left shadow-xl w-full
                          transition-all sm:my-8 sm:w-full sm:max-w-xl sm:p-6"
            >
              <Box className="flex flex-col gap-4">
                <Box className="flex items-center justify-between">
                  <Text className="text-lg font-bold">{title}</Text>
                  <Button
                    onClick={handleClose}
                    className="hover:text-gray-700 font-bold"
                  >
                    <Close />
                  </Button>
                </Box>
                <Box>{children}</Box>
              </Box>
            </Dialog.Panel>
          </Transition.Child>
        </Box>
      </Box>
    </Dialog>
  </Transition.Root>
);

export default Modal;
