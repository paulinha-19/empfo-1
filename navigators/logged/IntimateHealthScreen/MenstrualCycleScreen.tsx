import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Modal,
} from "react-native";
import { format, parse, isBefore, isValid } from "date-fns";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { CustomInput } from "../../../components/CustomInput";

export const MenstrualCycleScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [lastMenstruationDate, setLastMenstruationDate] = useState("");
  const [cycleDuration, setCycleDuration] = useState("");
  const [nextMenstruationDate, setNextMenstruationDate] = useState("");
  const [fertilePeriod, setFertilePeriod] = useState("");
  const [lastMenstruationDateError, setLastMenstruationDateError] =
    useState("");
  const [cycleDurationError, setCycleDurationError] = useState("");

  const list = [
    {
      titleNextMenstruationDate: `Sua próxima menstruação é esperada para o dia: `,
      dataResult: `${nextMenstruationDate}`,
    },
    {
      titlefertilResult: `Seu próximo período fértil tem grandes chances de acontecer no período de: `,
      fertilResult: `${fertilePeriod}`,
    },
    {
      title: "Fechar",
      containerStyle: { backgroundColor: "red" },
      titleStyle: { color: "white" },
      onPress: () => setIsVisible(false),
    },
  ];

  const calculateDates = () => {
    if (lastMenstruationDate && cycleDuration) {
      if (
        !isValid(parse(lastMenstruationDate, "dd/MM/yyyy", new Date())) ||
        lastMenstruationDateError
      ) {
        setLastMenstruationDateError("Data inválida ou maior que a data atual");
        return;
      }

      const parsedDate = parse(lastMenstruationDate, "dd/MM/yyyy", new Date());
      const nextDate = new Date(parsedDate);
      nextDate.setDate(parsedDate.getDate() + parseInt(cycleDuration, 10));

      const fertileStartDate = new Date(nextDate);
      fertileStartDate.setDate(nextDate.getDate() + 11);
      const fertileEndDate = new Date(nextDate);
      fertileEndDate.setDate(nextDate.getDate() + 15);

      setNextMenstruationDate(format(nextDate, "dd/MM/yyyy"));
      setFertilePeriod(
        `${format(fertileStartDate, "dd/MM/yyyy")} - ${format(
          fertileEndDate,
          "dd/MM/yyyy"
        )}`
      );
      setModalVisible(true);
      setCycleDuration("");
      setLastMenstruationDate("");
      setLastMenstruationDateError("");
      Keyboard.dismiss();
    } else {
      alert("Por favor, preencha todos os campos");
      setNextMenstruationDate("");
      setFertilePeriod("");
    }
  };

  const handleDateChange = (text: string) => {
    setLastMenstruationDate(text);
    if (
      isValid(parse(text, "dd/MM/yyyy", new Date())) &&
      isBefore(parse(text, "dd/MM/yyyy", new Date()), new Date())
    ) {
      setLastMenstruationDateError("");
    } else if (text === "") {
      setLastMenstruationDateError("");
    } else {
      setLastMenstruationDateError("Data inválida ou maior que a data atual");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Animatable.View animation="fadeInLeft" style={styles.logoHome}>
          <Image
            style={styles.sizeHeader}
            source={require("../../../assets/logged/penties.png")}
          />
        </Animatable.View>
        <View style={styles.content}>
          <View style={styles.containerContent}>
            <Image
              style={styles.imagesHome}
              source={require("../../../assets/logged/ciclo-menstrual.png")}
            />
            <Text style={styles.title}>Conheça o seu ciclo menstrual</Text>
          </View>
          <Text style={styles.subtitle}>
            Preencha aqui os seus dados sobre o dia inicial da menstruação e
            dias que sua menstruação costuma durar para calcular seu período
            fértil.
          </Text>
          <CustomInput
            label="Qual data começou sua última menstruação?"
            labelStyle={{ color: "white", fontSize: 15, paddingStart: 5 }}
            style={styles.input}
            placeholder="dd/mm/aaaa"
            value={lastMenstruationDate}
            onChangeText={(text) => handleDateChange(text)}
            errorMessage={lastMenstruationDateError}
            setLastMenstruationDate={setLastMenstruationDate}
            mask="DD/MM/YYYY"
            lastMenstruationDate={lastMenstruationDate}
          />
          <CustomInput
            label="Quantos dias costuma durar sua menstruação?"
            labelStyle={{
              color: "white",
              fontSize: 15,
              paddingTop: 10,
              paddingStart: 5,
            }}
            style={styles.input}
            placeholder="28 dias"
            value={cycleDuration}
            onChangeText={(text) => setCycleDuration(text)}
            errorMessage={cycleDurationError}
            keyboardType="numeric"
          />
          <TouchableOpacity
            onPress={calculateDates}
            style={{ width: "100%", paddingTop: 20 }}
          >
            <Text style={styles.buttonTextResult}>Calcular</Text>
          </TouchableOpacity>
          {nextMenstruationDate && fertilePeriod && (
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.closeButton}>
                    <TouchableOpacity
                      onPress={() => setModalVisible(!modalVisible)}
                    >
                      <AntDesign name="close" size={30} color="black" />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.contentResult}>
                    <Text style={styles.resultText}>
                      Sua próxima menstruação é esperada para o dia:
                      <Text style={styles.dataResult}>
                        {" "}
                        {nextMenstruationDate}
                      </Text>
                    </Text>
                  </View>
                  <View style={styles.contentResult}>
                    <Text style={styles.resultText}>
                      Seu próximo período fértil tem grandes chances de
                      acontecer no período de:{" "}
                      <Text style={styles.dataResult}>{fertilePeriod}</Text>
                    </Text>
                  </View>
                </View>
              </View>
            </Modal>
          )}
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  sizeLogo: {
    width: 50,
    height: 50,
  },
  sizeHeader: {
    width: 80,
    height: 80,
  },
  logoHome: {
    alignItems: "center",
  },
  containerContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  content: {
    alignItems: "center",
    width: "100%",
  },
  title: {
    color: "#FED74D",
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 50,
    paddingBottom: 30,
    paddingTop: 5,
  },
  imagesHome: {
    width: 60,
    height: 60,
  },
  input: {
    paddingStart: 5,
    fontSize: 16,
    backgroundColor: "white",
  },
  dataResult: {
    color: "#f00000",
    fontSize: 18,
  },
  resultText: {
    color: "#000",
    fontSize: 18,
    paddingTop: 20,
  },
  contentResult: {
    flexDirection: "row",
  },
  buttonTextResult: {
    color: "black",
    backgroundColor: "#FED74D",
    padding: 15,
    fontSize: 16,
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 15,
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
  closeButton: {
    position: "absolute",
  },
});
