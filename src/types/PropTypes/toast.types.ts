import React from "react";

export type ToastModes = "success" | "error" | "warning" | "info" | "empty";

export interface ToastPropTypes {
  mode: ToastModes;
  text: React.ReactNode;
  onClose?: CallableFunction;
  config?: { time?: number; autoclose?: boolean };
  icon?: React.ReactNode;
}
