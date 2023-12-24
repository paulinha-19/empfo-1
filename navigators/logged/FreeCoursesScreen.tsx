import React from "react";
import { SafeAreaView, Text, Image, StyleSheet, View } from "react-native";
import * as Animatable from "react-native-animatable";
import { FreeCourses } from "../../components/FreeCourses";
import { dataFreeCourses } from "../../utils/dataOther";

export const FreeCoursesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.logoHome}>
        <Image
          style={styles.sizeHeader}
          source={require("../../assets/logged/curso.png")}
        />
      </Animatable.View>
      <View>
        <Text style={styles.title}>Onde buscar cursos gratuitos?</Text>
        <Text style={styles.subtitle}>
          Escolha a opção que deseja conhecer e seja direcionado (a) para a
          plataforma do curso
        </Text>
      </View>
      <FreeCourses data={dataFreeCourses} />
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
    paddingTop: 30,
    paddingBottom: 20,
  },
  containerContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  content: {
    width: "100%",
  },
  title: {
    color: "#FED74D",
    fontSize: 18,
    fontWeight: "600",
    width: "80%",
    textAlign: "center",
    paddingStart: 80,
    paddingBottom: 20,
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
});
