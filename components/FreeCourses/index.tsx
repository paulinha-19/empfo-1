import React, { useState } from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { ConfirmationModal } from "../ConfirmationModal";
import { openURL } from "expo-linking";

type FreeCoursesData = {
  image: ImageSourcePropType;
  name: string;
  info: string;
  id: number;
  url: string;
};

interface FreeCoursesProps {
  data: FreeCoursesData[];
}

export const FreeCourses = ({ data }: FreeCoursesProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FreeCoursesData | null>(
    null
  );

  const handlePress = (item: FreeCoursesData) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleConfirm = () => {
    if (selectedItem) {
      openURL(selectedItem.url);
    }
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View style={{ alignItems: "center" }} key={index}>
          <ConfirmationModal
            visible={modalVisible}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            message={`Você será direcionado (a) para ${selectedItem?.info} ${selectedItem?.name}. Você deseja continuar?`}
          />
          <TouchableOpacity
            style={{ paddingBottom: 20, paddingTop: 20 }}
            key={item.id}
            onPress={() => handlePress(item)}
          >
            <Image style={styles.sizeImage} source={item.image} />
            <Text style={styles.title}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sizeImage: {
    width: 100,
    height: 100,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
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
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#119022",
  },
  buttonClose: {
    backgroundColor: "#f3213a",
  },
  buttonColorModal: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
  },
  containerButtonModal: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
