import { Link } from "expo-router";
import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { pets } from "../../data/pets";

export default function Index() {
  return (
    <SafeAreaProvider style={styles.container}>
      <FlatList
        contentContainerStyle={styles.petList}
        data={pets}
        renderItem={({ item }) => (
          <Link href={`/pets/${item.id}`} key={item.id}>
            <View style={styles.card}>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text>ID: {item.id}</Text>
            </View>
          </Link>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight || 0,
  },
  petList: {
    padding: 30,
    gap: 15,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: 25,
    borderColor: "hsl(0, 0%, 80%)",
    borderWidth: 1,
    borderRadius: 7.5,
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
