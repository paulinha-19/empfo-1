import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
} from "react-native";
import ZoomableImage from "../../../../components/ZoomableImage";

export const WomanScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <View style={styles.containerImage}>
            <Image
              style={styles.image}
              source={require("../../../../assets/logged/preservativo-feminino.png")}
            />
          </View>
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
    paddingTop: 20,
    paddingBottom: 15,
  },
  image: {
    width: 60,
    height: 60,
  },
  containerImage: {
    paddingTop: 20,
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  textInfoContainer: { backgroundColor: "#73BDA8", padding: 10, marginTop: 10},
  containerCapation: {
    width: "50%",
  },
  caption: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",

  },
});
