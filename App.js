import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        <TextInput placeholder="enter a task" />
        <Button title="Add task" />
      </View>
      <View><Text>This iis s a text</Text></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#adf",
    paddingVertical: 40,
    paddingHorizontal: 10,
    flexDirection:"column",
    // alignItems: "flex-start"
    
  },
  inputContainer: {
    flexDirection: "row",
    backgroundColor: "#fd34",
    justifyContent: "space-between",
  },
});
