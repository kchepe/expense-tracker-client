"use client";

import { FC, ReactNode, createContext, useMemo, useReducer } from "react";
import { ISeverity } from "@/app/common/Alert";
import { INotificationContextProps, INotificationState } from "./types";
import NotificationReducer from "./reducer";

type INotificationProviderProps = {
  children: ReactNode;
  initialState: INotificationState;
};

export const initialNotificationState: INotificationState = {
  show: false,
  message: "",
  severity: "info" as ISeverity,
};

export const NotificationContext = createContext<INotificationContextProps>(
  {} as INotificationContextProps
);

export const NotificationProvider: FC<INotificationProviderProps> = ({
  children,
  initialState = initialNotificationState,
}) => {
  const [state, dispatch] = useReducer(NotificationReducer, initialState);
  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};
