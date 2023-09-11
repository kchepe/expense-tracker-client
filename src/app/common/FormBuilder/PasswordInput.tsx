"use client";

import React, { FC, useState } from "react";
import LockClose from "@/app/icons/LockClose";
import EyeOpen from "@/app/icons/EyeOpen";
import EyeClose from "@/app/icons/EyeClose";
import InputForm from "./InputForm";

interface PasswordInputProps {
  label?: string;
  name: string;
  placeholder?: string;
}

const PasswordInput: FC<PasswordInputProps> = ({
  label = "",
  name,
  placeholder = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <InputForm
      name={name}
      label={label}
      type={showPassword ? "text" : "password"}
      placeholder={placeholder}
      startIcon={<LockClose />}
      endIcon={
        showPassword ? (
          <EyeOpen
            className="text-lg cursor-pointer"
            aria-hidden
            onClick={handleShowPassword}
          />
        ) : (
          <EyeClose
            className="text-lg cursor-pointer"
            aria-hidden
            onClick={handleShowPassword}
          />
        )
      }
    />
  );
};

export default PasswordInput;
