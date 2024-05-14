import React from "react";
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

type LabelStyle = {
  color?: string;
  fontSize?: number;
  padding?: number;
  paddingBottom?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingLeft?: number;
  paddingStart?: number;
};

interface CustomInputProps extends TextInputProps {
  label?: string;
  labelStyle?: LabelStyle;
  errorMessage?: string;
  errorColor?: string;
  paddingBottom?: number;
  paddingTop?: number;
  placeholderColor?: string;
  inputTextColor?: string;
  borderColorInput?: string;
  setLastMenstruationDate?: React.Dispatch<React.SetStateAction<string>>;
  mask?: string;
  lastMenstruationDate?: string;
}

export function CustomInput({
  label = "",
  labelStyle,
  errorMessage,
  errorColor = "red",
  paddingBottom,
  paddingTop,
  placeholderColor,
  inputTextColor,
  borderColorInput,
  setLastMenstruationDate,
  mask,
  lastMenstruationDate,
  ...textInputProps
}: CustomInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={[labelStyle]}>{label}</Text>}
      {mask ? (
        <TextInputMask
          type={"datetime"}
          options={{
            format: mask,
          }}
          onChangeText={(text) => setLastMenstruationDate(text)}
          placeholderTextColor={placeholderColor}
          {...textInputProps}
          style={[styles.input, textInputProps.style]}
        />
      ) : (
        <TextInput
          {...textInputProps}
          placeholderTextColor={placeholderColor}
          style={[textInputProps.style, styles.input]}
        />
      )}
      {errorMessage && (
        <Text
          style={{
            color: errorColor,
            paddingTop: paddingTop | 2,
            paddingBottom: paddingBottom,
          }}
        >
          {errorMessage}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  input: {
    backgroundColor: "white",
    height: 50,
    color: "black",
  },
});
