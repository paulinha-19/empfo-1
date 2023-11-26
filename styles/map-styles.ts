import { Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonHelpMapText: {
    color: "black",
    fontWeight: "bold",
  },
  buttonHelpMapBox: {
    backgroundColor: "white",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 8,
    padding: 5,
  },
  buttonHelpContainer: {
    position: "absolute",
    width: "90%",
    top: 100,
  },
  buttonUserLocationContainer: {
    position: "absolute",
    width: "100%",
  },
  buttonUserLocation: {
    backgroundColor: "white",
    borderRadius: 50,
    width: "11%",
    height: "150%",
    left: 10,
    bottom: -320,
    justifyContent: "center",
    alignItems: "center",
  },
  shadowIos: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  shadowAndroid: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  buttonDirection: {
    backgroundColor: "#2a7fe0",
    borderRadius: 50,
    width: "11%",
    height: "150%",
    left: 10,
    bottom: -250,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  searchContainer: {
    position: "absolute",
    width: "90%",
    backgroundColor: "#bbb",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    borderRadius: 8,
    top: 150, //Constants.statusBarHeight
  },
  titleBottomSheetMap: {
    fontSize: 20,
  },
  textBottomSheet: {
    fontSize: 15,
  },
  typeOverview: {
    fontSize: 15,
    color: "black",
    opacity: 0.6,
  },
  customUserBottom: {
    bottom: 550,
  },
  backButtonContainer: {
    position: "absolute",
    width: "90%",
    top: 60,
  },
});

export { styles };
