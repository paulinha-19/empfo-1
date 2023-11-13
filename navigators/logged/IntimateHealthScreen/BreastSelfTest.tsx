import React from "react";
import { SafeAreaView, Text, Image, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { WebView } from "react-native-webview";

export const BreastSelfTestScreen = () => {
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
            source={require("../../../assets/logged/teste-seio.png")}
          />
          <Text style={styles.title}>Faça o seu auto teste dos seios</Text>
        </View>
      </View>
      <WebView
        style={styles.containerVideo}
        source={{
          html: '<iframe width="100%" height="50%" src="https://www.youtube.com/embed/z1KanEmGwck?si=u4gH2gmCtV9NA7pl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
        }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
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
    paddingBottom: 20,
  },
  content: {
    flexDirection: "column",
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
    paddingBottom: 30,
  },
  imagesHome: {
    width: 60,
    height: 60,
  },
  player: {
    width: "100%",
    height: 180,
    marginTop: 48,
    backgroundColor: "",
  },
  containerVideo: {
    backgroundColor: "transparent",
  },
});
