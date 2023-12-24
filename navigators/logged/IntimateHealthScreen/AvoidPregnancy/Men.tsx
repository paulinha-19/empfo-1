import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";
import ZoomableImage from "../../../../components/ZoomableImage";

export const MenScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <View style={styles.containerImage}>
            <Image
              style={styles.image}
              source={require("../../../../assets/logged/preservativo-masculino.png")}
            />
          </View>
          <View style={styles.textInfoContainer}>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
              Preservativo masculino
            </Text>
          </View>
          <Text style={styles.subtitle}>
            No preservativo masculino ou camisinha é uma capa de borracha
            (látex) que, ao ser colocada sobre o pênis, evita a transmissão de
            infecções sexualmente transmissíveis (IST) e do vírus causador da
            aids, o HIV. A camisinha pode também evitar a gravidez, agindo assim
            como um eficiente método contraceptivo.
          </Text>
          <Text style={styles.title}>Como usar a camisinha masculina?</Text>
          <ZoomableImage
            source={require("../../../../assets/logged/man.png")}
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
    paddingBottom: 20,
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
  textInfoContainer: { backgroundColor: "#73bda8", padding: 10 },
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
    fontSize: 12,
    textAlign: "center",
    paddingTop: 10,
  },
});
