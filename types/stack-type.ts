import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type StackNavigation = {

  // user unlogged
  Login: undefined;
  ForgotPassword: undefined;
  TokenPassword: undefined;
  ResetPassword: undefined;
  RegisterAccount: undefined;

  // user logged
  Home: undefined;
  AskForHelp: undefined;
  IntimateHealth: undefined;
  MenstrualCycle: undefined;
  AvoidPregnancy: undefined;
  Men: undefined;
  Woman: undefined;
  Contraceptive: undefined;
  Diu: undefined;
  IntimateHealthProblem: undefined;
  BreastSelfTest: undefined;
  Mapa: undefined;
  ViolenceAgainstWomen: undefined;
  PsychologicalSupport: undefined;
  FreeCourses: undefined;
};

export type StackTypes = NativeStackNavigationProp<StackNavigation>;
