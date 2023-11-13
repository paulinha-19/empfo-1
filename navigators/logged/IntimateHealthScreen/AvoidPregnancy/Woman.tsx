import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import ZoomableImage from "../../../../components/ZoomableImage";

export const WomanScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Animatable.View animation="fadeInLeft" style={styles.logoHome}>
        <Image
          style={styles.sizeHeader}
          source={require("../../../../assets/home/penties.png")}
        />
      </Animatable.View> */}
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
        <View style={styles.infoContainer}>
          <Image
            style={styles.imagesHome}
            source={require("../../../../assets/logged/preservativo-feminino.png")}
          />
          <View style={styles.textInfoContainer}>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
              Preservativo feminino
            </Text>
          </View>
          <Text style={styles.subtitle}>
            A camisinha feminina é uma “bolsa” feita de um plástico macio, o
            poliuretano, que é um material mais fino que o látex do preservativo
            masculino. Essa bolsa recebe o líquido que o homem libera na relação
            sexual, impedindo o contato direto dos espermatozóides com o canal
            vaginal e com o colo do útero da mulher, evitando assim a gravidez.
          </Text>
          <Text style={styles.title}>Como usar a camisinha masculina?</Text>
          <ZoomableImage
            source={require("../../../../assets/logged/woman.png")}
          />
          <View style={styles.containerCapation}>
            <Text style={styles.caption}>
              Caderneta de Saúde do Adolescente Ministério da Saúde
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
  },
  content: {
    alignItems: "center",
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
    paddingTop: 30,
    paddingBottom: 30,
  },
  imagesHome: {
    width: 60,
    height: 60,
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  textInfoContainer: { backgroundColor: "#73BDA8", padding: 10 },
  howUseTitle: {
    color: "#f4f412",
    fontSize: 18,
    fontWeight: "600",
  },
  imageInfo: {
    width: Dimensions.get("screen").width - 200,
    height: Dimensions.get("screen").height - 600,
  },
  containerCapation: {
    width: "50%",
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    paddingTop: 10,
  },
});
