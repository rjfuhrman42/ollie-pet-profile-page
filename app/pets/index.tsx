import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { pets } from "../../data/pets";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {pets.map((pet) => {
        return (
          <Link href={`/pets/${pet.id}`} key={pet.id}>
            <View style={styles.card}>
              <Text>Name: {pet.name}</Text>
              <Text>ID: {pet.id}</Text>
            </View>
          </Link>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 10,
  },
  bigBlue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30,
  },
  red: {
    color: "red",
  },
});
