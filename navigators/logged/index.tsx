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
          <Button onPress={signOut} title="Sair" color="#fff" />
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
      <Stack.Screen
        name="AskForHelp"
        component={Screens.AskForHelp}
        options={{ title: "Precisa de ajuda?" }}
      />
      <Stack.Group>
        <Stack.Screen
          name="IntimateHealth"
          component={Screens.IntimateHealth}
          options={{ title: "Saúde íntima" }}
        />
        <Stack.Screen
          name="MenstrualCycle"
          component={Screens.MenstrualCycle}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="IntimateHealthProblem"
          component={Screens.IntimateHealthProblem}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="BreastSelfTest"
          component={Screens.BreastSelfTest}
          options={{ title: "" }}
        />
        <Stack.Group>
          <Stack.Screen
            name="AvoidPregnancy"
            component={Screens.AvoidPregnancy}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="Men"
            component={Screens.Men}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="Woman"
            component={Screens.Woman}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="Contraceptive"
            component={Screens.Contraceptive}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="Diu"
            component={Screens.Diu}
            options={{ title: "" }}
          />
        </Stack.Group>
      </Stack.Group>
      <Stack.Screen
        name="Mapa"
        options={{ title: "Peça ajuda", headerShown: false }}
        component={Screens.Mapa}
      />
    </Stack.Navigator>
  );
}

export default Logged;
