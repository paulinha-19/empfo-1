import React from "react";
import { View, Text } from "react-native";

export const ListEmptyComponent = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text>Nenhum resultado encontrado</Text>
    </View>
  );
};
