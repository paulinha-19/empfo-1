import { LoginScreen } from "../navigators/unlogged/LoginScreen";
import { ForgotPasswordScreen } from "../navigators/unlogged/ForgotPasswordScreen";
import { RegisterAccountScreen } from "../navigators/unlogged/RegisterAccountScreen";
import { TokenPasswordScreen } from "../navigators/unlogged/TokenPasswordScreen";
import { ResetPasswordScreen } from "../navigators/unlogged/ResetPasswordScreen";
import { HomeScreen } from "../navigators/logged/HomeScreen";
import { AskForHelpScreen } from "../navigators/logged/AskForHelpScreen";
import { IntimateHealthScreen } from "../navigators/logged/IntimateHealthScreen";
import { MenstrualCycleScreen } from "../navigators/logged/IntimateHealthScreen/MenstrualCycleScreen";
import { AvoidPregnancyScreen } from "../navigators/logged/IntimateHealthScreen/AvoidPregnancy";
import { MenScreen } from "../navigators/logged/IntimateHealthScreen/AvoidPregnancy/Men";
import { WomanScreen } from "../navigators/logged/IntimateHealthScreen/AvoidPregnancy/Woman";
import { ContraceptiveScreen } from "../navigators/logged/IntimateHealthScreen/AvoidPregnancy/Contraceptive";
import { DiuScreen } from "../navigators/logged/IntimateHealthScreen/AvoidPregnancy/Diu";
import { IntimateHealthProblemScreen } from "../navigators/logged/IntimateHealthScreen/IntimateHealthProblem";
import { BreastSelfTestScreen } from "../navigators/logged/IntimateHealthScreen/BreastSelfTest";
import MapScreen from "../navigators/logged/MapScreen";
export const Screens = {
  Login: LoginScreen,
  ForgotPassword: ForgotPasswordScreen,
  TokenPassword: TokenPasswordScreen,
  ResetPassword: ResetPasswordScreen,
  RegisterAccount: RegisterAccountScreen,

  // user logged
  Home: HomeScreen,
  AskForHelp: AskForHelpScreen,
  IntimateHealth: IntimateHealthScreen,
  MenstrualCycle: MenstrualCycleScreen,
  AvoidPregnancy: AvoidPregnancyScreen,
  Men: MenScreen,
  Woman: WomanScreen,
  Contraceptive: ContraceptiveScreen,
  Diu: DiuScreen,
  IntimateHealthProblem: IntimateHealthProblemScreen,
  BreastSelfTest: BreastSelfTestScreen,
  Mapa: MapScreen,
};
