import React from "react";

export interface ButtonPropTypes extends React.ComponentPropsWithoutRef<"button"> {
    loading?: boolean;
    size?: "large" | "normal" 
}