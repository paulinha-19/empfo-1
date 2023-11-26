import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useMapStore } from "../../store/map-directions";

export const ResultDirections = () => {
  const { distance, duration, legs } = useMapStore();
  return (
    <View style={styles.centeredView}>
      {distance && duration ? (
        <View style={styles.modalView}>
          {legs?.map((leg, index) => (
            <View key={index}>
              <Text style={styles.textDistanceAndDuration}>
                {`${leg.duration.text} (${leg.distance.text})`}
              </Text>
              <Text style={styles.textOriginAndDestination}>
                Origem: {leg.start_address}
              </Text>
              <Text style={styles.textOriginAndDestination}>
                Destino: {leg.end_address}
              </Text>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: "absolute",
    bottom: 0,
  },
  modalView: {
    backgroundColor: "white",
    padding: 25,
    width: Dimensions.get("screen").width,
  },
  textDistanceAndDuration: {
    fontSize: 16,
  },
  textOriginAndDestination: {
    color: "gray",
    paddingTop: 10,
  },
});
