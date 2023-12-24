import React, { useState } from "react";
import { StyleSheet } from "react-native";

interface useFocusedInputProps {
  borderColorInput?: string;
}

export const useFocusedInput = ({ borderColorInput }: useFocusedInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const styles = StyleSheet.create({
    input: {
      borderColor: isFocused ? borderColorInput : "#888",
      borderWidth: 1,
      height: 48,
    },
  });

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return {
    isFocused,
    handleBlur,
    handleFocus,
    styles,
  };
};
