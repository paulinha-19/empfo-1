import React, { ReactNode } from "react";
import { Controller, UseControllerProps, FieldValues } from "react-hook-form";
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
};

type AditionalInput = {
  label?: string;
  labelStyle?: LabelStyle;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  errorMessage?: string;
  errorColor?: string;
  paddingBottom?: number;
  paddingTop?: number;
  placeholderColor?: string;
  inputTextColor?: string;
  borderColorInput?: string;
} & TextInputProps;

export function ControlledInput<FormType extends FieldValues>({
  control,
  name,
  leftIcon,
  rightIcon,
  errorMessage,
  errorColor = "red",
  paddingBottom,
  paddingTop,
  label,
  labelStyle,
  placeholderColor,
  inputTextColor,
  borderColorInput,
  ...textInputProps
}: UseControllerProps<FormType> & AditionalInput) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <View style={styles.container}>
          {leftIcon && (
            <View style={[styles.iconContainer, styles.iconLeft]}>
              {leftIcon}
            </View>
          )}
          {label && (
            <Text style={[labelStyle]}>{label}</Text>
          )}
          <TextInput
            {...textInputProps}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            placeholderTextColor={placeholderColor}
            style={[
              { color: inputTextColor, borderColor: borderColorInput },
              textInputProps.style,
              styles.input,
            ]}
          />
          {rightIcon && (
            <View style={[styles.iconContainer, styles.iconRight]}>
              {rightIcon}
            </View>
          )}
          {errorMessage && (
            <Text
              style={{
                color: errorColor,
                paddingTop: paddingTop,
                paddingBottom: paddingBottom,
              }}
            >
              {errorMessage}
            </Text>
          )}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  iconContainer: {
    position: "absolute",
  },
  iconLeft: {
    left: 8,
    top: 30,
  },
  iconRight: {
    right: 8,
    top: 30,
  },
  input: {
    height: 50,
    borderWidth: 1,
    paddingLeft: 40,
    fontSize: 16,
  },
});
