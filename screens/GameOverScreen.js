import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text> The Game is Over!</Text>
      <Text>Number of Rounds: {props.roundsNumber}</Text>
      <Text>It was: {props.userNumber} </Text>
      <Button title="new game" onPress={props.onNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;
