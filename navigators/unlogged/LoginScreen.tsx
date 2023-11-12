import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../types/stack-type";
import { AuthData } from "../../types/auth-data";
import formSchema from "../../schemas/form";
import { ControlledInput } from "../../components/ControlledInput";
import { useAuth } from "../../hooks/useAuth";
import { AxiosError } from "axios";

export const LoginScreen = () => {
  const navigation = useNavigation<StackTypes>();
  const [showPassword, setShowPassword] = useState(true);
  const { signIn } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AuthData>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: AuthData) => {
    try {
      await signIn(data);
      reset();
    } catch (error) {
      const err = error as AxiosError;
      return err;
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const goForgotPassword = () => {
    navigation.navigate("ForgotPassword");
    reset();
  };

  const goRegisterAccount = () => {
    navigation.navigate("RegisterAccount");
    reset();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Animatable.View animation="fadeInLeft" style={styles.headerForm}>
          <Image
            style={styles.logo}
            source={require("../../assets/login/logo-2.png")}
          />
          <Text style={styles.textHeader}>EMPFO</Text>
        </Animatable.View>
        <Animatable.View animation="fadeInUp" style={styles.containerForm}>
          <View style={styles.contaienerInputs}>
            <ControlledInput
              control={control}
              name="email"
              placeholder="Insira seu email"
              placeholderColor="gray"
              labelStyle={{ fontSize: 18 }}
              label="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              leftIcon={<MaterialIcons name="email" size={26} color="black" />}
              errorMessage={errors?.email?.message}
            />
            <View style={styles.contentInput}>
              <ControlledInput
                control={control}
                name="password"
                placeholder="Insira sua senha"
                labelStyle={{ fontSize: 18 }}
                placeholderColor="gray"
                label="Senha"
                secureTextEntry={showPassword}
                leftIcon={
                  <Ionicons name="lock-closed" size={24} color="black" />
                }
                rightIcon={
                  <Ionicons
                    name={showPassword ? "eye" : "eye-off"}
                    size={24}
                    color="black"
                    onPress={toggleShowPassword}
                  />
                }
                errorMessage={errors?.password?.message}
              />
            </View>
            <View style={styles.containerForgotPassword}>
              <TouchableOpacity onPress={goForgotPassword}>
                <Text style={styles.forgotPasswordLink}>
                  Esqueci minha senha
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonSubmit}>
              <TouchableOpacity onPress={handleSubmit(onSubmit)}>
                <Text style={styles.textButtonSubmit}>Entrar</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.containerCreateAccout}>
              <Text style={[styles.textCreateAccout]}>
                Ainda não tem uma conta?
              </Text>
              <TouchableOpacity onPress={goRegisterAccount}>
                <Text style={styles.textClickHere}>Clique aqui</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animatable.View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  containerForm: {
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: "center",
  },
  contaienerInputs: {
    width: "85%",
    height: "100%",
    paddingTop: 25,
  },
  contentInput: {
    paddingTop: 12,
  },
  borderInputs: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#5E17EB",
  },
  textColor: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
  textHeader: {
    color: "white",
    textAlign: "center",
    fontWeight: "800",
    fontSize: 20,
    paddingBottom: 40,
  },
  headerForm: {
    alignItems: "center",
    paddingTop: 15,
  },
  containerForgotPassword: {
    marginVertical: 18,
  },
  forgotPasswordLink: {
    color: "#5E17EB",
    fontSize: 16,
  },
  buttonSubmit: { padding: 15, backgroundColor: "#5E17EB" },
  textButtonSubmit: {
    color: "white",
    textAlign: "center",
  },
  containerCreateAccout: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 15,
  },
  textClickHere: {
    color: "#5E17EB",
    fontSize: 16,
    paddingStart: 5,
  },
  textCreateAccout: { fontSize: 16 },
  logo: {
    width: 100,
    height: 100,
  },
});
