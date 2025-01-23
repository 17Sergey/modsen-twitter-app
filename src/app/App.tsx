"use client";

import { FC, PropsWithChildren } from "react";
import QueryProvider from "./providers/QueryProvider";
import ThemeProvider from "./providers/ThemeProvider";
import ToastsProvider from "./providers/ToastsProvider";

export const App: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <ToastsProvider>{children}</ToastsProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};
