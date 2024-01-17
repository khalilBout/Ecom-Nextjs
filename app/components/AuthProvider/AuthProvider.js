"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
// الموفر الذي يضم المصادقة علي تسجيل الدخول
const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;
