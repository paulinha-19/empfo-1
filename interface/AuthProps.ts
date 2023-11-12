import React, { ReactNode } from "react";
import { AuthData } from "../types/auth-data";

export type UserDataType = {
  token: string;
  message: string;
};

export type ForgotPasswordData = {
  email: string;
};

export interface IAuthProvider {
  children: ReactNode;
}

export interface IAuthContext {
  isAuthenticated: boolean;
  signIn: (data: AuthData) => Promise<void>;
  user: UserDataType | null;
  setUser: React.Dispatch<React.SetStateAction<UserDataType | null>>;
}
