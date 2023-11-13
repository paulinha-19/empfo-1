import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../../types/stack-type";

export const IntimateHealthScreen = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.logoHome}>
        <Image
          style={styles.sizeHeader}
          source={require("../../../assets/logged/penties.png")}
        />
      </Animatable.View>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => navigation.navigate("MenstrualCycle")}>
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../../assets/logged/ciclo-menstrual.png")}
            />
            <Text style={styles.textColor}>Conheça o seu ciclo menstrual</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AvoidPregnancy")}>
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../../assets/logged/esperma.png")}
            />
            <Text style={styles.textColor}>
              Quer evitar a gravidez? Aprenda aqui!
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("IntimateHealthProblem")}
        >
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../../assets/logged/problema-saude.png")}
            />
            <Text style={[styles.textColor, styles.textIntimateHealthGap]}>
              Será que eu tenho algum problema de saúde íntima?
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("BreastSelfTest")}>
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../../assets/logged/teste-seio.png")}
            />
            <Text style={styles.textColor}>
              Faça o seu auto teste dos seios
            </Text>
          </View>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  containerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    gap: 15,
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  whiteText: {
    color: "white",
    fontSize: 15,
    marginVertical: 10,
  },
  textColor: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
  },
  textIntimateHealthGap: {
    marginLeft: 10,
  },
  imagesHome: {
    width: 60,
    height: 60,
  },
});
