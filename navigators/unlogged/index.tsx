import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens } from "../../screens/index";

const Stack = createNativeStackNavigator();

function Unloged() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={Screens.Login}
      />
      <Stack.Screen
        name="ForgotPassword"
        options={{ headerShown: false }}
        component={Screens.ForgotPassword}
      />
      <Stack.Screen
        name="RegisterAccount"
        options={{ headerShown: false }}
        component={Screens.RegisterAccount}
      />
    </Stack.Navigator>
  );
}

export default Unloged;
