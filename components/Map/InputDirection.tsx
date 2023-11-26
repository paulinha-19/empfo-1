import MapView from "react-native-maps";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import { GooglePlaceDetail } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";
import { useMapStore } from "../../store/map-directions";
import { edgePadding } from "../../utils/edge-padding-value";
import InputAutocompleteDirection from "./InputAutocompleteDirection";
import { CustomLocationObject } from "../../types/map";

interface InputDirectionProps {
  setMarkers: (markers: CustomLocationObject[] | null) => void;
  setMarkerLocation: (marker: CustomLocationObject | null) => void;
  mapRef: React.RefObject<MapView>;
}

export default function InputDirection({
  setMarkers,
  setMarkerLocation,
  mapRef,
}: InputDirectionProps) {
  const {
    destination,
    setShowDirections,
    setOrigin,
    setDestination,
    origin,
    modalVisible,
    setModalVisible,
  } = useMapStore();

  const traceRoute = () => {
    if (origin && destination) {
      setModalVisible(!modalVisible);
      setMarkerLocation(null);
      setMarkers(null);
      setShowDirections(true);

      // Calcular a região que inclui ambos os pontos
      const region = {
        latitude: (origin.latitude + destination.latitude) / 2,
        longitude: (origin.longitude + destination.longitude) / 2,
        latitudeDelta: Math.abs(origin.latitude - destination.latitude) + 0.01,
        longitudeDelta:
          Math.abs(origin.longitude - destination.longitude) + 0.01,
      };
      mapRef.current?.fitToCoordinates([origin, destination], {
        edgePadding,
        animated: true,
      });
      // Aplicar um fator de zoom adicional, se necessário
      const zoomFactor = 1.5;
      const adjustedRegion = {
        latitude: region.latitude,
        longitude: region.longitude,
        latitudeDelta: region.latitudeDelta * zoomFactor,
        longitudeDelta: region.longitudeDelta * zoomFactor,
      };
      mapRef.current?.animateToRegion(adjustedRegion, 1000);
    }
    if (!origin || !destination) {
      Alert.alert("Insira um local em origem e destino para traçar a rota");
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
  };

  return (
    <View style={styles.searchContainer}>
      <InputAutocompleteDirection
        label="Origem"
        placeholder="Insira a origem"
        onPlaceSelected={(details) => {
          onPlaceSelected(details, "origin");
        }}
      />
      <InputAutocompleteDirection
        label="Destino"
        placeholder="Insira o destino"
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
    top: Constants.statusBarHeight,
  },
  button: {
    backgroundColor: "#5E17EB",
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 14,
  },
});
