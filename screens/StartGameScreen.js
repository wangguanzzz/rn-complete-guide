import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const StartGameScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>start a new game</Text>
      <View style={styles.inputContainer}>
        <Text>Select a new</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button title="Reset" />
          <Button title="Confirm" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 15
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  }
});

export default StartGameScreen;
