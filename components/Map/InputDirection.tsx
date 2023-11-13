import MapView, { LatLng } from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
} from "react-native";
import { GooglePlaceDetail } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import { useRef } from "react";
import { useMapStore } from "../../store/map-directions";
import { edgePadding } from "../../utils/edge-padding-value";
import InputAutocompleteDirection from "./AutoCompleteDirection";
import { CustomLocationObject } from "../../types/map";

interface InputDirectionProps {
  setMarkers: (markers: CustomLocationObject[] | null) => void;
  setMarkerLocation: (marker: CustomLocationObject | null) => void;
}

export default function InputDirection({
  setMarkers,
  setMarkerLocation,
}: InputDirectionProps) {
  const mapRef = useRef<MapView>(null);
  const {
    destination,
    setShowDirections,
    setOrigin,
    setDestination,
    origin,
    modalVisible,
    setModalVisible,
  } = useMapStore();

  const moveTo = async (position: LatLng) => {
    if (position && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: position.latitude,
          longitude: position.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        1000
      );
    }
  };

  const traceRoute = () => {
    if (origin && destination) {
      setModalVisible(!modalVisible);
      setMarkerLocation(null);
      setMarkers(null);
      setShowDirections(true);
      mapRef.current?.fitToCoordinates([origin, destination], {
        edgePadding,
        animated: true,
      });
    }
  };

  const onPlaceSelected = (
    details: GooglePlaceDetail | null,
    flag: "origin" | "destination"
  ) => {
    const set = flag === "origin" ? setOrigin : setDestination;
    const position = {
      latitude: details?.geometry.location.lat || 0,
      longitude: details?.geometry.location.lng || 0,
    };
    set(position);
    moveTo(position);
  };

  return (
    <View style={styles.searchContainer}>
      <InputAutocompleteDirection
        label="Origem"
        placeholder="Insira a origem do local"
        onPlaceSelected={(details) => {
          onPlaceSelected(details, "origin");
        }}
      />
      <InputAutocompleteDirection
        label="Destino"
        placeholder="Insira a origem do destino"
        onPlaceSelected={(details) => {
          onPlaceSelected(details, "destination");
        }}
      />
      <TouchableOpacity style={styles.button} onPress={traceRoute}>
        <Text style={styles.buttonText}>Traçar rota</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchContainer: {
    position: "absolute",
    width: "80%",
    padding: 8,
    borderRadius: 8,
    top: Constants.statusBarHeight,
  },
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
  containerInput: {
    marginVertical: 20,
  },
  button: {
    backgroundColor: "#2a7fe0",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
  },
  label: {},
});
