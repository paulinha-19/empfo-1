import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { Feather } from "@expo/vector-icons";

interface ZoomableImageProps {
  source: ImageSourcePropType;
  caption?: string;
}

const ZoomableImage = ({ source, caption }: ZoomableImageProps) => {
  const [scale] = useState(new Animated.Value(1));
  const [translateX] = useState(new Animated.Value(0));
  const [translateY] = useState(new Animated.Value(0));
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      if (isZoomed) {
        let newTranslateX = gestureState.dx + lastX;
        let newTranslateY = gestureState.dy + lastY;

        const maxTranslateX = (Dimensions.get("screen").width - 200) / 2;
        const maxTranslateY = (Dimensions.get("screen").height - 600) / 2;

        newTranslateX = Math.max(
          -maxTranslateX,
          Math.min(maxTranslateX, newTranslateX)
        );
        newTranslateY = Math.max(
          -maxTranslateY,
          Math.min(maxTranslateY, newTranslateY)
        );

        translateX.setValue(newTranslateX);
        translateY.setValue(newTranslateY);
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      setLastX(gestureState.dx + lastX);
      setLastY(gestureState.dy + lastY);
    },
    onShouldBlockNativeResponder: () => false,
  });

  const resetPosition = () => {
    Animated.spring(translateX, {
      toValue: 0,
      useNativeDriver: false,
    }).start();

    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: false,
    }).start();

    setLastX(0);
    setLastY(0);
  };

  const handleZoom = (shouldZoom: boolean) => {
    const toValue = shouldZoom ? 2 : 1;
    setIsZoomed(shouldZoom);
    Animated.spring(scale, {
      toValue: toValue,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.imageContainer,
          {
            transform: [
              { translateX: translateX },
              { translateY: translateY },
              { scale: scale },
            ],
          },
        ]}
        {...panResponder.panHandlers}
      >
        <Image source={source} style={styles.image} />
      </Animated.View>
      <TouchableOpacity
        style={styles.zoomButton}
        onPress={() => handleZoom(true)}
      >
        <Feather name="zoom-in" size={25} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => {
          resetPosition();
          handleZoom(false);
        }}
      >
        <Feather name="zoom-out" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 20,
  },
  imageContainer: {
    width: Dimensions.get("screen").width - 200,
    height: Dimensions.get("screen").height - 600,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  buttonsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  resetButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  resetText: {
    color: "white",
  },
  zoomButton: {
    position: "absolute",
    bottom: 0,
    left: 60,
    backgroundColor: "#73BDA8",
    padding: 10,
    borderRadius: 5,
  },
  zoomText: {
    color: "white",
  },
});

export default ZoomableImage;
