import React from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { StackTypes } from "../../types/stack-type";
import { ControlledInput } from "../../components/ControlledInput";
import tokenSchema from "../../schemas/token-password";
import { TokenData } from "../../types/auth-data";
import { AxiosError } from "axios";
import { tokenPasswordRequest } from "../../services/requests";

export const TokenPasswordScreen = () => {
  const navigation = useNavigation<StackTypes>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TokenData>({
    mode: "onChange",
    defaultValues: {
      token: "",
    },
    resolver: zodResolver(tokenSchema),
  });

  const onSubmit = async (data: TokenData) => {
    try {
    //   await tokenPasswordRequest(data);
      reset();
      navigation.navigate("ResetPassword");
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={{ padding: 20 }}>
          <Pressable onPress={() => navigation.goBack()}>
            <AntDesign name="leftcircleo" size={30} color="white" />
          </Pressable>
        </View>
        <View>
          <View style={styles.containerImage}>
            <Image
              source={require("../../assets/unlogged/token-password.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.containerDetails}>
            <Text style={styles.textForgot}>Olhe o seu email</Text>
            <Text style={styles.textForgotDetails}>
              Insira o código que foi enviado para o seu email
            </Text>
          </View>
          <View style={styles.containerInput}>
            <ControlledInput
              control={control}
              name="token"
              keyboardType="number-pad"
              placeholder="Insira o token de 6 digítos"
              placeholderColor="gray"
              labelStyle={{ fontSize: 18 }}
              label="Email"
              leftIcon={
                <MaterialIcons name="vpn-key" size={24} color="white" />
              }
              errorMessage={errors?.token?.message}
              borderColorInput="white"
              inputTextColor="white"
            />
          </View>
          <View style={[styles.containerButtonSubmit]}>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <Text style={styles.textButtonSubmit}>Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#000",
    flex: 1,
  },
  containerImage: {
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  containerDetails: {
    paddingHorizontal: 20,
  },
  containerInput: {
    paddingHorizontal: 20,
    paddingTop: 5,
  },
  textForgot: {
    color: "#fff",
    fontSize: 30,
    paddingTop: 10,
  },
  textForgotDetails: {
    color: "#fff",
    paddingTop: 5,
  },
  containerButtonSubmit: {
    padding: 15,
    backgroundColor: "#5E17EB",
    marginHorizontal: 20,
    marginTop: 15,
  },
  textButtonSubmit: {
    color: "white",
    textAlign: "center",
  },
});
