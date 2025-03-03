import { View, Text, StyleSheet } from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { ListEmptyComponent } from "../GooglePlacesInput/ListEmptyComponent";
import { useFocusedInput } from "../../hooks/useFocusedInput";
import {API_KEY_GOOGLE_MAPS} from "@env"

type InputAutocompleteProps = {
  label: string;
  placeholder?: string;
  onPlaceSelected: (details: GooglePlaceDetail | null) => void;
};

function InputAutocompleteDirection({
  label,
  placeholder,
  onPlaceSelected,
}: InputAutocompleteProps) {
  const { handleBlur, handleFocus, styles } = useFocusedInput({
    borderColorInput: "#5E17EB",
  });

  return (
    <View>
      <Text style={input.label}>{label}</Text>
      <GooglePlacesAutocomplete
        textInputProps={{
          onFocus: () => handleFocus(),
          onBlur: () => handleBlur(),
        }}
        minLength={2}
        listViewDisplayed="auto"
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: `AIzaSyA53wVZQ_P0On1BZg5ncJidA-YkYQREErI`,
          language: "pt-BR",
          radius: "30000",
        }}
        onFail={(error) => alert(error)}
        onNotFound={() => console.log("no results")}
        listEmptyComponent={<ListEmptyComponent />}
      />
    </View>
  );
}
export default InputAutocompleteDirection;

const input = StyleSheet.create({
  label: {
    paddingBottom: 5,
  },
});
