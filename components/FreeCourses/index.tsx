import React from "react";
import {
  Text,
  Image,
  StyleSheet,
  View,
  ImageSourcePropType,
  TouchableOpacity,
} from "react-native";
import { openURL } from "expo-linking";

type FreeCoursesData = {
  image: ImageSourcePropType;
  name: string;
  id: number;
  url: string;
};

interface FreeCoursesProps {
  data: FreeCoursesData[];
}

export const FreeCourses = ({ data }: FreeCoursesProps) => {
  return (
    <View style={styles.container}>
      {data.map((item) => (
        <TouchableOpacity key={item.id} onPress={() => openURL(item.url)}>
          <Image style={styles.sizeImage} source={item.image} />
          <Text style={styles.title}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 30,
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
});
