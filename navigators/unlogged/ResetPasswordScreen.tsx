import React, { useState } from "react";
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AntDesign } from "@expo/vector-icons";
import { ControlledInput } from "../../components/ControlledInput";
import resetPasswordSchema from "../../schemas/reset-password";
import { ResetData } from "../../types/auth-data";
import {
  resetPasswordRequest
} from "../../services/requests";
import { AxiosError } from "axios";
import { useAuth } from "../../hooks/useAuth";

export const ResetPasswordScreen = () => {
  const { email } = useAuth();
  const navigation = useNavigation<any>();
  const [showPassword, setShowPassword] = useState(true);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ResetData>({
    mode: "onChange",
    defaultValues: {
      newPassword: "",
    },
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetData) => {
    try {
      await resetPasswordRequest(data, email?.email);
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
    <SafeAreaView style={styles.mainContainer}>
      <View style={{ padding: 20 }}>
        <Pressable onPress={() => navigation.goBack()}>
          <AntDesign name="leftcircleo" size={30} color="white" />
        </Pressable>
      </View>
      <View>
        <View style={styles.containerImage}>
          <Image
            source={require("../../assets/unlogged/reset-password.png")}
            style={styles.image}
          />
        </View>
        <View style={styles.containerDetails}>
          <Text style={styles.textReset}>Resetar senha</Text>
          <Text style={styles.textResetDetails}>Insira a nova senha</Text>
        </View>
        <View style={styles.containerInput}>
          <ControlledInput
            control={control}
            name="newPassword"
            placeholder="Insira sua senha"
            labelStyle={{ fontSize: 18 }}
            placeholderColor="gray"
            label="Senha"
            secureTextEntry={showPassword}
            leftIcon={<Ionicons name="lock-closed" size={24} color="white" />}
            rightIcon={
              <Ionicons
                name={showPassword ? "eye" : "eye-off"}
                size={24}
                color="white"
                onPress={toggleShowPassword}
              />
            }
            errorMessage={errors?.newPassword?.message}
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
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#000",
    flex: 1,
  },
  image: {
    width: 250,
    height: 200,
  },
  containerImage: {
    alignItems: "center",
  },
  containerDetails: {
    paddingHorizontal: 20,
  },
  containerInput: {
    paddingHorizontal: 20,
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
  textReset: {
    color: "#fff",
    fontSize: 30,
  },
  textResetDetails: {
    color: "#fff",
    paddingTop: 10,
  },
  containerButtonForm: {
    paddingHorizontal: 20,
  },
});
