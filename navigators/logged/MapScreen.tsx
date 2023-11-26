import React, { useEffect, useState, useRef } from "react";
import MapView from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import * as Location from "expo-location";
import { View, Pressable, Platform, Alert, Linking } from "react-native";
import GooglePlacesInput from "../../components/GooglePlacesInput";
import { styles } from "../../styles/map-styles";
import { GooglePlaceDetail } from "react-native-google-places-autocomplete";
import { FontAwesome } from "@expo/vector-icons";
import { handleUserLocationPress } from "../../lib/map-functions";
import { CustomLocationObject } from "../../types/map";
import {
  handleSearchHospitals,
  handleSearchPoliceStations,
} from "../../lib/requests";
import { MapViews } from "../../components/Map/MapViews";
import CustomPressableMap from "../../components/Map/CustomPressableMap";
import { ButtonDirection } from "../../components/ButtonDirection";
import { useMapStore } from "../../store/map-directions";
import { ResultDirections } from "../../components/Map/ResultDirection";
import { StackTypes } from "../../types/stack-type";

export default function MapScreen() {
  const navigation = useNavigation<StackTypes>();
  const [currentLocation, setCurrentLocation] =
    useState<Location.LocationObject | null>();
  const [markerLocation, setMarkerLocation] =
    useState<CustomLocationObject | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [markers, setMarkers] = useState<CustomLocationObject[] | null>(null);
  const mapRef = useRef<MapView | null>(null);
  const {
    distance,
    duration,
    setDuration,
    setDistance,
    setShowDirections,
    setOrigin,
    setDestination,
  } = useMapStore();

  const goBackHome = () => {
    navigation.goBack();
    setDistance(0);
    setDuration(0);
    setShowDirections(false);
    setOrigin(null);
    setDestination(null);
  };

  const handlePlaceSelect = (details?: GooglePlaceDetail | null) => {
    if (details && mapRef.current) {
      setMarkerLocation(null);
      setMarkers(null);
      setDistance(0);
      setDuration(0);
      setShowDirections(false);
      setOrigin(null);
      setDestination(null);
      const newMarkerLocation: CustomLocationObject = {
        coords: {
          latitude: details.geometry.location.lat,
          longitude: details.geometry.location.lng,
          altitude: 0,
          accuracy: 0,
          altitudeAccuracy: 0,
          heading: 0,
          speed: 0,
        },
        timestamp: Date.now(),
        title: details.name,
        formatted_address: details.formatted_address,
        types: details.types,
        url: details.url,
        vicinity: details.vicinity,
        icon: details.icon,
      };
      setMarkerLocation(newMarkerLocation);
      mapRef.current.animateToRegion(
        {
          latitude: newMarkerLocation.coords.latitude,
          longitude: newMarkerLocation.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        1000
      );
    }
  };

  useEffect(() => {
    const getPermissions = async () => {
      const permission = await Location.getForegroundPermissionsAsync();
      if (!permission.canAskAgain || permission.status === "denied") {
        Alert.alert(
          "Por favor conceda acesso a localização para navegar pelo mapa"
        );
        Linking.openSettings();
      } else {
        if (permission.status === "granted") {
          let location = await Location.getCurrentPositionAsync({
            mayShowUserSettingsDialog: true,
            accuracy: Location.Accuracy.High,
          });
          setCurrentLocation(location);
          console.log("Location: ", location);
        }
      }
    };
    getPermissions();
  }, []);

  return (
    <View style={styles.container}>
      {currentLocation && (
        <MapViews
          mapRef={mapRef}
          currentLocation={currentLocation}
          setMapReady={setMapReady}
          markerLocation={markerLocation}
          markers={markers}
        />
      )}
      <View style={styles.backButtonContainer}>
        <Pressable onPress={goBackHome}>
          <AntDesign name="leftcircleo" size={35} color="black" />
        </Pressable>
      </View>
      <View style={styles.searchContainer}>
        <GooglePlacesInput
          onPlaceSelect={handlePlaceSelect}
          placeholder="Pesquise um local"
        />
      </View>
      <View style={styles.buttonHelpContainer}>
        <View
          style={{ flexDirection: "row", justifyContent: "center", gap: 30 }}
        >
          <CustomPressableMap
            stylesMapBox={styles.buttonHelpMapBox}
            stylesMapText={styles.buttonHelpMapText}
            onPress={handleSearchPoliceStations}
            currentLocation={currentLocation}
            markerLocation={markerLocation}
            setMarkers={setMarkers}
            setMarkerLocation={setMarkerLocation}
            setDistance={setDistance}
            setDuration={setDuration}
            setShowDirections={setShowDirections}
            setOrigin={setOrigin}
            setDestination={setDestination}
            icon="shield"
            label="Delegacias"
          />
          <CustomPressableMap
            stylesMapBox={styles.buttonHelpMapBox}
            stylesMapText={styles.buttonHelpMapText}
            onPress={handleSearchHospitals}
            currentLocation={currentLocation}
            markerLocation={markerLocation}
            setMarkers={setMarkers}
            setMarkerLocation={setMarkerLocation}
            setDistance={setDistance}
            setDuration={setDuration}
            setShowDirections={setShowDirections}
            setOrigin={setOrigin}
            setDestination={setDestination}
            icon="ambulance"
            label="Hospitais"
          />
        </View>
      </View>
      <View
        style={[
          styles.buttonUserLocationContainer,
          distance && duration ? styles.customUserBottom : null,
        ]}
      >
        <Pressable
          style={[
            styles.buttonUserLocation,
            Platform.OS === "ios" ? styles.shadowIos : styles.shadowAndroid,
          ]}
          onPress={() =>
            handleUserLocationPress(
              currentLocation,
              mapRef,
              setMarkerLocation,
              setMarkers
            )
          }
        >
          <FontAwesome name="location-arrow" size={30} color="black" />
        </Pressable>
        <ButtonDirection
          setMarkerLocation={setMarkerLocation}
          setMarkers={setMarkers}
          mapRef={mapRef}
        />
      </View>
      <ResultDirections />
    </View>
  );
}
