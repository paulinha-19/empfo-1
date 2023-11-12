import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackNavigation = {
  Login: undefined;
  ForgotPassword: undefined;
  RegisterAccount: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
