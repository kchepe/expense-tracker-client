import CheckCircleFill from "@/app/icons/CheckCircleFill";
import CloseCircleFill from "@/app/icons/CloseCircleFill";
import WarningCircleFill from "@/app/icons/WarningCircleFill";
import { ISeverity } from "@/app/types/types";
import { ReactNode } from "react";

interface ISeverityIcon {
  [key: string]: ReactNode;
}

export const severityIcon: ISeverityIcon = {
  success: (
    <CheckCircleFill className="h-5 w-5 text-green-400" aria-hidden="true" />
  ),
  error: (
    <CloseCircleFill className="h-5 w-5 text-red-400" aria-hidden="true" />
  ),
  info: (
    <WarningCircleFill className="h-5 w-5 text-blue-400" aria-hidden="true" />
  ),
};
