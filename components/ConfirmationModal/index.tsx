import React from "react";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

interface ConfirmationModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  message: string;
}

export const ConfirmationModal = ({
  visible,
  onConfirm,
  onCancel,
  message,
}: ConfirmationModalProps) => (
  <View style={styles.centeredView}>
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{message}</Text>
          <View style={styles.containerButtonModal}>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={onConfirm}
            >
              <Text style={styles.buttonColorModal}>Sim</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onCancel}
            >
              <Text style={styles.buttonColorModal}>Não</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  </View>
);

const styles = StyleSheet.create({
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
