import { ToastModes } from "../";
import React from "react";
export interface QuotePropTypes {
    mode?: ToastModes;
    text: string | React.ReactNode
}