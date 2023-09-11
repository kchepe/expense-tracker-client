import React, { FC, ReactNode } from "react";
import LogoImage from "../LogoImage";

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => (
  <div className="md:h-screen grid grid-cols-12">
    <div className="md:col-span-7 col-span-full">
      <div className="h-[7vh] p-8 flex items-center">
        <LogoImage />
      </div>
      <div className="md:h-[93vh] flex md:items-center justify-center p-8">
        <div className="w-[500px] md:w-[650px]">{children}</div>
      </div>
    </div>
    <div className="col-span-5 h-screen bg-primary text-white hidden md:block" />
  </div>
);

export default AuthWrapper;
