import React from "react";

export interface InputesPropTypes
  extends React.ComponentPropsWithoutRef<"input"> {
  inputSize?: "big" | "normal";
  boldText?: boolean;
  error?: string;
}

export interface TextAreaPropTypes
  extends React.ComponentPropsWithoutRef<"textarea"> {
  boldText?: boolean;
  error?: string;
}

export interface CheckboxPropTypes {
  value?: boolean;
  onChange?: CallableFunction;
  label?: string;
  error?: string;
  disabled?: boolean;
}
