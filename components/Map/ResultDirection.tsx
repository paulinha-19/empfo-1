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
              <Text style={styles.textModalDirections}>
                {`${leg.duration.text} (${leg.distance.text})`}
              </Text>
              <Text>Origem: {leg.start_address}</Text>
              <Text>Destino: {leg.end_address}</Text>
            </View>
          ))}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    position: "absolute",
    bottom: 0,
  },
  modalView: {
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: Dimensions.get("screen").width,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  textModalDirections: {
    fontSize: 16,
  },
});
