import {
  Alert,
  Modal,
  StyleSheet,
  Pressable,
  View,
  Dimensions,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { styles } from "../../styles/map-styles";
import InputDirection from "../Map/InputDirection";
import { useMapStore } from "../../store/map-directions";
import { CustomLocationObject } from "../../types/map";

interface ButtonDirectionProps {
  setMarkers: (markers: CustomLocationObject[] | null) => void;
  setMarkerLocation: (marker: CustomLocationObject | null) => void;
}

export const ButtonDirection = ({setMarkers, setMarkerLocation}: ButtonDirectionProps) => {
  const { modalVisible, setModalVisible } = useMapStore();
  const handleCloseModal = () => {
    setModalVisible(true);
  };
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal foi fechado");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <InputDirection setMarkerLocation={setMarkerLocation} setMarkers={setMarkers} />
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign name="left" size={30} color="black" />
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonUserLocationContainer}>
        <Pressable style={styles.buttonDirection} onPress={handleCloseModal}>
          <Feather name="corner-up-right" size={30} color="white" />
        </Pressable>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    position: "absolute",
    top: 50,
    left: 0,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
