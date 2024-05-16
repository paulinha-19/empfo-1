import React, { ReactNode, useState } from "react";
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
  borderColorInputFocus?: string;
  borderColorInputBlur?: string;
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
  borderColorInputFocus,
  borderColorInputBlur,
  ...textInputProps
}: UseControllerProps<FormType> & AditionalInput) {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  
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
          {label && <Text style={[labelStyle]}>{label}</Text>}
          <TextInput
            {...textInputProps}
            onChangeText={field.onChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            value={field.value}
            placeholderTextColor={placeholderColor}
            style={[
              {
                color: inputTextColor,
                borderColor: isFocused ? borderColorInputFocus : borderColorInputBlur,
              },
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
    top: 40,
  },
  iconRight: {
    right: 8,
    top: 40,
  },
  input: {
    height: 50,
    borderWidth: 2,
    paddingLeft: 40,
    fontSize: 16,
  },
});
