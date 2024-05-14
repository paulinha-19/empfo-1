import React from "react";
import {
  GooglePlacesAutocomplete,
  GooglePlaceDetail,
} from "react-native-google-places-autocomplete";
import { LocationObject } from "expo-location";
import { ListEmptyComponent } from "./ListEmptyComponent";
import {API_KEY_GOOGLE_MAPS} from "@env"

interface GooglePlacesInputProps {
  currentLocation?: LocationObject | null | undefined;
  placeholder: string;
  onPlaceSelect: (details?: GooglePlaceDetail | null) => void;
}

const GooglePlacesInput = ({
  onPlaceSelect,
  placeholder = "",
  currentLocation,
}: GooglePlacesInputProps) => {
  return (
    <GooglePlacesAutocomplete
      placeholder={placeholder}
      minLength={2}
      listViewDisplayed="auto"
      fetchDetails={true}
      renderDescription={(row) => row.description}
      onPress={(data, details = null) => {
        onPlaceSelect(details);
      }}
      query={{
        // Consulta personalizada para a API do Google Places
        key: `AIzaSyA53wVZQ_P0On1BZg5ncJidA-YkYQREErI`,
        language: "pt-br",
        radius: "15000",
      }}
      currentLocationLabel="Localização atual"
      onFail={(error) => alert(error)}
      enablePoweredByContainer={false}
      onNotFound={() => console.log("No results")}
      listEmptyComponent={<ListEmptyComponent />}
    />
  );
};

export default GooglePlacesInput;
