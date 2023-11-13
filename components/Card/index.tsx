import React from "react";
import { View, StyleSheet } from "react-native";
import { datePsychologicalSupport } from "../../utils/dataOther";
import { CardItem } from "./CardItem";

export const CardRoot = () => {
  return (
    <View>
      {datePsychologicalSupport.map((location, index) => (
        <View key={index} style={styles.card}>
          {location.content.map((item) => (
            <CardItem
              key={item.id}
              title={item.title}
              nameUniversity={item.nameUniversity}
              address={item.address}
              phone={item.phone}
              call={item.call}
              time={item.time}
              url={item.url}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#73bda8",
    margin: 6,
    padding: 12,
    borderRadius: 8,
  },
});
