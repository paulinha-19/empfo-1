import { LocationObject } from "expo-location";
import { create } from "zustand";
import { CustomLocationObject } from "../types/map";

interface MapScreen {
  currentLocation: LocationObject | null | undefined;
  markerLocation: CustomLocationObject | null;
  mapReady: boolean;
  markers: CustomLocationObject[] | null;

  setCurrentLocation: (
    currentLocation: LocationObject | null | undefined
  ) => void;
  setMarkerLocation: (markerLocation: CustomLocationObject | null) => void;
  setMapReady: (mapReady: boolean) => void;
  setMarkers: (markers: CustomLocationObject[] | null) => void;
}

export const useMapScreen = create<MapScreen>((set) => ({
  currentLocation: null,
  markerLocation: null,
  mapReady: false,
  markers: null,
  setCurrentLocation: (currentLocation) => set({ currentLocation }),
  setMarkerLocation: (markerLocation) => set({ markerLocation }),
  setMapReady: (ready) => set({ mapReady: ready }),
  setMarkers: (markers) => set({ markers }),
}));
