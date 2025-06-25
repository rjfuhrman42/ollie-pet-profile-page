import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";

const AddPet = () => {
  const [formState, setFormState] = useState({
    name: "",
    breed: "",
    activityLevel: "moderate",
    neuteredStatus: "no",
  });

  function updateFormState(key: string, value) {
    setFormState((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  }

  return (
    <SafeAreaView>
      <Text>Pet name:</Text>
      <TextInput
        style={styles.input}
        value={formState.name}
        placeholder="Enter your pets name here..."
        onChange={(value) => updateFormState("name", value)}
      />
      <Text>Pet breed(s):</Text>
      <TextInput
        style={styles.input}
        value={formState.breed}
        placeholder="Enter your pets breed..."
        onChange={(value) => updateFormState("breed", value)}
      />
      <Text>Your pets activity level:</Text>
      <Picker
        selectedValue={formState.activityLevel}
        onValueChange={(activity) => updateFormState("activityLevel", activity)}
      >
        <Picker.Item label="High" value="high" />
        <Picker.Item label="Moderate" value="moderate" />
        <Picker.Item label="Low" value="low" />
      </Picker>
      <Text>Has your pet been neutered?</Text>
      <Picker
        selectedValue={formState.neuteredStatus}
        onValueChange={(status) => updateFormState("neuteredStatus", status)}
      >
        <Picker.Item label="No" value="no" />
        <Picker.Item label="Yes" value="yes" />
      </Picker>
      <Button
        title="Create new pet"
        onPress={() => {
          console.log("submit form!");
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    margin: 8,
  },
});

export default AddPet;
