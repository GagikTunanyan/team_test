import React from "react";

export interface ModalPropTypes {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: CallableFunction;
  contentClassName?: string;
}
