import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../types/stack-type";
const navigation = useNavigation<StackTypes>();

export const navigateToScreen = (body: string) => {
  switch (body) {
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
