import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { pets } from "../../data/pets";

export default function Route() {
  const local = useLocalSearchParams();

  // The current pet id is passed via URL search params "/pets/{pet.id}"
  // Find the current pet using the provided id
  const currentPet = pets.find((pet) => {
    if (pet.id === parseInt(local.id[0])) {
      return pet;
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Name: </Text>
          <Text style={styles.details}>{currentPet?.name}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Pet ID: </Text>
          <Text style={styles.details}>{currentPet?.id}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Breed(s): </Text>
          <Text style={styles.details}>{currentPet?.breeds.join(", ")}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Activity Level: </Text>
          <Text style={styles.details}>{currentPet?.activityLevel}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.label}>Neutered: </Text>
          <Text style={styles.details}>
            {currentPet?.neutered ? "yes" : "no"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 25,
    height: "100%",
  },
  card: {
    width: 350,
    padding: 20,
    borderColor: "hsl(0, 0%, 80%)",
    borderWidth: 1,
    borderRadius: 7.5,
  },
  details: {
    fontSize: 16,
    paddingVertical: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    paddingVertical: 10,
  },
  textContainer: {
    flexDirection: "row",
  },
});
