import { View, Text, StyleSheet } from "react-native";
import {
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { ListEmptyComponent } from "../GooglePlacesInput/ListEmptyComponent";

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
  return (
    <View>
      <Text>{label}</Text>
      <GooglePlacesAutocomplete
        minLength={2}
        listViewDisplayed="auto"
        styles={{ textInput: styles.input }}
        placeholder={placeholder || ""}
        fetchDetails
        onPress={(data, details = null) => {
          onPlaceSelected(details);
        }}
        query={{
          key: `AIzaSyCi3jMMSBrc_XVBaO6suAxyJMQbGyudhfg`,
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

const styles = StyleSheet.create({
  input: {
    borderColor: "#888",
    borderWidth: 1,
  },
});
