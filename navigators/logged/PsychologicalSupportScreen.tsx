import React from "react";
import { SafeAreaView, Text, Image, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { CardRoot } from "../../components/Card";

export const PsychologicalSupportScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.logoHome}>
        <Image
          style={styles.sizeHeader}
          source={require("../../assets/logged/psicologico-2.png")}
        />
      </Animatable.View>
      <View style={styles.content}>
        <CardRoot />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  sizeHeader: {
    width: 80,
    height: 80,
  },
  logoHome: {
    alignItems: "center",
  },
  containerContent: {
    flexDirection: "row",
    alignItems: "center"
  },
  content: {
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    width: "80%",
    textAlign: "center",
    paddingStart: 80,
    paddingBottom: 10,
  },
  imagesHome: {
    width: 60,
    height: 60,
  },
});
