import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { openURL } from "expo-linking";

export const AskForHelpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.logoHome}>
        <Image
          style={styles.sizeHeader}
          source={require("../../assets/logged/children.png")}
        />
      </Animatable.View>
      <View style={styles.containerContent}>
        <Text style={[styles.cityText]}>ANGRA DOS REIS</Text>
        <View style={styles.content}>
          <Text style={styles.whiteText}>
            Rua Onze de Junho, nº 51, Centro, Angra dos Reis CEP: 23900-170
          </Text>
          <View style={styles.rowContainer}>
            <Text style={styles.whiteText}>Sede: </Text>
            <TouchableOpacity onPress={() => openURL("tel:2433653522")}>
              <Text style={styles.phoneNumber}>(24) 3365-3522 </Text>
            </TouchableOpacity>
            <Text style={styles.phoneNumber}>ou </Text>
            <TouchableOpacity onPress={() => openURL("tel:2433656452")}>
              <Text style={styles.phoneNumber}>(24) 3365-6452</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.whiteText}>Plantão: </Text>
            <TouchableOpacity onPress={() => openURL("tel:24999250498")}>
              <Text style={styles.phoneNumber}>(24) 99925-0498</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.whiteText}>Email: </Text>
            <TouchableOpacity
              onPress={() => openURL("mailto:conselhotutelar@angra.rj.gov.br")}
            >
              <Text style={styles.whiteText}>
                conselhotutelar@angra.rj.gov.br
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.whiteText}>
              Coordenador: Argentino Augusto Rosa Filho
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.containerContent}>
        <Text style={[styles.cityText]}>APERIBÉ</Text>
        <View style={styles.content}>
          <Text style={styles.whiteText}>
            Rua Francisco Henrique de Souza, nº 535, Aperibé, CEP: 28495000
          </Text>
          <View style={styles.rowContainer}>
            <Text style={styles.whiteText}>Sede: </Text>
            <TouchableOpacity onPress={() => openURL("tel:2238641312")}>
              <Text style={styles.phoneNumber}>(22) 38641312</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.whiteText}>Plantão: </Text>
            <TouchableOpacity onPress={() => openURL("tel:220988785725")}>
              <Text style={styles.phoneNumber}>(22) 0988785725</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.whiteText}>Email: </Text>
            <TouchableOpacity
              onPress={() =>
                openURL("mailto:aperibe.conselhotutelar@gmail.com")
              }
            >
              <Text style={styles.whiteText}>
                aperibe.conselhotutelar@gmail.com
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.whiteText}>
              Coordenador/Presidente: Raquel Dias Mota
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
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
  },
  containerContent: {
    width: "100%",
  },
  content: {
    maxWidth: Dimensions.get("screen").width - 100,
    marginLeft: "auto",
    marginRight: "auto",
  },
  cityText: {
    color: "#FED74D",
    fontWeight: "700",
    fontSize: 20,
    textAlign: "center",
    paddingTop: 15,
  },
  whiteText: {
    color: "white",
    fontSize: 15,
    marginVertical: 10,
  },
  rowContainer: {
    flexDirection: "row",
  },
  phoneNumber: { color: "#4ea0ec", marginVertical: 10 },
  textColor: {
    color: "white",
    fontSize: 14,
    width: "80%",
    textAlign: "center",
  },
  imagesHome: {
    width: 60,
    height: 60,
  },
});
