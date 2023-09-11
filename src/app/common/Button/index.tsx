/* eslint-disable react/display-name */
import React, { ComponentPropsWithRef, FC, ReactNode, forwardRef } from "react";
import clsx from "clsx";
import { Color, Size, IButtonColor } from "./types";

interface ButtonProps extends ComponentPropsWithRef<"button"> {
  children: ReactNode;
  color?: Color;
  className?: string;
  size?: Size;
  fullWidth?: boolean;
  loading?: boolean;
}

const Button: FC<ButtonProps> = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      color = "transparent",
      className = "",
      size = "medium",
      fullWidth = false,
      loading = false,
      ...buttonProps
    },
    ref
  ) => {
    const buttonColor: IButtonColor = {
      primary: `${
        buttonProps.disabled || loading
          ? "bg-white border-secondary text-gray-500 border"
          : "text-white bg-primary hover:bg-primary_hover"
      }`,
      secondary: `${
        buttonProps.disabled || loading
          ? "bg-white text-gray-500 border-secondary border"
          : "text-primary bg-secondary hover:bg-gray-200"
      }`,
      transparent: `${buttonProps.disabled || loading ? "text-gray-400" : ""}`,
    };

    const buttonSize = {
      normal: "p-0",
      small: "px-3 py-1",
      medium: "px-4 py-2",
      large: "px-5 py-3",
    };

    return (
      <button
        ref={ref}
        disabled={buttonProps.disabled || loading}
        className={clsx(
          className,
          buttonColor[color],
          buttonSize[size],
          "rounded",
          {
            "w-full": fullWidth,
            "w-auto": !fullWidth,
            "cursor-pointer": !buttonProps.disabled,
          }
        )}
        {...buttonProps}
      >
        {loading ? "Loading..." : children}
      </button>
    );
  }
);

export default Button;
