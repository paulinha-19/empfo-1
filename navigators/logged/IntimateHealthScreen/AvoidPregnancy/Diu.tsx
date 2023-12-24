import React from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from "react-native";

export const DiuScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.infoContainer}>
          <View style={styles.containerImage}>
            <Image
              style={styles.image}
              source={require("../../../../assets/logged/diu.png")}
            />
          </View>
          <View style={styles.textInfoContainer}>
            <Text style={{ color: "black", fontSize: 16, fontWeight: "600" }}>
              Diu
            </Text>
          </View>
          <Text style={styles.subtitle}>
            O Dispositivo intra-uterino – ou DIU é um pequeno objeto de plástico
            revestido de cobre, colocado no interior da cavidade uterina com
            fins contraceptivos, de caráter temporário e reversível. Ele não
            provoca aborto, porque atua antes da fecundação. É um método
            altamente eficaz, que não apresenta os efeitos colaterais.
          </Text>
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
  image: {
    width: 60,
    height: 60,
  },
  containerImage: {
    paddingTop: 40,
  },
  infoContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  textInfoContainer: {
    backgroundColor: "#73BDA8",
    padding: 10,
    marginTop: 20,
  },
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
