import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button } from "react-native";
import { Screens } from "../../screens/index";
import { useAuth } from "../../hooks/useAuth";

const Stack = createNativeStackNavigator();
function Logged() {
  const { signOut } = useAuth();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerRight: () => (
          <Button onPress={signOut} title="Sair" color="#000" />
        ),
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Screens.Home}
        options={{ title: "" }}
      />
    </Stack.Navigator>
  );
}

export default Logged;
