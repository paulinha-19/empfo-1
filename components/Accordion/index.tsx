import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";
import AccordionItem from "./AccordionItem";

type AccordionData = {
  title: string;
  content: { id: number; body: string; text?: string; fonte?: string }[];
};

interface AccordionProps {
  data: AccordionData[];
}

export const Accordion = ({ data }: AccordionProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };

  return (
    <View>
      {data.map((section) => (
        <View key={section.title} style={styles.sectionContainer}>
          <TouchableOpacity
            style={styles.sectionButton}
            onPress={() => toggleItem(section.title)}
          >
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Entypo
              name={
                expandedItem === section.title ? "chevron-up" : "chevron-down"
              }
              size={20}
              color="#000"
            />
          </TouchableOpacity>
          {expandedItem === section.title && (
            <View style={styles.sectionContent}>
              {section.content.map((accordionItem) => (
                <AccordionItem key={accordionItem.id} item={accordionItem} />
              ))}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    borderBottomWidth: 1,
  },
  sectionButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FED74D",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  sectionContent: {
    backgroundColor: "white",
  },
});
