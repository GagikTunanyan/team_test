import React from "react";
export interface ContainerPropTypes {
  title?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
  seperat?: "half" | "70/30";
  hash?: string;
  children?: React.ReactNode;
}
