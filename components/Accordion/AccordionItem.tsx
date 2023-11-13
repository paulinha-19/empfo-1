import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../types/stack-type";
import { formattedText } from "../../utils/formattedText";

interface AccordionItemProps {
  item: { id: number; body: string; text?: string; fonte?: string };
  formattedText?: (text: string | undefined) => string;
}

const AccordionItem = ({ item }: AccordionItemProps) => {
  const navigation = useNavigation<StackTypes>();

  const navigateToScreen = () => {
    switch (item.body) {
      case "Preservativo masculino":
        navigation.navigate("Men");
        break;
      case "Preservativo feminino":
        navigation.navigate("Woman");
        break;
      case "DIU":
        navigation.navigate("Diu");
        break;
      case "Anticoncepcionais hormonais":
        navigation.navigate("Contraceptive");
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {item.text ? (
        <View>
          <Text style={styles.bodyText}>{item.body}</Text>
          <Text style={styles.textWithPrefix}>{formattedText(item.text)}</Text>
        </View>
      ) : (
        <TouchableOpacity onPress={navigateToScreen}>
          <Text style={styles.bodyText}>{item.body}</Text>
        </TouchableOpacity>
      )}
      {item.fonte && <Text style={styles.fonteText}>{item.fonte}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  bodyText: {
    fontSize: 14,
  },
  textWithPrefix: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  fonteText: {
    paddingTop: 10,
    fontSize: 14,
  },
});

export default AccordionItem;
