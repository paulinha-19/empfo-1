import { createContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import {
  IAuthContext,
  IAuthProvider,
  UserDataType,
  RegisterData,
  ForgotPasswordData,
} from "../interface/AuthProps";
import { AuthData, ForgotPassword } from "../types/auth-data";
import {
  RegisterRequest,
  signInRequest,
  forgotPasswordRequest,
} from "../services/requests";
import { Alert } from "react-native";

export const AuthContext = createContext({} as IAuthContext);
export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<UserDataType | null>(null);
  const [email, setEmail] = useState<ForgotPasswordData | null>(null);

  const isAuthenticated = !!user;

  const getToken = async () => {
    const token = await SecureStore.getItemAsync("token");
    if (token) {
      setUser({ token, message: "" });
    } else {
      console.log("Nenhum usuário logado");
    }
  };
  useEffect(() => {
    getToken();
  }, []);

  const signIn = async ({ email, password }: AuthData) => {
    const { data } = await signInRequest({
      email,
      password,
    });
    const { token, message } = data;
    await SecureStore.setItemAsync("token", token);
    setUser(data);
  };
  const onRegister = async ({ email, password }: RegisterData) => {
    const { data } = await RegisterRequest({
      email,
      password,
    });
    const { message } = data;
    Alert.alert(message);
  };

  const forgotPassword = async ({ email }: ForgotPassword) => {
    await forgotPasswordRequest({
      email,
    });
    setEmail({ email });
  };

  const signOut = async () => {
    await SecureStore.deleteItemAsync("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        email,
        setEmail,
        isAuthenticated,
        signIn,
        forgotPassword,
        onRegister,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
