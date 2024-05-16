import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../hooks/useAuth";
import Unloged from "./unlogged";
import Logged from "./logged";

function MainStack() {
  const { isAuthenticated } = useAuth();
  return (
    <NavigationContainer>
      {isAuthenticated ? <Logged /> : <Unloged />}
    </NavigationContainer>
  );
}

export default MainStack;
