import { LatLng } from "react-native-maps";
import { MapDirectionsLegs } from "react-native-maps-directions";
import { create } from "zustand";

interface MapStore {
  origin: LatLng | null;
  destination: LatLng | null;
  showDirections: boolean;
  distance: number;
  duration: number;
  legs: MapDirectionsLegs | null;
  fares: [];
  waypointOrder: number[][] | null;
  modalVisible: boolean;
  start_address: string ;
  end_address: string ;
  setOrigin: (origin: LatLng | null) => void;
  setDestination: (destination: LatLng | null) => void;
  setShowDirections: (show: boolean) => void;
  setDistance: (distance: number) => void;
  setDuration: (duration: number) => void;
  setLegs: (legs: MapDirectionsLegs | null) => void;
  setWaypointOrder: (waypointOrder: number[][] | null) => void;
  setModalVisible: (visible: boolean) => void;
  setStartAddress: (address: string) => void;
  setEndAddress: (address: string) => void;
}

export const useMapStore = create<MapStore>((set) => ({
  origin: null,
  destination: null,
  showDirections: false,
  distance: 0,
  duration: 0,
  start_address: "",
  end_address: "",
  legs: null,
  fares: [],
  waypointOrder: null,
  modalVisible: false,
  setOrigin: (origin) => set({ origin }),
  setDestination: (destination) => set({ destination }),
  setShowDirections: (show) => set({ showDirections: show }),
  setDistance: (distance) => set({ distance }),
  setDuration: (duration) => set({ duration }),
  setLegs: (legs) => set({ legs }),
  setWaypointOrder: (waypointOrder) => set({ waypointOrder }),
  setModalVisible: (visible) => set({ modalVisible: visible }),
  setStartAddress: (start_address) => set({ start_address }),
  setEndAddress: (end_address) => set({ end_address }),
}));
