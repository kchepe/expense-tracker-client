"use client";

import { FC, Fragment, useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import Close from "@/app/icons/Close";
import useNotificationManager from "@/app/hooks/useNotificationManager";
import clsx from "clsx";
import Box from "../../Box";
import Text from "../../Text";
import Button from "../../Button";
import { severityIcon } from "../constants";

interface SnackbarProps {
  timeout?: number;
}

const Snackbar: FC<SnackbarProps> = ({ timeout = 2500 }) => {
  const {
    notificationState: { show, severity, message },
    hideNotification,
  } = useNotificationManager();

  useEffect(() => {
    if (show) {
      const time = setTimeout(() => hideNotification(), timeout);
      return () => clearTimeout(time);
    }
    return undefined;
  }, [show, timeout, hideNotification]);

  return (
    <>
      <Box
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex px-4 py-6 items-start sm:p-6 z-50"
      >
        <Box className="flex w-full flex-col items-center space-y-4 sm:items-end">
          <Transition
            show={show}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Box
              className={clsx(
                "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow ring-1 ring-black ring-opacity-5",
                {
                  "bg-green-200": severity === "success",
                  "bg-red-200": severity === "error",
                  "bg-blue-200": severity === "info",
                }
              )}
            >
              <Box className="p-4">
                <Box className="flex items-center">
                  <Box className="flex-shrink-0">{severityIcon[severity]}</Box>
                  <Box className="ml-3 w-0 flex-1 pt-0.5">
                    <Text className="text-sm font-medium text-gray-900">
                      {message}
                    </Text>
                  </Box>
                  <Box className="ml-4 flex flex-shrink-0">
                    <Button onClick={hideNotification}>
                      <Text className="sr-only">Close</Text>
                      <Close className="h-5 w-5" />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Transition>
        </Box>
      </Box>
    </>
  );
};

export default Snackbar;
