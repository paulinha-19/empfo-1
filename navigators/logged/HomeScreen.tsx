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
import { openURL } from "expo-linking";
import { useAuth } from "../../hooks/useAuth";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../types/stack-type";

export const HomeScreen = () => {
  const { user } = useAuth();
  const navigation = useNavigation<StackTypes>();

  return (
    <SafeAreaView style={styles.container}>
      <Animatable.View animation="fadeInLeft" style={styles.logoHome}>
        <Image
          style={styles.sizeLogo}
          source={require("../../assets/unlogged/logo-2.png")}
        />
      </Animatable.View>
      <View style={styles.content}>
        <TouchableOpacity
          onPress={() =>
            openURL(
              "https://play.google.com/store/apps/details?id=redemulher.pmerj.rj.gov.br"
            )
          }
        >
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../assets/logged/rede-mulher.webp")}
            />
            <Text style={styles.textColor}>
              Delegacia on-line, botão do pânico, medida protetiva, Centro de
              Atendimento à Mulher em situação de violência
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("AskForHelp")}>
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../assets/logged/children.png")}
            />
            <Text style={styles.textColor}>
              Você é menor de idade e precisa de ajuda?
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("IntimateHealth")}>
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../assets/logged/penties.png")}
            />
            <Text style={styles.textColor}>Saúde íntima</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Mapa")}>
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../assets/logged/map.png")}
            />
            <Text style={styles.textColor}>
              Precisa correr para um lugar pra buscar ajuda imediata? Veja no
              mapa
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("ViolenceAgainstWomen")}
        >
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../assets/logged/violencia-1.png")}
            />
            <Text style={styles.textColor}>
              Saiba quais são os tipos de violência contra a mulher
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("PsychologicalSupport")}
        >
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../assets/logged/psicologico-2.png")}
            />
            <Text style={styles.textColor}>
              Tá precisando de um apoio psicológico?
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("FreeCourses")}>
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../assets/logged/curso.png")}
            />
            <Text style={styles.textColor}>
              Quer aprender uma atividade que te traga renda?
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
  logoHome: {
    alignItems: "center",
    paddingTop: 15,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  containerContent: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  textColor: {
    color: "white",
    fontSize: 14,
    width: "80%",
    textAlign: "center",
  },
  sizeLogo: {
    width: 100,
    height: 100,
  },
  imagesHome: {
    width: 60,
    height: 60,
  },
});
