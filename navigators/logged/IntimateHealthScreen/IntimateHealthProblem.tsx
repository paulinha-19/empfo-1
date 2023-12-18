import React from "react";
import { SafeAreaView, Text, Image, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { dateIntimateHealthProblem } from "../../../utils/dataAccordion";
import { Accordion } from "../../../components/Accordion";

export const IntimateHealthProblemScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.logoHome}>
        <Image
          style={styles.sizeHeader}
          source={require("../../../assets/logged/penties.png")}
        />
      </Animatable.View>
      <View style={styles.content}>
        <View style={styles.containerContent}>
          <Image
            style={styles.imagesHome}
            source={require("../../../assets/logged/problema-saude.png")}
          />
          <Text style={styles.title}>
            Será que eu tenho algum problema de saúde íntima?
          </Text>
        </View>
      </View>
      <View style={styles.content}>
        <Accordion data={dateIntimateHealthProblem} />
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
  containerLogo: {
    marginLeft: 10,
    marginTop: 10,
  },
  sizeLogo: {
    width: 50,
    height: 50,
  },
  sizeHeader: {
    width: 80,
    height: 80,
  },
  logoHome: {
    alignItems: "center",
    marginTop: 20,
  },
  containerContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingStart: 25
  },
  content: {
    width: "100%",
    paddingBottom: 30,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    width: "80%",
    paddingStart: 10,
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 50,
    paddingBottom: 30,
  },
  imagesHome: {
    width: 60,
    height: 60,
  },
  input: {
    backgroundColor: "white",
    color: "black",
    borderRadius: 8,
    padding: 10,
  },
  resultText: {
    color: "#fff",
    fontSize: 16,
    paddingTop: 20,
  },
  contentResult: {
    width: "95%",
  },
  buttonTextResult: {
    color: "black",
    backgroundColor: "#FED74D",
    padding: 15,
    fontSize: 16,
    textAlign: "center",
  },
  containerAccordion: {
    paddingVertical: "2%",
    paddingHorizontal: "3%",
    height: "100%",
    backgroundColor: "#e7e7e7",
  },
});
