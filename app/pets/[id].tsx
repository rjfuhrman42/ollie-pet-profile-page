import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { pets } from "../../data/pets";

export default function Route() {
  const local = useLocalSearchParams();
  const currentPet = pets.find((pet) => pet.id === parseInt(local.id));
  console.log(currentPet);

  return (
    <View>
      <Text>Name: {currentPet?.name}</Text>
      <Text>Pet ID: {currentPet?.id}</Text>
      <Text>Breed(s): {currentPet?.breeds.join(", ")}</Text>
      <Text>Activity Level: {currentPet?.activityLevel}</Text>
      <Text>Neutered: {currentPet?.neuteredStatus ? "yes" : "no"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
