import "./globals.css";
import type { Metadata } from "next";
import {
  NotificationProvider,
  initialNotificationState,
} from "./context/NotificationContext";
import AuthProvider from "./AuthProvider";

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <AuthProvider>
        <NotificationProvider initialState={initialNotificationState}>
          <body>{children}</body>
        </NotificationProvider>
      </AuthProvider>
    </html>
  );
}
