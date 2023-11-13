import React from "react";
import {
  TextInput,
  TextInputProps,
  Text,
  View,
  StyleSheet,
} from "react-native";

type LabelStyle = {
  color?: string;
  fontSize?: number;
  padding?: number;
  paddingBottom?: number;
  paddingTop?: number;
  paddingRight?: number;
  paddingLeft?: number;
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
}

export function CustomInput({
  label='',
  labelStyle,
  errorMessage,
  errorColor = "red",
  paddingBottom,
  paddingTop,
  placeholderColor,
  inputTextColor,
  borderColorInput,
  ...textInputProps
}: CustomInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={[labelStyle]}>{label}</Text>}
      <TextInput
        {...textInputProps}
        placeholderTextColor={placeholderColor}
        style={[
          { color: inputTextColor },
          textInputProps.style,
          styles.input,
          { borderColor: borderColorInput },
        ]}
      />
      {errorMessage && (
        <Text
          style={{
            color: errorColor,
            paddingTop: paddingTop | 2,
            paddingBottom: paddingBottom
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
