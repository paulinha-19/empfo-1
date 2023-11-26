import React, { ReactNode } from "react";
import { AuthData } from "../types/auth-data";

export type UserDataType = {
  token: string;
  message: string;
};

export type RegisterData = {
  password: string;
  email: string;
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
  forgotPassword: (data: ForgotPasswordData) => Promise<void>;
  signOut: () => Promise<void>;
  onRegister: (data: RegisterData) => Promise<void>;
  user: UserDataType | null;
  setUser: React.Dispatch<React.SetStateAction<UserDataType | null>>;
  email: ForgotPasswordData | null;
  setEmail: React.Dispatch<React.SetStateAction<ForgotPasswordData | null>>;
}