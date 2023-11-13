import axios from "axios";
import { CustomLocationObject, GooglePlace } from "../types/map";
import { addMarkersToMap } from "./map-functions";
import { LocationObject } from "expo-location";
import { LatLng } from "react-native-maps";

export const searchPoliceStations = async (
  currentLocation: LocationObject | null | undefined,
  markerLocation: CustomLocationObject | null,
  setMarkers: (markers: CustomLocationObject[] | null) => void,
  setMarkerLocation: (marker: CustomLocationObject | null) => void,
  setDistance: (distance: number) => void,
  setDuration: (duration: number) => void,
  setShowDirections: (show: boolean) => void,
  setOrigin: (origin: LatLng | null) => void,
  setDestination: (destination: LatLng | null) => void
) => {
  try {
    const latitude = markerLocation
      ? markerLocation.coords.latitude
      : currentLocation?.coords.latitude || 0;
    const longitude = markerLocation
      ? markerLocation.coords.longitude
      : currentLocation?.coords.longitude || 0;

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=police&key=AIzaSyCi3jMMSBrc_XVBaO6suAxyJMQbGyudhfg`
    );
    const filteredPolice: GooglePlace[] = response.data.results.filter(
      (place: GooglePlace) => place.name?.toLowerCase().includes("delegacia")
    );
    if (response.data.results.length > 0) {
      const places: GooglePlace[] = filteredPolice;
      setDistance(0);
      setDuration(0);
      setShowDirections(false);
      setOrigin(null);
      setDestination(null);
      addMarkersToMap(places, setMarkers);
    }
  } catch (error) {
    console.error("Erro ao buscar estações de polícia:", error);
  }
};

export const searchHospitals = async (
  currentLocation: LocationObject | null | undefined,
  markerLocation: CustomLocationObject | null,
  setMarkers: (markers: CustomLocationObject[] | null) => void,
  setMarkerLocation: (marker: CustomLocationObject | null) => void,
  setDistance: (distance: number) => void,
  setDuration: (duration: number) => void,
  setShowDirections: (show: boolean) => void,
  setOrigin: (origin: LatLng | null) => void,
  setDestination: (destination: LatLng | null) => void
) => {
  try {
    const latitude = markerLocation
      ? markerLocation.coords.latitude
      : currentLocation?.coords.latitude || 0;
    const longitude = markerLocation
      ? markerLocation.coords.longitude
      : currentLocation?.coords.longitude || 0;

    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=5000&type=hospital&key=AIzaSyCi3jMMSBrc_XVBaO6suAxyJMQbGyudhfg`
    );
    if (response.data.results.length > 0) {
      const places: GooglePlace[] = response.data.results;
      setDistance(0);
      setDuration(0);
      setShowDirections(false);
      setOrigin(null);
      setDestination(null);
      addMarkersToMap(places, setMarkers);
    }
  } catch (error) {
    console.error("Erro ao buscar hospitais:", error);
  }
};

export const handleSearchPoliceStations = (
  currentLocation: LocationObject | null | undefined,
  markerLocation: CustomLocationObject | null,
  setMarkers: (markers: CustomLocationObject[] | null) => void,
  setMarkerLocation: (marker: CustomLocationObject | null) => void,
  setDistance: (distance: number) => void,
  setDuration: (duration: number) => void,
  setShowDirections: (show: boolean) => void,
  setOrigin: (origin: LatLng | null) => void,
  setDestination: (destination: LatLng | null) => void
) => {
  if (currentLocation) {
    searchPoliceStations(
      currentLocation,
      markerLocation,
      setMarkers,
      setMarkerLocation,
      setDistance,
      setDuration,
      setShowDirections,
      setOrigin,
      setDestination
    );
  } else if (markerLocation) {
    searchPoliceStations(
      currentLocation,
      markerLocation,
      setMarkers,
      setMarkerLocation,
      setDistance,
      setDuration,
      setShowDirections,
      setOrigin,
      setDestination
    );
  }
};

export const handleSearchHospitals = (
  currentLocation: LocationObject | null | undefined,
  markerLocation: CustomLocationObject | null,
  setMarkers: (markers: CustomLocationObject[] | null) => void,
  setMarkerLocation: (marker: CustomLocationObject | null) => void,
  setDistance: (distance: number) => void,
  setDuration: (duration: number) => void,
  setShowDirections: (show: boolean) => void,
  setOrigin: (origin: LatLng | null) => void,
  setDestination: (destination: LatLng | null) => void
) => {
  if (currentLocation) {
    searchHospitals(
      currentLocation,
      markerLocation,
      setMarkers,
      setMarkerLocation,
      setDistance,
      setDuration,
      setShowDirections,
      setOrigin,
      setDestination
    );
  } else if (markerLocation) {
    searchHospitals(
      currentLocation,
      markerLocation,
      setMarkers,
      setMarkerLocation,
      setDistance,
      setDuration,
      setShowDirections,
      setOrigin,
      setDestination
    );
  }
};
