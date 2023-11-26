import { api } from "./api";
import { AuthData, TokenData, ResetData } from "../types/auth-data";
import { ForgotPasswordData, RegisterData } from "../interface/AuthProps";
import { AxiosError } from "axios";
import { Alert } from "react-native";

interface ErrorResponse {
  message: string;
}

export const signInRequest = async (data: AuthData) => {
  try {
    const response = await api.post("login?AUTHORIZATION=PRODUCTION", data);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    let errorMessage = "";
    if (errors.response && errors.response.data) {
      errorMessage = (errors.response.data as ErrorResponse).message;
      Alert.alert(errorMessage);
      throw new Error(errorMessage);
    } else {
      Alert.alert(errors?.message);
      throw new Error(errors?.message);
    }
  }
};

export const RegisterRequest = async (data: RegisterData) => {
  try {
    const response = await api.post(
      `registerUsers?AUTHORIZATION=production`,
      data
    );
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    let errorMessage = "";
    if (errors.response && errors.response.data) {
      errorMessage = (errors.response.data as ErrorResponse).message;
      throw new Error(errorMessage);
    } else {
      Alert.alert(errors?.message);
      throw new Error(errors?.message);
    }
  }
};

export const forgotPasswordRequest = async (data: ForgotPasswordData) => {
  try {
    const { email } = data;
    const response = await api.get(`forgotPassword/${email}`, {
      headers: {
        AUTHORIZATION: "production",
      },
    });
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    let errorMessage = "";
    if (errors.response && errors.response.data) {
      errorMessage = (errors.response.data as ErrorResponse).message;
      Alert.alert(errorMessage);
      throw new Error(errorMessage);
    } else {
      Alert.alert(errors?.message);
      throw new Error(errors?.message);
    }
  }
};

export const tokenPasswordRequest = async (data: TokenData) => {
  try {
    const { token } = data;
    const response = await api.get(`forgotWithToken/${token}`, {
      headers: {
        AUTHORIZATION: "production",
      },
    });
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    let errorMessage = "";
    if (errors.response && errors.response.data) {
      errorMessage = (errors.response.data as ErrorResponse).message;
      Alert.alert(errorMessage);
      throw new Error(errorMessage);
    } else {
      Alert.alert(errors?.message);
      throw new Error(errors?.message);
    }
  }
};

export const resetPasswordRequest = async (
  newPassword: ResetData,
  email: string
) => {
  try {
    const response = await api.put(`resetPassword/${email}`, newPassword);
    const {
      data: { message },
    } = response || {};
    Alert.alert(message);
    return response;
  } catch (error) {
    const errors = error as AxiosError;
    let errorMessage = "";
    if (errors.response && errors.response.data) {
      errorMessage = (errors.response.data as ErrorResponse).message;
      Alert.alert(errorMessage);
      throw new Error(errorMessage);
    } else {
      Alert.alert(errors?.message);
      throw new Error(errors?.message);
    }
  }
};
