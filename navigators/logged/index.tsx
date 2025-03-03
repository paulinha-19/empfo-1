import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";
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
          <Text onPress={signOut} style={{ color: "#fff" }}>
            Sair
          </Text>
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
        options={{
          title: "Precisa de ajuda?",
          headerTitleStyle: { fontSize: 16 },
        }}
      />
      <Stack.Group>
        <Stack.Screen
          name="IntimateHealth"
          component={Screens.IntimateHealth}
          options={{
            title: "Saúde íntima",
            headerTitleStyle: { fontSize: 16 },
          }}
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
            options={{
              title: "Aprenda a evitar a gradivez",
              headerTitleStyle: { fontSize: 16 },
            }}
          />
          <Stack.Screen
            name="Men"
            component={Screens.Men}
            options={{
              title: "Aprenda a evitar a gradivez",
              headerTitleStyle: { fontSize: 16 },
            }}
          />
          <Stack.Screen
            name="Woman"
            component={Screens.Woman}
            options={{
              title: "Aprenda a evitar a gradivez",
              headerTitleStyle: { fontSize: 16 },
            }}
          />
          <Stack.Screen
            name="Contraceptive"
            component={Screens.Contraceptive}
            options={{
              title: "Aprenda a evitar a gradivez",
              headerTitleStyle: { fontSize: 16 },
            }}
          />
          <Stack.Screen
            name="Diu"
            component={Screens.Diu}
            options={{
              title: "Aprenda a evitar a gradivez",
              headerTitleStyle: { fontSize: 16 },
            }}
          />
        </Stack.Group>
      </Stack.Group>
      <Stack.Screen
        name="Mapa"
        options={{
          title: "Peça ajuda",
          headerShown: false,
          headerTitleStyle: { fontSize: 16 },
        }}
        component={Screens.Mapa}
      />
      <Stack.Screen
        name="ViolenceAgainstWomen"
        options={{
          title: "Tipos de violências contra a mulher",
          headerTitleStyle: { fontSize: 16 },
        }}
        component={Screens.ViolenceAgainstWomen}
      />
      <Stack.Screen
        name="PsychologicalSupport"
        options={{
          title: "Onde buscar apoio psicológico?",
          headerTitleStyle: { fontSize: 16 },
        }}
        component={Screens.PsychologicalSupport}
      />
      <Stack.Screen
        name="FreeCourses"
        options={{ title: "" }}
        component={Screens.FreeCourses}
      />
    </Stack.Navigator>
  );
}

export default Logged;
