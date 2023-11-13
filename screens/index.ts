import { LoginScreen } from "../navigators/unlogged/LoginScreen";
import { ForgotPasswordScreen } from "../navigators/unlogged/ForgotPasswordScreen";
import { RegisterAccountScreen } from "../navigators/unlogged/RegisterAccountScreen";
import { TokenPasswordScreen } from "../navigators/unlogged/TokenPasswordScreen";
import { ResetPasswordScreen } from "../navigators/unlogged/ResetPasswordScreen";
import { HomeScreen } from "../navigators/logged/HomeScreen";
export const Screens = {
  Login: LoginScreen,
  ForgotPassword: ForgotPasswordScreen,
  TokenPassword: TokenPasswordScreen,
  ResetPassword: ResetPasswordScreen,
  RegisterAccount: RegisterAccountScreen,

  // user logged
  Home: HomeScreen
};
