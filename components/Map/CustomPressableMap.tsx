import React from "react";
import { Pressable, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LocationObject } from "expo-location";
import { CustomLocationObject } from "../../types/map";
import { LatLng } from "react-native-maps";

interface CustomPressableProps {
  stylesMapBox: Object;
  stylesMapText: Object;
  onPress: (
    currentLocation: LocationObject | null | undefined,
    markerLocation: CustomLocationObject | null,
    setMarkers: (markers: CustomLocationObject[] | null) => void,
    setMarkerLocation: (marker: CustomLocationObject | null) => void,
    setDistance: (distance: number) => void,
    setDuration: (duration: number) => void,
    setShowDirections: (show: boolean) => void,
    setOrigin: (origin: LatLng | null) => void,
    setDestination: (destination: LatLng | null) => void
  ) => void;
  currentLocation: LocationObject | null | undefined;
  markerLocation: CustomLocationObject | null;
  setMarkers: (markers: CustomLocationObject[] | null) => void;
  setMarkerLocation: (marker: CustomLocationObject | null) => void;
  setDistance: (distance: number) => void;
  setDuration: (duration: number) => void;
  setShowDirections: (show: boolean) => void;
  setOrigin: (origin: LatLng | null) => void;
  setDestination: (destination: LatLng | null) => void;
  icon: keyof typeof FontAwesome.glyphMap;
  label: string;
}

const CustomPressableMap = ({
  stylesMapBox,
  stylesMapText,
  onPress,
  currentLocation,
  markerLocation,
  setMarkers,
  setMarkerLocation,
  setDistance,
  setDuration,
  setShowDirections,
  setOrigin,
  setDestination,
  icon = "shield",
  label = "",
}: CustomPressableProps) => {
  return (
    <Pressable
      style={stylesMapBox}
      onPress={() =>
        onPress(
          currentLocation,
          markerLocation,
          setMarkers,
          setMarkerLocation,
          setDistance,
          setDuration,
          setShowDirections,
          setOrigin,
          setDestination
        )
      }
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <FontAwesome name={icon} size={20} color="black" />
        <Text style={stylesMapText}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default CustomPressableMap;
