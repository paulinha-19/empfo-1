import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StackTypes } from "../../types/stack-type";
import { ControlledInput } from "../../components/ControlledInput";
import formSchema from "../../schemas/form";
import { useAuth } from "../../hooks/useAuth";
import { AxiosError } from "axios";
import { RegisterData } from "../../interface/AuthProps";

export const RegisterAccountScreen = () => {
  const navigation = useNavigation<StackTypes>();
  const [showPassword, setShowPassword] = useState(true);
  const { onRegister } = useAuth();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: RegisterData) => {
    try {
      await onRegister(data);
      reset();
      navigation.navigate("Login");
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.mainContainer}>
        <View>
          <View style={styles.containerImage}>
            <Image
              source={require("../../assets/unlogged/register-2.png")}
              style={styles.image}
            />
          </View>
          <View style={styles.containerDetails}>
            <Text style={styles.textForgot}>Cadastre-se</Text>
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
              borderColorInputFocus="#FED74D"
              borderColorInputBlur="white"
              inputTextColor="white"
            />
            <ControlledInput
              control={control}
              name="password"
              placeholder="Insira sua senha"
              labelStyle={{ fontSize: 18 }}
              placeholderColor="gray"
              label="Senha"
              secureTextEntry={!showPassword}
              leftIcon={<Ionicons name="lock-closed" size={24} color="white" />}
              rightIcon={
                <Ionicons
                  name={showPassword ? "eye" : "eye-off"}
                  size={24}
                  color="white"
                  onPress={toggleShowPassword}
                />
              }
              errorMessage={errors?.password?.message}
              borderColorInputFocus="#FED74D"
              borderColorInputBlur="white"
              inputTextColor="white"
            />
          </View>
          <View style={styles.buttonSubmit}>
            <TouchableOpacity onPress={handleSubmit(onSubmit)}>
              <Text style={styles.textButtonSubmit}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerCreateAccout}>
            <Text style={styles.textJoinedBefore}>Já tem cadastro? </Text>
            <Text
              onPress={() => navigation.navigate("Login")}
              style={styles.textLink}
            >
              Clique aqui
            </Text>
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
    marginTop: 30,
  },
  image: {
    width: "50%",
    height: 200,
  },
  containerDetails: {
    paddingHorizontal: 20,
  },
  containerInput: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  contentInput: {
    paddingTop: 12,
  },
  textForgot: {
    color: "#fff",
    fontSize: 30,
  },
  helperText: {
    color: "#fff",
    paddingHorizontal: 10,
  },
  containerButtonForm: {
    paddingHorizontal: 20,
    paddingTop: 25,
  },
  buttonSubmit: {
    padding: 15,
    backgroundColor: "#FED74D",
    marginHorizontal: 20,
    marginTop: 15,
  },
  textButtonSubmit: {
    color: "black",
    textAlign: "center",
  },
  containerCreateAccout: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
  textJoinedBefore: { color: "#fff", fontSize: 16 },
  textLink: {
    color: "#fff",
    fontSize: 16,
  },
});
