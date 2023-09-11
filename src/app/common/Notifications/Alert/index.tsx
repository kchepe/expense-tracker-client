"use client";

import React, { FC, useEffect } from "react";
import clsx from "clsx";
import useNotificationManager from "@/app/hooks/useNotificationManager";
import Box from "../../Box";
import Text from "../../Text";
import Button from "../../Button";
import Close from "@/app/icons/Close";
import { severityIcon } from "../constants";

interface AlertProps {
  alwaysShow?: boolean;
  timeout?: number;
}

const Alert: FC<AlertProps> = ({ alwaysShow = false, timeout = 2500 }) => {
  const {
    notificationState: { show, severity, message },
    hideNotification,
  } = useNotificationManager();
  useEffect(() => {
    if (show && !alwaysShow) {
      const time = setTimeout(() => hideNotification(), timeout);
      return () => clearTimeout(time);
    }
    return undefined;
  }, [show, alwaysShow, timeout, hideNotification]);

  return (
    <Box
      className={clsx("rounded-md p-4", show ? "block" : "hidden", {
        "bg-green-50": severity === "success",
        "bg-red-50": severity === "error",
        "bg-blue-50": severity === "info",
      })}
    >
      <Box className="flex justify-between">
        <Box className="flex items-center">
          <Box className="flex-shrink-0">{severityIcon[severity]}</Box>
          <Box className="ml-3">
            <Text
              className={clsx("font-medium", {
                "text-red-800": severity === "error",
                "text-blue-800": severity === "info",
                "text-green-500": severity === "success",
              })}
            >
              {message}
            </Text>
          </Box>
        </Box>
        <Box>
          <Button
            size="normal"
            onClick={hideNotification}
            className={clsx("flex rounded-md", {
              "text-blue-500 hover:bg-blue-100 bg-blue-50": severity === "info",
              "text-red-500 hover:bg-red-100 bg-red-50": severity === "error",
              "text-green-500 hover:bg-green-100 bg-green-50":
                severity == "success",
            })}
          >
            <Close className="h-5 w-5" aria-hidden="true" />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Alert;
