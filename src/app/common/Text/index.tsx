import clsx from "clsx";
import { FC, ReactNode } from "react";

interface TextProps {
  children?: string | ReactNode;
  className?: string;
  variant?:
    | "title"
    | "subtitle"
    | "error"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";
}

const Text: FC<TextProps> = ({ children, className, variant }) => (
  <span
    className={clsx(className, {
      "text-gray-500": variant === "subtitle",
      "text-4xl font-bold": variant === "h1",
      "text-3xl font-bold": variant === "h2",
      "text-2xl font-bold": variant === "h3",
      "text-xl font-bold": variant === "h4",
      "text-lg font-bold": variant === "h5",
      "text-base font-bold": variant === "h6",
      "text-[10px] ml-4 text-red-600": variant === "error",
    })}
  >
    {children}
  </span>
);

export default Text;
