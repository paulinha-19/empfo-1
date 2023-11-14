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
import forgotSchema from "../../schemas/forgot-password";
import { ForgotPasswordData } from "../../interface/AuthProps";
import { AxiosError } from "axios";
import { forgotPasswordRequest } from "../../services/requests";

export const ForgotPasswordScreen = () => {
  const navigation = useNavigation<StackTypes>();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ForgotPasswordData>({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = async (data: ForgotPasswordData) => {
    // try {
    //   await forgotPasswordRequest(data);
    //   reset();
    //   navigation.navigate("TokenPassword");
    // } catch (error) {
    //   const err = error as AxiosError;
    //   return err;
    // }
    if(data.email === "teste@gmail.com"){
      navigation.navigate("TokenPassword")
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
          <Image
            source={require("../../assets/unlogged/forgot-pass.png")}
            style={styles.image}
          />
          <View style={styles.containerDetails}>
            <Text style={styles.textForgot}>Esqueceu a senha?</Text>
            <Text style={styles.textForgotDetails}>
              Não se preocupe! Insira o email associado à sua conta
            </Text>
          </View>
          <View style={styles.containerInput}>
            <ControlledInput
              control={control}
              name="email"
              placeholder="Insira seu email"
              placeholderColor="gray"
              labelStyle={{ fontSize: 18 }}
              label="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              leftIcon={<MaterialIcons name="email" size={26} color="white" />}
              errorMessage={errors?.email?.message}
              borderColorInput="white"
              inputTextColor="white"
            />
          </View>
          <View style={[styles.containerButtonSubmit]}>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <Text style={styles.textButtonSubmit}>Entrar</Text>
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
  image: {
    width: "100%",
    height: 230,
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
    marginTop: 15
  },
  textButtonSubmit: {
    color: "white",
    textAlign: "center",
  },
});
