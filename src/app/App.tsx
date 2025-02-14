"use client";

import { FC, PropsWithChildren } from "react";
import AuthProvider from "./providers/AuthProvider";
import { LayoutProvider } from "./providers/LayoutProvider";
import QueryProvider from "./providers/QueryProvider";
import ThemeProvider from "./providers/ThemeProvider";
import ToastsProvider from "./providers/ToastsProvider";

export const App: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>
    <QueryProvider>
      <ToastsProvider>
        <AuthProvider>
          <LayoutProvider>
            <>{children}</>
          </LayoutProvider>
        </AuthProvider>
      </ToastsProvider>
    </QueryProvider>
  </ThemeProvider>
);
