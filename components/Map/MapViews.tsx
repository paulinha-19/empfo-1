import React, { useEffect, useState } from "react";
import { LocationObject } from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { CustomLocationObject } from "../../types/map";
import { styles } from "../../styles/map-styles";
import { View, ActivityIndicator, Alert } from "react-native";
import { useMapStore } from "../../store/map-directions";
import MapViewDirections from "react-native-maps-directions";
import { MapDirectionsResponse } from "react-native-maps-directions";
import {API_KEY_GOOGLE_MAPS} from "@env"


interface MapViewsProps {
  mapRef: React.MutableRefObject<MapView | null>;
  currentLocation: LocationObject;
  setMapReady: (value: React.SetStateAction<boolean>) => void;
  markerLocation: CustomLocationObject | null;
  markers: CustomLocationObject[] | null;
}

export const MapViews = ({
  mapRef,
  currentLocation,
  setMapReady,
  markerLocation,
  markers,
}: MapViewsProps) => {
  const [selectedMarker, setSelectedMarker] =
    useState<CustomLocationObject | null>(null);
  const [mapLoading, setMapLoading] = useState(true);

  const {
    setDistance,
    setDuration,
    origin,
    destination,
    showDirections,
    setLegs,
  } = useMapStore();

  const handleMarkerPress = (marker: CustomLocationObject) => {
    setSelectedMarker(marker);
  };

  const traceRouteOnReady = (args: MapDirectionsResponse) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
      setLegs(args.legs);
    }
  };

  const traceRouteOnError = (error: any) => {
    Alert.alert("ERRO AO TRAÇAR A ROTA", error);
    console.log(error);
  };

  useEffect(() => {
    setTimeout(() => {
      setMapLoading(false);
    }, 1000);
  }, []);

  return (
    <View>
      {mapLoading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <MapView
          ref={mapRef}
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          showsTraffic={true}
          showsUserLocation={true}
          showsMyLocationButton={false}
          followsUserLocation={true}
          onMapReady={() => setMapReady(true)}
        >
          {markerLocation && (
            <Marker
              coordinate={{
                latitude: markerLocation.coords.latitude,
                longitude: markerLocation.coords.longitude,
              }}
              title={markerLocation.title}
              description={markerLocation.formatted_address}
              onPress={() => handleMarkerPress(markerLocation)}
            />
          )}
          {markers?.map((marker, index: number) => (
            <Marker
              key={index}
              coordinate={{
                latitude: marker.coords.latitude,
                longitude: marker.coords.longitude,
              }}
              title={marker.title}
              description={marker.vicinity}
              onPress={() => handleMarkerPress(marker)}
            />
          ))}
          {origin && (
            <Marker coordinate={origin} pinColor="black" title="Origem" />
          )}
          {destination && <Marker coordinate={destination} title="Destino" />}
          {showDirections && origin && destination && (
            <MapViewDirections
              origin={origin}
              destination={destination}
              apikey={`AIzaSyA53wVZQ_P0On1BZg5ncJidA-YkYQREErI`}
              strokeColor="#6644ff"
              strokeWidth={4}
              onReady={(args) => traceRouteOnReady(args)}
              language="pt-br"
              onError={(error) => traceRouteOnError(error)}
            />
          )}
        </MapView>
      )}
    </View>
  );
};
