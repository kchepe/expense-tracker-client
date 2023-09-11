import { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { ISeverity } from "../types/types";

const useNotificationManager = () => {
  const { state: notificationState, dispatch } =
    useContext(NotificationContext);

  const showError = () => {
    dispatch({
      type: "SHOW_SERVER_ERROR",
    });
  };

  const showNotification = (message: string, severity: ISeverity) => {
    dispatch({
      type: "SHOW_NOTIFICATION",
      payload: { message, severity },
    });
  };

  const hideNotification = () => {
    dispatch({ type: "HIDE_NOTIFICATION" });
  };
  return { notificationState, showError, showNotification, hideNotification };
};

export default useNotificationManager;
