"use client";

import { FC, PropsWithChildren } from "react";
import { Toaster } from "react-hot-toast";

const ToastsProvider: FC<PropsWithChildren> = ({ children }) => (
  <>
    <Toaster />
    {children}
  </>
);

export default ToastsProvider;
