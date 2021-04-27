import React from "react";
import { StyleSheet, Text, View, TouchableOpacity,Button } from "react-native";
const Task = ({ id, title, toggleDone, isDone, deleteTask }) => {
  const styles = StyleSheet.create({
    task: {
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginVertical: 20,
      backgroundColor: isDone ?  "#e5e5e5" : "#fca311",
      flexDirection: "row",
      justifyContent: "space-between",
      borderRadius: 5,
    },
    taskText : {
        fontSize: 20,
        textDecorationLine : isDone ? 'line-through' : "none"
    }
  });
  return (
    <TouchableOpacity
      onPress={() => {
        toggleDone(id);
      }}
    >
      <View style={(styles.task)}>
        <Text style={(styles.taskText)}>{title}</Text>
        <Button title="Delete" color="#e63946" onPress={ () => deleteTask(id)}/>
      </View>
    </TouchableOpacity>
  );
};

export default Task;
