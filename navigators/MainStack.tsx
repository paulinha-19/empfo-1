import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import Unloged from "./unlogged";

function MainStack() {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      {isAuthenticated ? <Text>Logado</Text> : <Unloged />}
    </NavigationContainer>
  );
}

export default MainStack;
