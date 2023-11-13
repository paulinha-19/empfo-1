import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { openURL } from "expo-linking";

interface CardItemProps {
  title: string;
  nameUniversity: string;
  address: string;
  phone: { number: string }[];
  call: { tel: string }[];
  time?: string;
  url: string;
}

export const CardItem = ({
  title,
  nameUniversity,
  address,
  phone,
  call,
  time,
  url,
}: CardItemProps) => {
  return (
    <View>
      <Text style={styles.cardTitle}>{title}</Text>
      <TouchableOpacity onPress={() => openURL(url)}>
        <Text style={styles.itemTitle}>{nameUniversity}</Text>
      </TouchableOpacity>
      <Text style={styles.itemText}>Endereço: {address}</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.itemText}>Telefone: </Text>
        {phone.map((item, index: number) => (
          <TouchableOpacity
            key={index}
            onPress={() => openURL(call[index].tel)}
          >
            <Text style={styles.itemText}>{item.number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {time ? <Text style={styles.itemText}>Horário: {time}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  cardTitle: {
    fontSize: 16,
    paddingBottom: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
  itemTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  itemText: {
    fontSize: 12,
  },
  rowContainer: {
    flexDirection: "row",
  },
});
