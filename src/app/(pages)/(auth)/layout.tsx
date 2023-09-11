import { FC, ReactNode } from "react";
import { redirect } from "next/navigation";
import AuthWrapper from "@/app/common/AuthWrapper";
import getSessionUtil from "@/app/utils/getSession.util";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = async ({ children }) => {
  const session = await getSessionUtil();
  if (session) {
    redirect("/");
  }

  return <AuthWrapper>{children}</AuthWrapper>;
};

export default AuthLayout;
