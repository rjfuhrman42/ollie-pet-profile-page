import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const NUM_PETS_PER_PAGE = 100;

export default function PetsList() {
  const [pets, setPets] = useState();
  const [page, setPage] = useState(0);

  const [totalPets, setTotalPets] = useState();

  useEffect(() => {
    async function fetchPets() {
      const data = await fetch(
        `https://dummyjson.com/todos?limit=${NUM_PETS_PER_PAGE}&skip=${
          page * NUM_PETS_PER_PAGE
        }`
      );
      const newPets = await data.json();

      if (!newPets) return;
      if (!totalPets) setTotalPets(newPets.total);

      console.log("todos", newPets);
      setPets((prev) => {
        if (!prev) {
          return newPets.todos;
        }
        return [...prev, ...newPets.todos];
      });
    }
    fetchPets();
  }, [page]);

  return (
    <SafeAreaProvider style={styles.container}>
      {!pets ? (
        <Text>Loading pets</Text>
      ) : (
        <View style={styles.inner}>
          <FlatList
            contentContainerStyle={styles.petList}
            data={pets}
            ListFooterComponent={
              pets.length >= totalPets ? (
                <></>
              ) : (
                <Button
                  title="Load more pets"
                  onPress={() => setPage((prev) => prev + 1)}
                />
              )
            }
            renderItem={({ item }) => (
              <Link href={`/pets/${item.id}`} key={item.id}>
                <View style={styles.card}>
                  <Text style={{ fontWeight: "bold" }}>{item.todo}</Text>
                  <Text>ID: {item.id}</Text>
                </View>
              </Link>
            )}
            keyExtractor={(item) => item.id.toString()}
          ></FlatList>
        </View>
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    marginTop: StatusBar.currentHeight || 0,
  },
  inner: {
    gap: 10,
    marginBottom: 25,
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

  button: {
    height: 25,
    margin: 10,
  },
});
