import React from "react";
import { SafeAreaView, Text, Image, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { dateViolenceAgainstWomen } from "../../utils/dataAccordion";
import { Accordion } from "../../components/Accordion";

export const ViolenceAgainstWomenScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.logoHome}>
        <Image
          style={styles.sizeHeader}
          source={require("../../assets/logged/violencia-1.png")}
        />
      </Animatable.View>
      <View style={styles.containerContent}>
        <Text style={styles.title}>Tipos de violências contra a mulher</Text>
      </View>
      <Accordion data={dateViolenceAgainstWomen} />
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
  content: {
    width: "100%",
  },
  containerContent: {
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
    width: "80%",
    textAlign: "center",
    paddingBottom: 10,
  },
  imagesHome: {
    width: 60,
    height: 60,
  },
  containerAccordion: {
    paddingVertical: "2%",
    paddingHorizontal: "3%",
    height: "100%",
    backgroundColor: "#e7e7e7",
  },
});
