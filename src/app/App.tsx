"use client";

import { FC, PropsWithChildren } from "react";
import AuthProvider from "./providers/AuthProvider";
import { ProtectedRoutesProvider } from "./providers/ProtectedRoutesProvider";
import QueryProvider from "./providers/QueryProvider";
import ThemeProvider from "./providers/ThemeProvider";
import ToastsProvider from "./providers/ToastsProvider";

export const App: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider>
      <QueryProvider>
        <ToastsProvider>
          <AuthProvider>
            <ProtectedRoutesProvider>
              <>{children}</>
            </ProtectedRoutesProvider>
          </AuthProvider>
        </ToastsProvider>
      </QueryProvider>
    </ThemeProvider>
  );
};
