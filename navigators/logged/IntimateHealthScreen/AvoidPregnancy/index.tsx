import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  Animated,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { dateMethods } from "../../../../utils/dataAccordion";
import { Accordion } from "../../../../components/Accordion";

export const AvoidPregnancyScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.logoHome}>
        <Image
          style={styles.sizeHeader}
          source={require("../../../../assets/logged/penties.png")}
        />
      </Animatable.View>
      <View style={styles.content}>
        <View style={styles.containerContent}>
          <Image
            style={styles.imagesHome}
            source={require("../../../../assets/logged/esperma.png")}
          />
          <Text style={styles.title}>
            Quer evitar a gravidez? Aprenda aqui!
          </Text>
        </View>
        <Text style={styles.subtitle}>
          No Brasil, mesmo sem a presença dos pais ou responsáveis, os
          adolescentes a partir de 12 anos podem procurar a unidade de saúde
          mais próxima para se informar sobre os cuidados em saúde, e em
          conversa com os profissionais de saúde, podem diminuir dúvidas e
          ansiedade, tornando-se mais seguros.
        </Text>
      </View>
      <View style={styles.content}>
        <Accordion data={dateMethods} />
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
  },
  title: {
    color: "#f4f412",
    fontSize: 18,
    fontWeight: "600",
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
    backgroundColor: "yellow",
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
