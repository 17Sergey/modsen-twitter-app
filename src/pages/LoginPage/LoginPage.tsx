"use client";

import LoginForm from "@/features/auth/LoginForm";
import { Suspense } from "react";

export const LoginPage = () => (
  <Suspense>
    <LoginForm />
  </Suspense>
);
