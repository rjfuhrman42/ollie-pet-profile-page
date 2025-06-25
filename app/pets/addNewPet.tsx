import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const AddNewPet = () => {
  const [petName, onChangePetName] = useState("");
  const [currentBreed, setCurrentBreed] = useState("");
  const [activityLevel, setActivityLevel] = useState("Moderate");
  const [isNeutered, setIsNeutered] = useState("No");

  function handleSubmit() {
    if (!petName) {
      alert("Name is required!");
      return;
    }
    const newPet = {
      name: petName,
      breeds: currentBreed,
      activityLevel: activityLevel,
      neutered: isNeutered === "Yes",
    };
    console.log("creating new pet entry", newPet);
    router.push("/pets");
  }

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView>
        <Text>Pet name:</Text>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => onChangePetName(text)}
          value={petName}
          placeholder="Enter pet name..."
        />
        <Text>Pet breed:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setCurrentBreed(text)}
          value={currentBreed}
          placeholder="Enter your dogs breed..."
        />
        <Text>Pet Activity Level:</Text>
        <Picker
          selectedValue={activityLevel}
          onValueChange={(level) => setActivityLevel(level)}
        >
          <Picker.Item label="High" value="High" />
          <Picker.Item label="Moderate" value="Moderate" />
          <Picker.Item label="Low" value="Low" />
        </Picker>
        <Text>Is your pet neutered?</Text>
        <Picker
          selectedValue={isNeutered}
          onValueChange={(value) => setIsNeutered(value)}
        >
          <Picker.Item label="No" value="No" />
          <Picker.Item label="Yes" value="Yes" />
        </Picker>
        <Button title="Add your pet" onPress={() => handleSubmit()} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddNewPet;
