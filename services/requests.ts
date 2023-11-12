import { api } from "./api";
import { AuthData } from "../types/auth-data";
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
