import React from "react";

export interface navigation {
  hash: string;
  text: string;
  icon?: string | React.ReactNode;
}

export interface NavigationPropTypes {
  logo: { text?: string; image?: string | React.ReactNode };
  left: navigation[];
  right: navigation[];
}
