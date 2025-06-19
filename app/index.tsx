import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        style={{
          borderColor: "hsl(0, 0%, 80%)",
          borderWidth: 1,
          borderRadius: 7.5,
          padding: 15,
          fontSize: 16,
        }}
        href="/pets"
      >
        <Text>View my pets</Text>
      </Link>
    </View>
  );
}
